import LinkButton from "@/components/ui/Buttons/LinkButton";

const ButtonGroup = () => {
    return (
        <>
            <LinkButton
                href="/login"
                className="w-48 h-14 font-medium text-sm text-foreground"
            >
                Login as business owner
            </LinkButton>

            <LinkButton
                href="/login"
                className="w-36 h-14 border border-dark-gray bg-transparent font-medium text-sm text-foreground"
            >
                Login as expert
            </LinkButton>
        </>
    )
}

export default ButtonGroup;