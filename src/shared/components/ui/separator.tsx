import * as React from "react";

import { cn } from "@/utils";

type SeparatorProps = React.HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical";
};

const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => (
    <hr
      ref={ref}
      role="separator"
      aria-orientation={orientation === "vertical" ? "vertical" : "horizontal"}
      className={cn(
        "shrink-0 border-0 bg-[var(--dull-border)]",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = "Separator";

export { Separator };
