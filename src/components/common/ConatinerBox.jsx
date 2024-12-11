import { cn } from "@/lib/utils"
import { Helmet } from "react-helmet"

const ConatinerBox = ({children, title}) => 
{
  return (
    <div className={cn('w-full max-w-[1400px] z-10 px-[20px] mx-auto')}>
        <Helmet>
            <title>COMPANY | {title}</title>
        </Helmet>

        {children}
    </div>
  )
}

ConatinerBox.defaultProps = 
{
    title: "Company name"
}

export default ConatinerBox

