import CardComponent from "@/components/ui/Cards/CardComponent";
import AddYourServiceModal from "./AddYourServiceModal";

const AddYourServiceCard = () => {
  return (
    <CardComponent>
      <CardComponent.Body
        className={"flex flex-col justify-center items-center gap-4 h-[206px]"}
      >
       
        <AddYourServiceModal />

        <p className="text-gunmetal-gray text-base font-semibold">
          Add your service
        </p>
      </CardComponent.Body>
    </CardComponent>
  );
};

export default AddYourServiceCard;
