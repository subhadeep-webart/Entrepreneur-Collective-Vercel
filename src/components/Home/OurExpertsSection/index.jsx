import { PUBLIC_IMAGES } from "@/assets";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import Image from "next/image";
import ExpertMansSection from "./ExpertMansSection";
import styles from "./ourexpert.module.css";

const OurExpertsSection = () => {
  return (
    <div className="container !mb-20">
      <div className="flex relative flex-col">
        <div className="max-w-[316px] w-full mt-4 mr-3 lg:!mr-12 lg:!mt-40 flex flex-col gap-2.5">
          <h4 className="font-normal text-xs lg:text-base text-charcoal">
            In sed nisi venenatis, tristique erat nec, sodales sem. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae

            Etiam mattis dui vel placerat lacinia. Mauris et nunc vel ligula
            dapibus condimentum. Vestibulum suscipit quam et purus malesuada
            posuere. Morbi ut mollis tellus.
          </h4>
          <LinkButton
            href="#"
            className="w-36 h-10 font-medium text-sm text-foreground"
          >
            View all
          </LinkButton>
        </div>
        <div className="w-[398px] h-[822px] hidden lg:block relative">
          <Image
            src={PUBLIC_IMAGES.ExpertMan}
            alt="home"
            fill
            className=" object-contain"
            unoptimized
          />
        </div>

        <ExpertMansSection />

        <div className={` ${styles.our}`}>
          OUR
        </div>
        <div className={` ${styles.expert}`}>
          EXPERTS
        </div>
      </div>
    </div>
  );
};

export default OurExpertsSection;
