import React, { useRef, useState } from "react";

import type { FileInputProps } from "./fileinput.types";
import { cn } from "@src/utils";
import { variantStyles } from "./fileinput.variants";
import Loader from "../../loaders/Loader";

const FileInput: React.FC<FileInputProps> = ({
  label,
  labelClass,
  wrapperClass,
  inputClass,
  previewClass,
  error,
  variant = "primary",
  multiple = false,
  accept = "image/*",
  isLoading = false,
  onChange,
  onRemove,
}) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];

    let updatedFiles = multiple ? [...files, ...selectedFiles] : selectedFiles;

    setFiles(updatedFiles);
    onChange?.(updatedFiles);
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onRemove?.(index);
  };

  return (
    <div className={cn("flex flex-col gap-2", wrapperClass)}>
      {label && <span className={cn("font-medium", labelClass)}>{label}</span>}

      <div
        className={cn(
          "flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer transition-all",
          variantStyles[variant],
          inputClass
        )}
        onClick={() => fileRef.current?.click()}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <p className="text-sm text-gray-500">Click to upload file</p>
        )}
        <input
          type="file"
          ref={fileRef}
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
        />
      </div>

      {/* preview section */}
      {files.length > 0 && (
        <div className="flex gap-2 flex-wrap mt-2">
          {files.map((file, index) => (
            <div
              key={index}
              className={cn(
                "relative border rounded-md overflow-hidden w-20 h-20 flex items-center justify-center",
                previewClass
              )}
            >
              {file.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-xs text-gray-600 text-center p-1">
                  {file.name}
                </span>
              )}
              <button
                type="button"
                className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                onClick={() => removeFile(index)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* error section */}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default FileInput;
