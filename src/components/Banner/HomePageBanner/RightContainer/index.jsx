import BannerImageMask from "@/components/shared/BannerImageMask";
import styles from "../homapagebanner.module.css";
import { PUBLIC_IMAGES } from "@/assets";
const RightContainer = () => {
    return (
        <div className="absolute bottom-[1px] right-[140px]">
            <BannerImageMask
                bannerText="BUSINESS CONNECT"
                image={PUBLIC_IMAGES?.BannerPeople}
                styleBanner={styles.banner}
                styleText={styles.banner_text}
                styleImage={styles.banner_image}
            />
        </div>
    )
}

export default RightContainer;