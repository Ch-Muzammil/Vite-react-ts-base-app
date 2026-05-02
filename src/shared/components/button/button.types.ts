import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "ghost"
  | "success"
  | "warning"
  | "info";

export type ButtonProps = {
  title?: string | ReactNode;
  variant?: ButtonVariant;
  isLoading?: boolean;
  link?: string;
  titleClass?: string;
  showImg?: boolean;
  imgSrc?: string;
  imgAlt?: string;
  imgClass?: string;
  imgLeft?: boolean;
  imgRight?: boolean;
  btnClass?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
