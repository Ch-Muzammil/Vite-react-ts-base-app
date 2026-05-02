import type { FC } from "react";
import { cn } from "@/utils";
import type { SearchInputProps } from "./input.types";
import { inputVariantStyles } from "./input.variants";
import { Search } from "lucide-react";

const SearchInput: FC<SearchInputProps> = ({
  label,
  variant = "default",
  error,
  className,
  labelClass,
  wrapperClass,
  placeholder = "Search...",
  iconPosition = "left",
  icon: Icon = Search,
  ...rest
}) => {
  return (
    <div className={cn("flex flex-col gap-1 w-full", wrapperClass)}>
      {label && (
        <label
          className={cn("text-sm font-medium text-gray-700", labelClass)}
          htmlFor={rest.id}
        >
          {label}
        </label>
      )}

      <div className="relative w-full">
        {iconPosition === "left" && (
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500 pointer-events-none">
            <Icon className="w-5 h-5" />
          </span>
        )}

        <input
          type="text"
          placeholder={placeholder}
          className={cn(
            "w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2",
            iconPosition === "left" ? "pl-10" : "pr-10",
            inputVariantStyles[variant],
            error && "border-[var(--danger)] focus:ring-[var(--danger)]",
            className
          )}
          {...rest}
        />

        {iconPosition === "right" && (
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 pointer-events-none">
            <Icon className="w-5 h-5" />
          </span>
        )}
      </div>

      {error && <p className="text-xs text-[var(--danger)]">{error}</p>}
    </div>
  );
};

export default SearchInput;
