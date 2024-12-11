import HeroTitle from "@/components/common/HeroTitle"
import HeroTItleVariant from "@/components/common/HeroTItleVariant"
import { cn } from "@/lib/utils";
import { useState } from "react";

const Hero = () => 
{
  const [isBlue, setIsBlue] = useState(true);

  const toggleColor = () => 
  {
    setIsBlue((prev) => !prev);
  };

  return (
    <div className="h-screen bg-lime-50 flex flex-col justify-center items-center space-y-10">
      <HeroTitle>
        Welcome
      </HeroTitle>

      <HeroTitle className="text-xs text-rose-800">
        Here used override function
      </HeroTitle>

      <HeroTItleVariant variant="primary">
        used variant
      </HeroTItleVariant>

      <HeroTitle className="text-sm">
        override variant and classes
      </HeroTitle>

      <button
        onClick={toggleColor}
        className={cn(
          "px-4 py-2 font-semibold text-white rounded transition",
          isBlue ? "bg-blue-500 hover:bg-blue-600" : "bg-red-500 hover:bg-red-600"
        )}
      >
        {isBlue ? "Blue" : "Red"}
      </button>

    </div>
  )
}

export default Hero