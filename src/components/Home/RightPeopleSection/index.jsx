import { PUBLIC_IMAGES } from "@/assets";
import styles from "./rightpeople.module.css";
import Image from "next/image";
const RightPeopleSection = () => {
  return (
    <div className="container !mb-14">
      <div className={`${styles.rightpeople_section} `}>
        <div className="absolute left-[70px] bottom-[59px] z-40 max-w-[650px] w-full flex flex-col gap-8">
          <h4 className="font-semibold text-xl lg:text-5xl text-foreground">
            Let the right people know you’re open to work
          </h4>
          <p className="font-normal text-sm lg:text-base text-foreground">
            Mauris quis lacinia quam. Donec est sem, cursus nec lacus ac,
            condimentum lobortis felis. Morbi malesuada dui non purus faucibus,
            in pharetra tellus tempor. Vestibulum faucibus ut dui nec cursus.
            Curabitur ante urna, congue et mauris consequat, fringilla dapibus.
          </p>
        </div>
        <div className="absolute right-[19px] top-[51px] z-30">
          <div className="w-[300px] lg:w-[526px] h-[317px] relative">
            <Image
              src={PUBLIC_IMAGES.People}
              alt="home"
              fill
              className=" object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPeopleSection;
