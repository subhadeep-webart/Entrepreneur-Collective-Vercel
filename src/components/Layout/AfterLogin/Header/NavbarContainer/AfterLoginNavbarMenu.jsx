"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./afterloginnavbar.module.css";
import { AFTER_LOGIN_HEADER_MENU } from "@/contants/layout_constant";
import NotificationDropdown from "@/components/ui/Dropdowns/NotificationDropdown";
import { useUserType } from "@/app/[user_type]/(afterlogin)/UserTypeProvider";

const AfterLoginNavbarMenu = () => {
  const pathname = usePathname();
  const userType = useUserType();

  if (!userType) return null;

  return (
    <ul className={styles.navbar_list}>
      {AFTER_LOGIN_HEADER_MENU.map((item) => {
        const href = item.href.startsWith("/")
          ? `/${userType}${item.href}`
          : item.href;

        const isActive = pathname === href;

        if (item.id === "notifications") {
          return (
            <li key={item.id} className={isActive ? styles.active : ""}>
              <NotificationDropdown key={item.id} />
            </li>
          );
        }

        return (
          <li key={item.id} className={isActive ? styles.active : ""}>
            <Link href={href} className={styles.nav_link}>
              {item.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default AfterLoginNavbarMenu;
