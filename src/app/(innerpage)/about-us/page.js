import AboutCardSection from "@/components/AboutUs/AboutCardSection";
import AboutImageSection from "@/components/AboutUs/AboutImageSection";
import LearnMoreAboutSection from "@/components/AboutUs/LearnMoreAboutSection";
import InnerPageSectionHeader from "@/components/shared/InnerPage/InnerPageSectionHeader";

const AboutUs = () => {
    return (
        <>
            <div className="flex flex-col gap-2 container">
                <h3 className="text-black text-3xl font-normal text-center">Our mission</h3>
                <InnerPageSectionHeader headerText="Revolutionizing networking for business owners" subText="Donec lacinia fringilla libero ut finibus. Vestibulum euismod purus eu risus aliquam volutpat. Fusce scelerisque nibh sit amet quam gravida, eget euismod tellus viverra. Nulla dapibus dapibus augue." />
            </div>
            <AboutImageSection />
            <AboutCardSection />
            <div className="flex flex-col gap-2 container">
                <h3 className="text-black text-3xl font-normal text-center">About us</h3>
                <InnerPageSectionHeader headerText="Meet the Team Fueling Entrepreneurial Growth Innovation Starts Here" subText="Mauris quis lacinia quam. Donec est sem, cursus nec lacus ac, condimentum lobortis felis. Morbi malesuada dui non purus faucibus, in pharetra tellus tempor. Vestibulum faucibus ut dui nec cursus. Curabitur ante urna, congue et mauris consequat, fringilla dapibus velit. Fusce dui lorem, lacinia sodales nisi vitae, posuere molestie risus. Aliquam tempor enim eu velit pellentesque at feugiat est bibendum. Proin hendrerit mauris sit amet erat vulputate molestie. Cras quis ipsum tincidunt, volutpat magna vel, ullamcorper est . Vestibulum in venenatis lorem, commodo iaculis risus." />
            </div>
            <LearnMoreAboutSection />
        </>
    )
}

export default AboutUs;