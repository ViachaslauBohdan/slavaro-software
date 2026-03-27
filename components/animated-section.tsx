"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade"
  delay?: number
  id?: string
}

export function AnimatedSection({ 
  children, 
  className, 
  animation = "fade-up",
  delay = 0,
  id
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  const animationClasses = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-left": "-translate-x-8 opacity-0",
    "fade-right": "translate-x-8 opacity-0",
    "scale": "scale-95 opacity-0",
    "fade": "opacity-0"
  }

  const visibleClasses = "translate-y-0 translate-x-0 scale-100 opacity-100"

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? visibleClasses : animationClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  )
}

interface AnimatedItemProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade"
  delay?: number
  as?: keyof JSX.IntrinsicElements
}

export function AnimatedItem({ 
  children, 
  className, 
  animation = "fade-up",
  delay = 0,
  as: Component = "div"
}: AnimatedItemProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const animationClasses = {
    "fade-up": "translate-y-6 opacity-0",
    "fade-left": "-translate-x-6 opacity-0",
    "fade-right": "translate-x-6 opacity-0",
    "scale": "scale-95 opacity-0",
    "fade": "opacity-0"
  }

  const visibleClasses = "translate-y-0 translate-x-0 scale-100 opacity-100"

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all duration-500 ease-out",
        isVisible ? visibleClasses : animationClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  )
}
