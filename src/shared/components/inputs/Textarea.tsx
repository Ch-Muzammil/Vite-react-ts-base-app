import React from "react";
import { cn } from "@src/utils/index";
import type { TextareaProps } from "./input.types";
import { textareaVariantStyles } from "./input.variants";

const Textarea: React.FC<TextareaProps> = ({
  label,
  variant = "default",
  error,
  className,
  labelClass,
  wrapperClass,
  resize = "y",
  ...rest
}) => {
  const resizeClass =
    resize === "none"
      ? "resize-none"
      : resize === "x"
      ? "resize-x"
      : resize === "y"
      ? "resize-y"
      : "resize";

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

      <textarea
        className={cn(
          "w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2",
          textareaVariantStyles[variant],
          resizeClass,
          error && "border-[var(--danger)] focus:ring-[var(--danger)]",
          className
        )}
        {...rest}
      />

      {error && (
        <p className="text-xs text-[var(--danger)]">
          {error}
        </p>
      )}
    </div>
  );
};

export default Textarea;
