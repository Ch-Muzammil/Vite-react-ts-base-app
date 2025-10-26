import type { ButtonVariant } from "./button.types";

export const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover)] focus:ring-[var(--primary-color)]",
  secondary:
    "bg-[var(--secondary-color)] text-white hover:bg-[var(--secondary-hover)] focus:ring-[var(--secondary-color)]",
  danger:
    "bg-[var(--danger-color)] text-white hover:bg-[var(--danger-hover)] focus:ring-[var(--danger-color)]",
  outline:
    "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-400",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  success:
    "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
  warning:
    "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400",
  info:
    "bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500",
};
