import BannerImageMask from "@/components/shared/BannerImageMask";
import styles from "../homapagebanner.module.css";
import { PUBLIC_IMAGES } from "@/assets";
const RightContainer = () => {
    return (
        <div className="relative w-full max-w-[762px] aspect-[762/490] flex justify-center items-end">
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