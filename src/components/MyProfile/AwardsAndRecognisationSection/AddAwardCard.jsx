import { Icons } from "@/assets";
import CardComponent from "@/components/ui/Cards/CardComponent";
import InputField from "@/components/ui/InputField";

const AddAwardCard = () => {
  return (
    <CardComponent className={"bg-transparent border-none"}>
      <CardComponent.Body>
        <div className="w-28 h-28 rounded-full bg-off-white-gray border-1 border-gray-500 flex justify-center items-center">
          <Icons.Plus size={26} className="text-black" />
        </div>
      
        <InputField
          placeholder="Add award name"
          classNames={{
            inputWrapper: ["!py-0"],
            input: [
              "text-black",
              "font-semibold",
              "placeholder:text-foreground",
              "placeholder:font-semibold",
              "placeholder:text-xs",
            ],
          }}
        />
      </CardComponent.Body>
    </CardComponent>
  );
};

export default AddAwardCard;
