import CardComponent from "@/components/ui/Cards/CardComponent";
import AddYourServiceModal from "./AddYourServiceModal";

const AddYourServiceCard = () => {
  return (
    <CardComponent>
      <CardComponent.Body
        className={"flex flex-col justify-center items-center gap-4 min-h-[100px] max-h-[206px]"}
      >
        {/* <div className="w-[70px] h-[70px] rounded-full flex justify-center items-center bg-off-white border-2 border-silver-gray-lite">
                    <Icons.Plus size={18} className="text-black" />
                </div> */}
        <AddYourServiceModal />

        <p className="text-gunmetal-gray text-base font-semibold">
          Add your service
        </p>
      </CardComponent.Body>
    </CardComponent>
  );
};

export default AddYourServiceCard;
