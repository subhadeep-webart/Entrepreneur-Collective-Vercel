import WhyChooseUsHeader from "./WhyChooseUsHeader";
import WhyChooseUsSwiperContainer from "./WhyChooseUsSwiperContainer";
import styles from "./chooseussection.module.css";

const WhyChooseUsSection = () => {
    return (
        <div className={`flex flex-col gap-12 container justify-center ${styles.choose_us_section_container}`}>
            <WhyChooseUsHeader />
            <WhyChooseUsSwiperContainer />
        </div>
    )
}

export default WhyChooseUsSection;