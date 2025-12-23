import { PUBLIC_IMAGES } from "@/assets";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import BannerImageMask from "@/components/shared/BannerImageMask";
import AuthPageWrapper from "@/components/shared/Wrapper/AuthPageWrapper";
import RegisterForm from "@/components/ui/Forms/RegisterForm";

const RegistrationPage = () => {
    return (
        <AuthPageWrapper>
            <div className="w-full container flex items-end h-[700px] gap-32">
                <div className="w-full h-full flex items-end justify-start !pb-11">
                    <AuthFormWrapper headerText="Let’s get you signed in">
                        <RegisterForm />
                    </AuthFormWrapper>
                </div>
                <BannerImageMask image={PUBLIC_IMAGES?.BannerImage} bannerText="REGISTER" />
            </div>
        </AuthPageWrapper>
    )
}

export default RegistrationPage;