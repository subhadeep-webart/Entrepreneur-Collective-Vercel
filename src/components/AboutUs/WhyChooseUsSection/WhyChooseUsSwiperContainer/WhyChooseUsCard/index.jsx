import CardComponent from "@/components/ui/Cards/CardComponent";
import { Avatar } from "@heroui/react";

const WhyChooseUsCard = ({ review }) => {
    const { text, img, name } = review;
    return (
        <CardComponent>
            <CardComponent.Body className={"flex flex-col gap-3 justify-center items-center"}>
                <Avatar className="h-[90px] w-[90px]" src={img} />
                <div className="flex flex-col gap-1.5">
                    <p className="w-full text-center">{text}</p>
                    <h3 className="text-center font-bold text-light-charcoal text-sm">{name}</h3>
                </div>
            </CardComponent.Body>
        </CardComponent>
    )
}

export default WhyChooseUsCard;