import type { FC } from "react";
import type { CheckboxProps } from "./checkbox.types";
import { cn } from "@/utils";
import { variantStyles } from "./checkbox.variants";
import Loader from "../loaders/Loader";


const Checkbox: FC<CheckboxProps> = ({
  label,
  labelClass,
  variant = "primary",
  checked = false,
  disabled = false,
  isLoading = false,
  onChange,
  name,
  id,
  value,
  labelLeft = false,
  wrapperClass,
  checkboxClass,
  className,
  ...props
}) => {
  const baseStyles =
    "w-5 h-5 rounded border flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const checkIcon = (
    <svg
      className="w-3 h-3 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  const checkboxElement = (
    <span
      className={cn(
        baseStyles,
        variantStyles[variant],
        checkboxClass,
        checked && "bg-current border-current",
        className
      )}
    >
      {isLoading ? (
        <Loader type="spinner" size={12} color="inherit" thickness={3} />
      ) : (
        checked && checkIcon
      )}
    </span>
  );

  return (
    <label
      htmlFor={id || name}
      className={cn(
        "inline-flex items-center gap-2 cursor-pointer",
        wrapperClass
      )}
    >
      {labelLeft && label && <span className={labelClass}>{label}</span>}
      <input
        type="checkbox"
        id={id || name}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled || isLoading}
        onChange={onChange}
        className="hidden"
        {...props}
      />
      {checkboxElement}
      {!labelLeft && label && <span className={labelClass}>{label}</span>}
    </label>
  );
};

export default Checkbox;
