import BannerImageMask from "@/components/shared/BannerImageMask";
import styles from "../innerpagebanner.module.css";

const RightContainer = ({ bannerText }) => {
    return (
        <div className="relative">
            <BannerImageMask
                bannerText={bannerText}
                image={"/assets/image/banner/inner_banner_image.png"}
                styleBanner={styles.banner}
                styleText={styles.banner_text}
                styleImage={styles.banner_image}
            />
        </div>
    )
}

export default RightContainer;