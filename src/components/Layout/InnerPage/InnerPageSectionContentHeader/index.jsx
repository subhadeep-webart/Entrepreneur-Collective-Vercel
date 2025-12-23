import { cn } from "@heroui/react";

const InnerPageSectionContentHeader = ({ className, children }) => {
    return (
        <div className={cn(`max-w-[1226px] w-full flex flex-col gap-10 justify-center items-center`, className)}>
            {children}
        </div>
    )
}

const HeaderText = ({ children, className }) => {
    return (
        <h2 className={cn(`font-semibold text-6xl text-foreground leading-16 max-w-[920px] w-full text-center`, className)}>
            {children}
        </h2>
    )
}

const SubText = ({ children, className }) => {
    return (
        <p className={cn(`font-normal text-lg w-full text-foreground leading-7 text-center`, className)}>
            {children}
        </p>
    )
}

InnerPageSectionContentHeader.HeaderText = HeaderText;
InnerPageSectionContentHeader.SubText = SubText;

export default InnerPageSectionContentHeader;