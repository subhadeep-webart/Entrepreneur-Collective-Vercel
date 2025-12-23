import AboutCard from "@/components/shared/Cards/AboutCard";

const AboutCardSection = () => {
    return (
        <div className="container grid grid-cols-2 gap-7">
            <AboutCard />
            <AboutCard />
        </div>
    )
}

export default AboutCardSection;