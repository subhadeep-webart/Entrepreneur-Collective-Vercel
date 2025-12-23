"use client"

import CardComponent from "@/components/ui/Cards/CardComponent";
import AddConnectionButton from "../../Buttons/AddConnectionButtton";
import { Avatar } from "@heroui/react";

const ConnectionCard = () => {
    return (
        <CardComponent>
            <CardComponent.Body className={"flex items-center flex-col gap-2.5"}>
                <Avatar className="h-[70px] w-[70px]" isBordered />
                <div className="flex flex-col items-center">
                    <p className="text-gunmetal-gray font-semibold text-xs">James Anderson</p>
                    <span className="inline-flex text-graphite-gray text-[11px]">Designer</span>
                </div>
            </CardComponent.Body>
            <CardComponent.Footer className={"flex justify-center"}>
                <AddConnectionButton />
            </CardComponent.Footer>
        </CardComponent>
    )
}

export default ConnectionCard;