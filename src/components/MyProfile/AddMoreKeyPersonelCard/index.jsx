
import CardComponent from "@/components/ui/Cards/CardComponent";
import AddKeyPersonnelModal from "./AddKeyPersonnelModal";

const AddMoreKeyPersonalCard = () => {
    return (
        <CardComponent>
            <CardComponent.Body>
                <div className="w-full flex flex-col gap-2.5">
                    <h3 className="font-semibold text-xl text-black">Key personnel</h3>
                    <span className="inline-block font-normal text-base text-variant-gray">Our key personnel are industry professionals who lead with vision, integrity, and expertise — guiding our company’s growth, innovation, and success.</span>
                </div>
            </CardComponent.Body>
            <CardComponent.Footer>
                <AddKeyPersonnelModal/>
            </CardComponent.Footer>
        </CardComponent>
    )
}

export default AddMoreKeyPersonalCard;