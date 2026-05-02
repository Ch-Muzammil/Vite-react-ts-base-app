import { cva } from "class-variance-authority";

export const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-[var(--primary-text-color)] [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default:
          "border-[var(--dull-border)] bg-[var(--white-color)] text-[var(--primary-text-color)]",
        destructive:
          "border-[var(--light-red)]/40 bg-[var(--white-color)] text-[var(--light-red)] [&>svg]:text-[var(--light-red)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
