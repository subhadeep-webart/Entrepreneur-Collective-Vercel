import { Icons } from "@/assets";
import { Button, cn } from "@heroui/react";

const CaraousalNavigation = ({ prevRef, nextRef, onPrevClick, onNextClick, buttonStyle, showPrev = true,
    showNext = true, }) => {
    return (
        <>
            {showPrev && <Button
                isIconOnly
                aria-label={"Next"}
                radius="full"
                className={cn("absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md opacity-100 group-hover:opacity-100 transition-opacity border-1 border-foreground min-h-5 h-5 min-w-5 !w-5", buttonStyle)}
                ref={prevRef}
                onPress={onPrevClick}
            >
                <Icons.ChevronLeft className="text-foreground" />
            </Button>}
            {showNext && <Button
                isIconOnly
                aria-label={"Next"}
                radius="full"
                ref={nextRef}
                className={cn("absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md opacity-100 group-hover:opacity-100 transition-opacity border-1 border-foreground min-h-5 h-5 min-w-5 !w-5", buttonStyle)}
                onPress={onNextClick}
            >
                <Icons.ChevronRight className="text-foreground" />
            </Button>}
        </>
    )
}

export default CaraousalNavigation;