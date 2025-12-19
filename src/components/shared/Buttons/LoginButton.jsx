import LinkButton from "@/components/ui/Buttons/LinkButton";

const LoginButton = () => {
    return (
        <LinkButton href={"/login"} className={"w-28 h-12"}>
            Login
        </LinkButton>
    )
}

export default LoginButton;