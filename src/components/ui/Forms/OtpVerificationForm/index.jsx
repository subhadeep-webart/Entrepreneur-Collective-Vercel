"use client";

import { useState } from "react";
import OtpInput from "../../InputField/OtpInput";
import styles from "./otpverificatonform.module.css";
import CustomButton from "../../Buttons/CustomButton";
import { useRouter } from "next/navigation";

const USER_TYPE_KEY = "ec_user_type";

const OtpVerificationForm = () => {
  const router = useRouter();
  const [userType, setUserType] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(USER_TYPE_KEY);
    }
    return null;
  });

  const handleVerifyOtp = () => {
    if (userType === "business") {
      router.push("/business/my-profile");
    } else if (userType === "freelancer") {
      router.push("/freelancer/my-profile");
    } else {
      router.push("/");
    }
  };

  return (
    <form className={styles.otp_form_container}>
      <OtpInput />
      <p className="text-dark-slate text-sm font-light">
        Resend OTP in: <span className="font-normal"> 00:08 </span>
      </p>
      <div className="w-full">
        <CustomButton className="w-48 h-14" clickHandler={handleVerifyOtp}>
          Verify OTP
        </CustomButton>
      </div>
    </form>
  );
};

export default OtpVerificationForm;
