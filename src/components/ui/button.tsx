import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#a3e635] disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      default:
        "bg-[#a3e635] text-black font-semibold hover:bg-[#bef264] shadow-sm active:scale-[0.98] transition-transform",
      outline:
        "border border-[#272c35] bg-[#15181e] text-[#f4f4f5] hover:border-[#a3e635] hover:text-[#a3e635]",
      ghost:
        "text-zinc-400 hover:text-[#a3e635] hover:bg-[#15181e]",
    }

    const sizes = {
      default: "h-11 px-5 py-2",
      sm: "h-9 rounded-lg px-3 text-xs",
      lg: "h-13 rounded-xl px-8 text-base",
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
