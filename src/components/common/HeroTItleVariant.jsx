import { cn } from '@/lib/utils'
import React from 'react'

const HeroTItleVariant = ({children, className, variant = "default"}) => 
{
    const variants = 
    {
        default: "text-rose-400",
        primary: "text-rose-600",
        secondary: "text-rose-800"
    }

    const baseClass = "text-xl"

  return (
   <h1 className={cn(baseClass, className, variants[variant])}>
        {children}
   </h1>
  )
}

export default HeroTItleVariant