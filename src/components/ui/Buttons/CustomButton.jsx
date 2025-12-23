"use client";

import { Button, cn } from "@heroui/react";

const CustomButton = ({
    label = "",
    clickHandler = () => { },
    children,
    className = "",
    variant = "solid",
    type = "button",
    isIconOnly = false
}) => {
    return (
        <Button
            type={type}
            aria-label={label}
            radius="full"
            className={cn("bg-primary rounded-none min-h-10 h-10 min-w-10 w-10 text-black text-base font-medium", className)}
            onPress={clickHandler}
            variant={variant}
            isIconOnly={isIconOnly}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
