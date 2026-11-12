import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "lime"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default:
      "border-transparent bg-zinc-800 text-zinc-200",
    outline:
      "border border-[#272c35] text-zinc-300 bg-[#15181e]/80",
    lime:
      "border border-[#a3e635]/30 bg-[#a3e635]/10 text-[#a3e635] font-medium",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm font-normal tracking-wide transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
