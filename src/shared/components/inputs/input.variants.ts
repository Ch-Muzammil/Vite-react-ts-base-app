import type { InputVariant } from "./input.types";
import type { TextareaVariant } from "./input.types";

export const inputVariantStyles: Record<InputVariant, string> = {
  default:
    "border border-[var(--primary)] focus:ring-[var(--primary)] text-[var(--primary)]",
  secondary:
    "border border-[var(--secondary)] focus:ring-[var(--secondary)] text-[var(--secondary)]",
  danger:
    "border border-[var(--danger)] focus:ring-[var(--danger)] text-[var(--danger)]",
  success:
    "border border-[var(--success)] focus:ring-[var(--success)] text-[var(--success)]",
  warning:
    "border border-[var(--warning)] focus:ring-[var(--warning)] text-[var(--warning)]",
};

export const textareaVariantStyles: Record<TextareaVariant, string> = {
  default:
    "border border-[var(--primary)] focus:ring-[var(--primary)] text-[var(--primary)]",
  secondary:
    "border border-[var(--secondary)] focus:ring-[var(--secondary)] text-[var(--secondary)]",
  danger:
    "border border-[var(--danger)] focus:ring-[var(--danger)] text-[var(--danger)]",
  success:
    "border border-[var(--success)] focus:ring-[var(--success)] text-[var(--success)]",
  warning:
    "border border-[var(--warning)] focus:ring-[var(--warning)] text-[var(--warning)]",
};
