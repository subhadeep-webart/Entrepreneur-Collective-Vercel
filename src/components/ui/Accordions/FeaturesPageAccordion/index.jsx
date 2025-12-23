"use client"

import { Icons } from "@/assets";
import { Accordion, AccordionItem } from "@heroui/react";

const FeaturesPageAccordion = () => {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return (
        <Accordion defaultExpandedKeys={["theme"]}
            itemClasses={{
                base: "!border-white",
                trigger: "!pt-10 !pb-7",
                title: "text-light-gray font-medium text-[22px]",
                content: "text-white font-normal text-base !py-4 !px-1",
                divider: "bg-white"
            }}
            dividerProps={{
                className: "bg-white"
            }}
        >
            <AccordionItem
                key="theme"
                aria-label="Theme"
                indicator={({ isOpen }) => (isOpen ? <Icons.CircleMinus size={24} className="text-primary" /> : <Icons.CirclePlus size={24} className="text-primary" />)}
                title="Theme"
            >
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="anchor" aria-label="Anchor" indicator={({ isOpen }) => (isOpen ? <Icons.CircleMinus size={24} className="text-primary" /> : <Icons.CirclePlus size={24} className="text-primary" />)} title="Anchor">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="sun" aria-label="Sun" indicator={({ isOpen }) => (isOpen ? <Icons.CircleMinus size={24} className="text-primary" /> : <Icons.CirclePlus size={24} className="text-primary" />)} title="Sun">
                {defaultContent}
            </AccordionItem>
        </Accordion>
    )
}

export default FeaturesPageAccordion;