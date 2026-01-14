"use client"

import SearchButton from "@/components/shared/Buttons/SearchButton"
import { cn, Input } from "@heroui/react"
import { useState } from "react"

const SearchTextArea = () => {

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleToggleSearch = () => {
        setIsSearchOpen(prev => !prev);
    }

    return (
        <div
            className={cn(
                "rounded-[53px] max-w-[307px] w-full flex transition-all duration-300 overflow-hidden",
                isSearchOpen
                    ? "border border-gainsboro"
                    : "border border-transparent"
            )}
        >
            <Input
                isClearable
                classNames={{
                    inputWrapper: "bg-transparent hover:!bg-transparent shadow-none group-data-[focus=true]:bg-transparent",
                    innerWrapper: "!pr-8 !pl-6"
                }}
                className={cn("transition-opacity delay-100", isSearchOpen ? "opacity-100" : "opacity-0")}
                placeholder="Search"
            />
            <SearchButton clickHandler={handleToggleSearch} />
        </div>
    )
}

export default SearchTextArea