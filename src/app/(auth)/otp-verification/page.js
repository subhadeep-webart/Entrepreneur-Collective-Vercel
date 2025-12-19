import { PUBLIC_IMAGES } from "@/assets";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import BannerImageMask from "@/components/shared/BannerImageMask";
import AuthPageWrapper from "@/components/shared/Wrapper/AuthPageWrapper";
import OtpVerificationForm from "@/components/ui/Forms/OtpVerificationForm";

const OtpVerificationPage = () => {
    return (
        <AuthPageWrapper>
            <div className="w-full container flex items-end h-screen gap-32">
                <AuthFormWrapper headerText="OTP Verification">
                    <div className="w-full flex flex-col gap-7">
                        <h4 className="text-charcoal text-sm font-normal">
                            One Time Password (OTP) has been sent via Email to{" "}
                            <span className="font-semibold">hellosmith*****@gmail.com</span>
                        </h4>
                        <p className="text-gray-muted font-normal text-sm">
                            Enter the OTP below to verify it.
                        </p>
                    </div>
                    <div className="w-full h-full flex items-start !pb-44">
                        <AuthFormWrapper>
                            <OtpVerificationForm />
                        </AuthFormWrapper>
                    </div>
                </AuthFormWrapper>
                <BannerImageMask bannerText="REGISTER" image={PUBLIC_IMAGES?.BannerImage}/>
            </div>
        </AuthPageWrapper>
    )
}

export default OtpVerificationPage;