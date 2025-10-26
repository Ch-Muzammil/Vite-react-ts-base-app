import React from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClass?: string;
  variant?: "primary" | "secondary" | "danger";
  checked?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  value?: string | number;
  labelLeft?: boolean;
  wrapperClass?: string;
  checkboxClass?: string;
}
