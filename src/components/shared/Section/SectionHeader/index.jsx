import { cn } from "@heroui/react"

const SectionHeader = ({ children }) => {
    return (
        <div className="w-full flex justify-between items-center py-2">
            {children}
        </div>
    )
}

const RightContainer = ({ children, className = "" }) => {
    return (
        <div className={cn("flex", className)}>
            {children}
        </div>
    )
}

const LeftContainer = ({ children, className = "" }) => {
    return (
        <h3 className={cn(`text-lg font-semibold text-almost-black`, className)}>
            {children}
        </h3>
    )
}

SectionHeader.RightContainer = RightContainer
SectionHeader.LeftContainer = LeftContainer

export default SectionHeader;