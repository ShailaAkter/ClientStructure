import { cn } from "@/lib/utils";

const HeroTitle = ({children, className}) => 
{
    const baseClass = "text-xl md:text-xl xl:text-2xl text-black";

  return (
    <h1 className={cn(baseClass, className)}>
        {children}
    </h1>
  )
}

export default HeroTitle