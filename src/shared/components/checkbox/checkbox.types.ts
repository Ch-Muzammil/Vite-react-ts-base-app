import type { ChangeEvent, InputHTMLAttributes } from "react";

export interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClass?: string;
  variant?: "primary" | "secondary" | "danger";
  checked?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  value?: string | number;
  labelLeft?: boolean;
  wrapperClass?: string;
  checkboxClass?: string;
}
