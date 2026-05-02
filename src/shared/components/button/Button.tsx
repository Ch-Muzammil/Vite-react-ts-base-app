import type { FC } from "react";
import type { ButtonProps } from "./button.types";
import { variantStyles } from "./button.variants";
import { cn } from "@/utils";
import Loader from "../loaders/Loader";

const Button: FC<ButtonProps> = ({
  title,
  children,
  variant = "primary",
  isLoading = false,
  link,
  disabled,
  titleClass,
  showImg,
  imgSrc,
  imgAlt,
  imgClass,
  imgLeft,
  imgRight,
  btnClass,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const imgElement =
    showImg && imgSrc ? (
      <img
        src={imgSrc}
        alt={imgAlt || "button icon"}
        className={cn("w-4 h-4", imgClass)}
      />
    ) : null;

  const content = (
    <>
      {isLoading && (
        <Loader type="spinner" size={12} color="inherit" thickness={3} />
      )}
      {imgLeft && imgElement}
      {title && <span className={titleClass}>{title}</span>}
      {children}
      {imgRight && imgElement}
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        className={cn(baseStyles, variantStyles[variant], btnClass, className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(baseStyles, variantStyles[variant], btnClass, className)}
    >
      {content}
    </button>
  );
};

export default Button;
