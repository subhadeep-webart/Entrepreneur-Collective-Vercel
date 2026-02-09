
import styles from "./bannermask.module.css";

const BannerImageMask = ({ bannerText = "LOGIN" ,image,styleBanner,styleText,styleImage}) => {
    return (
        <div className={styleBanner ? styleBanner :styles.banner}>
            <h1 className={styleText ? styleText :styles.banner_text}>{bannerText}</h1>
            <img src={image} alt="Team" className={styleImage? styleImage : styles.banner_image}  />
        </div>
    )
}

export default BannerImageMask;