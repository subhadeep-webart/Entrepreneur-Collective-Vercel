"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./afterloginnavbar.module.css";
import { AFTER_LOGIN_HEADER_MENU } from "@/contants/layout_constant";

const AfterLoginNavbarMenu = () => {
  const pathname = usePathname();

  return (
    <ul className={styles.navbar_list}>
      {AFTER_LOGIN_HEADER_MENU.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li
            key={item.id}
            className={isActive ? styles.active : ""}
          >
            <Link href={item.href} className={styles.nav_link}>
              {item.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default AfterLoginNavbarMenu;
