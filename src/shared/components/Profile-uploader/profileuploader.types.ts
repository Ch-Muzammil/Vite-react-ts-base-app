export interface ProfileUploaderProps {
  label?: string;
  labelClass?: string;
  wrapperClass?: string;
  inputClass?: string;
  previewClass?: string;
  error?: string;

  variant?: "primary" | "secondary" | "danger";
  isLoading?: boolean;
  accept?: string; 

  defaultImage?: string; 
  onChange?: (file: File | null) => void;
  onRemove?: () => void;
}
