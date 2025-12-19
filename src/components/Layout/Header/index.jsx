import AuthButtonGroup from "./AuthButtonGroup";
import styles from "./header.module.css";
import LogoContainer from "./LogoContainer";
import NavbarContainer from "./NavbarContainer";
const Header = () => {
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

export default Header;