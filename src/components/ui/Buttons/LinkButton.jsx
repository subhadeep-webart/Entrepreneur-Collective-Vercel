"use client"
import Link from "next/link";
import { cn } from "@heroui/react";

const LinkButton = ({ href, children, className, ...props }) => {
    return (
        <Link
            href={href}
            className={cn(
                "bg-primary min-w-9 w-9 h-9 flex justify-center items-center",
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
};

export default LinkButton;