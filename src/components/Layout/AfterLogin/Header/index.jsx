import LogoContainer from "../../Header/LogoContainer";
import styles from "./afterloginheader.module.css";
import ButtonGroup from "./ButtonGroup";
import AfterLoginNavbarContainer from "./NavbarContainer";
const AfterLoginHeader = () => {
  return (
    <header className={styles.header_section}>
      <section className={`container ${styles.header_menu_container}`}>
        <LogoContainer />
        <AfterLoginNavbarContainer />
        <ButtonGroup />
      </section>
    </header>
  );
};

export default AfterLoginHeader;
