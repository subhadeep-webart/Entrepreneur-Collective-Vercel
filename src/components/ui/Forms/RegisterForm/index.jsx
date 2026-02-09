"use client";
import { useState } from "react";
import LinkButton from "../../Buttons/LinkButton";
import InputField from "../../InputField";
import FormFooter from "../component/FormFooter";
import styles from "./regitrationform.module.css";

const USER_TYPE_KEY = "ec_user_type";
const RegisterForm = () => {
  const [userType, setUserType] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(USER_TYPE_KEY);
    }
    return null;
  });

  return (
    <form className={styles.registration_form_container}>
      <div className="grid grid-cols-1">
        <InputField label="Email" placeholder="Enter email" type="email" />
      </div>
      <div className="grid grid-cols-1">
        <InputField
          label="Password"
          placeholder="Enter Password"
          type="password"
        />
      </div>
      <div className="grid grid-cols-1">
        <InputField
          label="Confirm Password"
          placeholder="Enter Confirm Password"
          type="password"
        />
      </div>
      <div className="w-full flex justify-between items-center !py-4">
        <LinkButton className="w-48 h-14" href={"/otp-verification"}>
          {userType === "business"
            ? "Register as Business"
            : "Register as Freelancer"}
        </LinkButton>
        <LinkButton
          href={"/forgot-pssword"}
          className={"text-link w-36 font-bold text-sm bg-transparent"}
        >
          Forgot password ?
        </LinkButton>
      </div>
      <div className="flex w-full flex-col gap-7">
        <FormFooter isLoginPage={false} />
      </div>
    </form>
  );
};

export default RegisterForm;
