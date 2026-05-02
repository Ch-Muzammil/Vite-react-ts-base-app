import type {
  ElementType,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export type InputVariant =
  | "default"
  | "secondary"
  | "danger"
  | "success"
  | "warning";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: InputVariant;
  error?: string;
  showToggle?: boolean;
  className?: string;
  labelClass?: string;
  wrapperClass?: string;
}

export type TextareaVariant =
  | "default"
  | "secondary"
  | "danger"
  | "success"
  | "warning";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  variant?: TextareaVariant;
  error?: string | string[];
  className?: string;
  labelClass?: string;
  wrapperClass?: string;
  resize?: "none" | "x" | "y" | "both";
}

export interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  variant?: "default" | "secondary";
  error?: string;
  className?: string;
  labelClass?: string;
  wrapperClass?: string;
  placeholder?: string;
  iconPosition?: "left" | "right";
  icon?: ElementType;
}
