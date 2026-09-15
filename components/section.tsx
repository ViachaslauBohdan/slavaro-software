import { cn } from "@/lib/utils"

export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id?: string
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) {
  return (
    <section id={id} className={cn("relative py-20 lg:py-28", className)}>
      <div className={cn("mx-auto max-w-6xl px-5 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
