import CardComponent from "@/components/ui/Cards/CardComponent";
import AddOnsDetails from "./AddOnsDetails";
import CustomButton from "@/components/ui/Buttons/CustomButton";

const AddOnsSubscriptionCard = () => {
    return (
        <CardComponent className={"!py-0 !px-0"}>
            <CardComponent.Header className={"text-[22px] text-white font-semibold flex justify-center items-center !py-5 uppercase bg-coral-red"}>
                Business Growth
            </CardComponent.Header>
            <CardComponent.Body className="col-span-8 col-start-2 grid grid-cols-2 gap-7 !px-4 !py-4">
                <AddOnsDetails />
                <AddOnsDetails />
                <AddOnsDetails />
                <AddOnsDetails />
                <AddOnsDetails />
                <AddOnsDetails />
                <AddOnsDetails />
                <AddOnsDetails />
            </CardComponent.Body>
            <CardComponent.Footer className={"flex flex-col items-center gap-2 !pb-8"}>
                <div className="w-full flex flex-col gap-1 items-center">
                    <p className="text-smoky-black text-lg font-medium">Price</p>
                    <h3 className="text-[32px] font-bold text-smoky-black">$ 50</h3>
                </div>
                <CustomButton className="w-48">
                    Upgrade now
                </CustomButton>
            </CardComponent.Footer>
        </CardComponent>
    )
}

export default AddOnsSubscriptionCard;