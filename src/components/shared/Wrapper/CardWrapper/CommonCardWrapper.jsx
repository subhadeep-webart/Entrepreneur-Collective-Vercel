import { cn } from "@heroui/react";

const CommonCardWrapper = ({ children, className }) => {
    return (
        <div className={cn("w-full bg-white border-1 border-mauve-gray min-h-36 h-fit !px-6 !py-9", className)}>
            {children}
        </div>
    )
}

export default CommonCardWrapper;