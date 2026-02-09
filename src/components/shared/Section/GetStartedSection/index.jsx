import styles from "./getstarted.module.css";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import InnerPageSectionHeader from "../../InnerPage/InnerPageSectionHeader";

const GetStartedSection = () => {
    return (
        <section className={styles.get_started_container}>
            <div className="container flex flex-col gap-9">
                <InnerPageSectionHeader headerText="Get started today!" subText="Mauris quis lacinia quam. Donec est sem, cursus nec lacus ac, condimentum lobortis felis. Morbi malesuada dui non purus faucibus, in pharetra tellus tempor. Vestibulum faucibus ut dui" />
                <div className="w-full max-w-[1226px] flex justify-center">
                    <LinkButton className={"max-w-48 w-full border-1 border-black"} href={"#"}>
                        Join for free
                    </LinkButton>
                </div>
            </div>
        </section>
    )
}

export default GetStartedSection;