"use client"
import CustomButton from "../../Buttons/CustomButton";
import OtpInput from "../../InputField/OtpInput";
import styles from "./otpverificatonform.module.css";
import { useRouter } from "next/navigation";

const OtpVerificationForm = () => {
    const router = useRouter();

    const handleVerifyOtp = () => {
        router.push("/en/login");
    };
    return (
        <form className={styles.otp_form_container}>
            <OtpInput />
            <p className="text-dark-slate text-sm font-light">
                Resend OTP in: <span className="font-normal"> 00:08 </span>
            </p>
            <div className="w-full">
                <CustomButton
                    className="w-48 h-14"
                    clickHandler={handleVerifyOtp}
                >
                    Verify OTP
                </CustomButton>
            </div>
        </form>
    );
};

export default OtpVerificationForm;