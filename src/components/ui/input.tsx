import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      "flex h-10 w-full border border-brand-border bg-white px-3 py-2 text-sm text-brand-text rounded-md hover:border-brand transition-colors focus:outline-none focus:border-brand placeholder:text-brand-text-light",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
