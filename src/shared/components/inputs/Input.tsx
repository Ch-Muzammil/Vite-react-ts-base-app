import React, { useState } from "react";
import { cn } from "@src/utils/index";
import type { InputProps } from "./input.types";
import { inputVariantStyles } from "./input.variants";
import { Eye, EyeOff } from "lucide-react";

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  variant = "default",
  error,
  showToggle = false,
  className,
  labelClass,
  wrapperClass,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" && showToggle
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className={cn("flex flex-col gap-1 w-full", wrapperClass)}>
      {label && (
        <label
          className={cn("text-sm font-medium text-gray-700", labelClass)}
          htmlFor={rest.id}
        >
          {label}
        </label>
      )}

      <div className="relative w-full">
        <input
          type={inputType}
          className={cn(
            "w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2",
            inputVariantStyles[variant],
            error && "border-[var(--danger)] focus:ring-[var(--danger)]",
            className
          )}
          {...rest}
        />

        {type === "password" && showToggle && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {error && <p className="text-xs text-[var(--danger)]">{error}</p>}
    </div>
  );
};

export default Input;
