import styles from "./navbar.module.css"
import NavbarMenu from "./NavbarMenu";
const NavbarContainer=()=>{
    return(
        <div className={styles.navbar_container}>
            <NavbarMenu/>
        </div>
    )
}

export default NavbarContainer;