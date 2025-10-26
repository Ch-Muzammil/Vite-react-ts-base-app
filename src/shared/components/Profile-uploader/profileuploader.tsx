import React, { useRef, useState } from "react";

import { cn } from "@src/utils";
import type { ProfileUploaderProps } from "./profileuploader.types";
import Loader from "../loaders/Loader";
import { variantStyles } from "./profileuploader.variants";

const ProfileUploader: React.FC<ProfileUploaderProps> = ({
  label,
  labelClass,
  wrapperClass,
  inputClass,
  previewClass,
  error,
  variant = "primary",
  isLoading = false,
  accept = "image/*",
  defaultImage,
  onChange,
  onRemove,
}) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] || null;
    setFile(selected);
    onChange?.(selected);
  };

  const removeFile = () => {
    setFile(null);
    onRemove?.();
    if (fileRef.current) fileRef.current.value = "";
  };

  const previewUrl = file ? URL.createObjectURL(file) : defaultImage || null;

  return (
    <div className={cn("flex flex-col gap-2", wrapperClass)}>
      {label && <span className={cn("font-medium", labelClass)}>{label}</span>}

      <div
        className={cn(
          "relative flex flex-col items-center justify-center w-32 h-32 rounded-full overflow-hidden cursor-pointer transition-all",
          variantStyles[variant],
          inputClass
        )}
        onClick={() => fileRef.current?.click()}
      >
        {isLoading ? (
          <Loader />
        ) : previewUrl ? (
          <img
            src={previewUrl}
            alt="Profile"
            className={cn("object-cover w-full h-full", previewClass)}
          />
        ) : (
          <p className="text-xs text-gray-500 text-center px-2">Upload Photo</p>
        )}
        <input
          type="file"
          ref={fileRef}
          className="hidden"
          accept={accept}
          onChange={handleFileChange}
        />
      </div>

      {previewUrl && !isLoading && (
        <button
          type="button"
          className="text-red-500 text-xs mt-1 underline"
          onClick={removeFile}
        >
          Remove
        </button>
      )}

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default ProfileUploader;
