import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";

const ThankyouPage = () => {
  return (
    <div className="flex items-center justify-center !py-32">
    <div className="w-full max-w-[870px] bg-white flex flex-col items-center justify-center gap-7 !py-20">
        <Icons.CircleCheck fill="#397242" color="#ffffff" size={140}/>
      <h3 className="text-6xl font-semibold text-black-cherry">Thank You</h3>
      <p className="text-xl font-normal text-black">Your payment has been successfully updated</p>
      <CustomButton className="w-48 h-12">Explore your feed</CustomButton>
    </div>
    </div>
  );
};

export default ThankyouPage;
