import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--primary-color)] text-[var(--text-white)] shadow",
        secondary:
          "border-transparent bg-[var(--light-grey)] text-[var(--secondary-text-color)]",
        outline:
          "border-[var(--dull-border)] bg-transparent text-[var(--primary-text-color)]",
        destructive:
          "border-transparent bg-[var(--light-red)] text-[var(--text-white)]",
        success:
          "border-transparent bg-[var(--light-green)] text-[var(--text-primary-dark)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
