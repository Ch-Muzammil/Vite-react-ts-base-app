export interface FileInputProps {
  label?: string;
  labelClass?: string;
  wrapperClass?: string;
  inputClass?: string;
  previewClass?: string;
  error?: string;

  variant?: "primary" | "secondary" | "danger";
  multiple?: boolean;
  accept?: string; // "image/*", ".pdf", etc.
  isLoading?: boolean;

  // callbacks
  onChange?: (files: File[]) => void;
  onRemove?: (index: number) => void;
}
