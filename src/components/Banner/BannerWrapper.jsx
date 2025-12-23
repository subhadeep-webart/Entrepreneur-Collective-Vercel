import styles from "./banner.module.css";

const BannerWrapper = ({ children,className="" }) => {
  return (
    <section className={`${styles.banner_section} ${className}`}>
      <div className="container h-full flex items-center justify-between">
        {children}
      </div>
    </section>
  );
};



export default BannerWrapper;
