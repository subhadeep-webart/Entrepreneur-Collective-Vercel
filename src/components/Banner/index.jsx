import { PUBLIC_IMAGES } from "@/assets";
import BannerImageMask from "../shared/BannerImageMask";
import LinkButton from "../ui/Buttons/LinkButton";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <section className={`${styles.banner_section}  relative`}>
      <div className="container h-full">
        <div className="flex justify-start items-center h-full ">
          <div className="flex flex-col justify-center">
            <h1 className="font-normal text-lg text-almost-black !mb-3.5">
              Welcome to Entrepreneur Collective
            </h1>

            <div className="text-4xl font-bold text-almost-black !mb-5">
              <h2>Discover Opportunities.</h2>
              <h3>Build Connections.</h3>
              <h4>Advance Your Career.</h4>
            </div>

            <div className="font-normal text-lg text-almost-black !mb-11">
              <h4>Join a Network of Professionals.</h4>
              <h4>Where Careers and Companies Meet the Future.</h4>
            </div>

            <div className="flex gap-7">
              <LinkButton
                href="/login"
                className="w-48 h-14 font-medium text-sm text-foreground"
              >
                Login as business owner
              </LinkButton>

              <LinkButton
                href="/login"
                className="w-36 h-14 border border-dark-gray bg-transparent font-medium text-sm text-foreground"
              >
                Login as expert
              </LinkButton>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[1px] right-[140px]">
          <BannerImageMask
            bannerText="BUSINESS CONNECT"
            image={PUBLIC_IMAGES?.BannerPeople}
            styleBanner={styles.banner}
            styleText={styles.banner_text}
            styleImage={styles.banner_image}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
