
import CardComponent from "@/components/ui/Cards/CardComponent";
import AddPersonalDetailsModal from "./AddPersonalDetailsModal";

const AddProfileSectionCard = () => {
    return (
        <CardComponent>
            <CardComponent.Body>
                <div className="w-full flex flex-col gap-2.5">
                    <h3 className="font-semibold text-xl text-black">Build Your Professional Identity</h3>
                    <span className="inline-block font-normal text-base text-variant-gray">Add your name/company name, about, and skills to make your profile stand out.</span>
                </div>
            </CardComponent.Body>
            <CardComponent.Footer>
               <AddPersonalDetailsModal/>
            </CardComponent.Footer>
        </CardComponent>
    )
}

export default AddProfileSectionCard;