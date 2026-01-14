import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import styles from "./reachus.module.css"
import ReachUsForm from "./ReachUsForm";

const ReachUsSection = () => {
  return (
    <div className="container !mb-16">
      <div className="bg-white flex flex-col lg:flex-row gap-4 lg:gap-16 !px-6 lg:!px-16 !py-5 lg:!py-20">
        <div className="flex flex-col gap-9 pt-5 md:!pt-11">
          <div className="max-w-[415px] h-[240px] lg:h-[382px] relative ">
            <Image
              src={PUBLIC_IMAGES.ReachUs}
              alt="home"
              fill
              className=" object-contain"
              unoptimized
            />
          </div>
          <div className="!px-0 lg:!px-12">
            <div className="max-w-[292px] w-full">
              <h3 className="font-bold text-lg text-foreground !mb-2">Address</h3>
              <p className="font-normal text-xs text-foreground leading-5 !mb-5">
                89 Ocean Drive, Miami Beach, FL 33139 Evergreen Terrace,
                Springfield, OR 97477, USA
              </p>
              <h3 className="font-bold text-lg text-foreground !mb-2.5">
                Contact
              </h3>
              <div className="max-w-[255px] w-full font-bold text-xs text-foreground flex flex-col gap-2">
                <h4>T: 000 000 0000</h4>
                <span>support@entrepreneurcollective.com</span>
                <p>entrepreneurcollective@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[648px] w-full flex flex-col gap-4 lg:gap-10">
          <h4 className={`${styles.header}`}>REACH US</h4>
          <ReachUsForm />
        </div>
      </div>
    </div>
  );
};

export default ReachUsSection;
