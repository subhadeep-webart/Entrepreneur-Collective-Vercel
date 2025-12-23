import { cn } from "@heroui/react"

const CardComponent = ({ children, className }) => {
    return (
        <div className={cn("w-full bg-white border-1 border-mauve-gray min-h-36 h-full !px-6 !py-9 flex flex-col justify-center items-center gap-7", className)}>
            {children}
        </div>
    )
}

const CardHeader = ({ children, className }) => {
    return (
        <div className={cn(`flex gap-4 justify-start items-start w-full`, className)}>
            {children}
        </div>
    )
}

const CardBody = ({ children, className }) => {
    return (
        <div className={cn(`w-full`, className)}>
            {children}
        </div>
    )

}

const CardFooter = ({ children, className }) => {
    return (
        <div className={cn(`w-full`, className)}>
            {children}
        </div>
    )

}

CardComponent.Header = CardHeader
CardComponent.Body = CardBody
CardComponent.Footer = CardFooter

export default CardComponent