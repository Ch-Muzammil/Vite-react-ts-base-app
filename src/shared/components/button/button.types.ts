export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "ghost"
  | "success"
  | "warning"
  | "info";

import React from "react";

export type ButtonProps = {
  title?: string | React.ReactNode;
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
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
