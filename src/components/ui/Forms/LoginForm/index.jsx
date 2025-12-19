"use client"
import { useRouter } from "next/navigation";
import CustomButton from "../../Buttons/CustomButton";
import LinkButton from "../../Buttons/LinkButton";
import InputField from "../../InputField";
import FormFooter from "../component/FormFooter";
import styles from "./loginform.module.css";
const LoginForm = () => {
    const router = useRouter();
    return (
        <form className={styles.login_form_container}>
            <div className="grid grid-cols-1">
                <InputField label="Email" placeholder="Enter email" type="email" />
            </div>
            <div className="grid grid-cols-1">
                <InputField label="Password" placeholder="Enter Password" type="password" />
            </div>
            <div className="w-full flex justify-between items-center !py-4">
                <CustomButton className="w-48 h-14" clickHandler={() => router.push("/otp-verification")}>
                    Login
                </CustomButton>
                <LinkButton href={"/otp-verification"} className={"text-link w-36 font-bold text-sm bg-transparent"}>
                    Forgot password ?
                </LinkButton>
            </div>
            <div className="flex w-full flex-col gap-7">
                <FormFooter />
            </div>
        </form>
    )
}

export default LoginForm;