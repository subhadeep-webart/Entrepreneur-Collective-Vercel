import { Icons } from "@/assets";
import Link from "next/link";

const FormFooter = ({ isLoginPage = true }) => {
    const headerText = isLoginPage ? `Don't have an account?` : `Already have an account?`
    const href = isLoginPage ? "/registration" : "/login";
    const linkText = isLoginPage ? "Register" : "Login";
    const googleText = isLoginPage ? "Log In To Continue" : "Sign up To Continue";
    return (
        <>
            <h2 className="text-center font-normal text-base flex items-center gap-2">
                {headerText}{" "}
                <Link href={href} className={"text-link w-fit font-bold text-sm bg-transparent"}>
                    {linkText}
                </Link>
            </h2>
            <p className="font-bold text-lg text-black">OR</p>

            <div className="flex justify-start items-center gap-2">
                <Icons.GoogleIcon height="28px" width="28px" />
                <p className="text-form-text font-normal text-sm">
                    {googleText}
                </p>
            </div>
        </>
    )
}

export default FormFooter;