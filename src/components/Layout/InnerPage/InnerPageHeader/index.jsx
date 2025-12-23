import AuthButtonGroup from "../../Header/AuthButtonGroup";
import LogoContainer from "../../Header/LogoContainer";
import NavbarContainer from "../../Header/NavbarContainer";
import styles from "./innerpageheader.module.css";

const InnerPageHeader = () => {

    return (
        <header className={styles.header_section}>
            <section className={`container ${styles.header_menu_container}`}>
                <LogoContainer />
                <NavbarContainer />
                <AuthButtonGroup />
            </section>
        </header>
    )
}


export default InnerPageHeader;