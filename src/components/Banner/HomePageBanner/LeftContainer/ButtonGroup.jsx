import LinkButton from "@/components/ui/Buttons/LinkButton";

const ButtonGroup = () => {
    return (
        <>
            <LinkButton
                href="/login"
                className="w-40 lg:w-48 h-10 lg:h-14 font-medium text-xs lg:text-sm text-foreground"
            >
                Login as business owner
            </LinkButton>

            <LinkButton
                href="/login"
                className="w-32 lg:w-36 h-10 lg:h-14 border border-dark-gray bg-transparent font-medium text-xs lg:text-sm text-foreground"
            >
                Login as expert
            </LinkButton>
        </>
    )
}

export default ButtonGroup;