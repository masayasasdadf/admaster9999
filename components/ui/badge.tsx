import * as React from "react"
import { cn } from "@/lib/utils"

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium", className)} {...props} />
}
