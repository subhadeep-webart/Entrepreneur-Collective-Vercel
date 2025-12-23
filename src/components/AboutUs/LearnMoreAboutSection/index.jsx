import CustomButton from "@/components/ui/Buttons/CustomButton";
import styles from "./learnmoreabout.module.css";
import { Icons } from "@/assets";
import LearnMoreAboutButton from "./LearnMoreAboutButton";
const LearnMoreAboutSection = () => {
    return (
        <section className={`${styles.card_wrapper} container`}>
            <div className={styles.card_container}>
                <div className="flex flex-col max-w-[620px] w-full gap-9">
                    <h3 className="text-white font-semibold text-5xl">Learn More About Entrepreneur Collective </h3>
                    <div className="max-w-[535px] w-full flex justify-between items-center">
                        <LearnMoreAboutButton buttonText={"Help Center"}>
                            <Icons.Headphones size={26} className="text-primary" />
                        </LearnMoreAboutButton>
                        <LearnMoreAboutButton buttonText={"Careers"}>
                            <Icons.Briefcase size={26} className="text-primary" />
                        </LearnMoreAboutButton>
                        <LearnMoreAboutButton buttonText={"Press & Media"}>
                            <Icons.Scroll size={26} className="text-primary" />
                        </LearnMoreAboutButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LearnMoreAboutSection;