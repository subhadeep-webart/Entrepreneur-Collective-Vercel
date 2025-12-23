import FeaturesPageAccordion from "@/components/ui/Accordions/FeaturesPageAccordion";
import styles from "./questionandanswer.module.css";
const QuestionAndAnswerSection = () => {
    return (
        <section className={`${styles.background_image} w-full container flex flex-col gap-14 justify-start items-start bg-almost-black !py-14 text-white h-[700px]`}>
            <h2 className="text-5xl max-w-[1100px] w-full text-center font-semibold">Questions? We’ve Got Answers.It’s short, welcoming, and works well for an entrepreneur or business website.</h2>
            <div className="max-w-[540px] w-full !ml-[100px]">
                <FeaturesPageAccordion />
            </div>
        </section>
    )
}

export default QuestionAndAnswerSection;