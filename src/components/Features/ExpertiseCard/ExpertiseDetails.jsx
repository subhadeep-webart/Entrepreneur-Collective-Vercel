import LinkButton from "@/components/ui/Buttons/LinkButton";

const ExpertiseDetails = ({ headerText = "", subText = "", buttonText = "", href = "#" }) => {
    return (
        <div className="w-full flex flex-col items-center gap-8">
            <h3 className="font-semibold text-[26px] text-center text-black">{headerText}</h3>
            <p className="font-normal text-sm text-center text-black">{subText}</p>
            <LinkButton href={href} className={"border-1 border-black bg-transparent w-48"}>
                {buttonText}
            </LinkButton>
        </div>
    )
}

export default ExpertiseDetails;