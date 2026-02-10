"use client";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { useRouter } from "next/navigation";

const USER_TYPE_KEY = "ec_user_type";

const ButtonGroup = () => {
     const router = useRouter();
    
       const handleRegister = (type) => {
        localStorage.setItem(USER_TYPE_KEY, type);
        router.push("/registration");
      };
    
    return (
        <>
            <CustomButton
               clickHandler={() => handleRegister("business")}
                className="w-48 h-14 font-medium text-sm text-foreground"
            >
              Register as business
            </CustomButton>

            <CustomButton
                clickHandler={() => handleRegister("freelancer")}
                className="w-48 h-14 border border-dark-gray bg-transparent font-medium text-sm text-foreground"
            >
              Register as Freelancer
            </CustomButton>
        </>
    )
}

export default ButtonGroup;