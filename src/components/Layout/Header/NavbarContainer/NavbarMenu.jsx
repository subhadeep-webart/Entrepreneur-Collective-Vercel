import Link from "next/link";
import styles from "./navbar.module.css";
import { HEADER_MENU } from "@/contants/layout_constant";

const NavbarMenu = () => {
    return (
        <ul className={styles.navbar_list}>
            {
                HEADER_MENU?.map((menu, index) => (
                    <li key={`nav-menu-${index + 1}`}><Link href={menu.href}>{menu?.name}</Link></li>
                ))
            }
        </ul>
    )
}

export default NavbarMenu;