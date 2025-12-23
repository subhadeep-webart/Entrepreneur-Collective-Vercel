import LinkButton from "@/components/ui/Buttons/LinkButton";

const RegisterButton = () => {
    return (
        <LinkButton href={"/registration"} className={"w-36 h-12 bg-transparent border-1 border-black"}>
            Register
        </LinkButton>
    )
}

export default RegisterButton;