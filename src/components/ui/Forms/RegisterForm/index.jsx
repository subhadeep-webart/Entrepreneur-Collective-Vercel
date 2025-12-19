import CustomButton from "../../Buttons/CustomButton";
import LinkButton from "../../Buttons/LinkButton";
import InputField from "../../InputField";
import FormFooter from "../component/FormFooter";
import styles from "./regitrationform.module.css";
const RegisterForm = () => {
    return (
        <form className={styles.registration_form_container}>
            <div className="grid grid-cols-1">
                <InputField label="Email" placeholder="Enter email" type="email" />
            </div>
            <div className="grid grid-cols-1">
                <InputField label="Password" placeholder="Enter Password" type="password" />
            </div>
            <div className="grid grid-cols-1">
                <InputField label="Confirm Password" placeholder="Enter Confirm Password" type="password" />
            </div>
            <div className="w-full flex justify-between items-center !py-4">
                <CustomButton className="w-48 h-14">
                    Login
                </CustomButton>
                <LinkButton href={"/forgot-pssword"} className={"text-link w-36 font-bold text-sm bg-transparent"}>
                    Forgot password ?
                </LinkButton>
            </div>
            <div className="flex w-full flex-col gap-7">
                <FormFooter isLoginPage={false} />
            </div>
        </form>
    )
}

export default RegisterForm;