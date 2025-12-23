import CardComponent from "@/components/ui/Cards/CardComponent";

const ExpertiseCard = ({children}) => {
    return (
        <CardComponent>
            <CardComponent.Body className={"flex flex-col gap-9 !px-2.5"}>
                {children}
            </CardComponent.Body>
        </CardComponent>
    )
}

export default ExpertiseCard;