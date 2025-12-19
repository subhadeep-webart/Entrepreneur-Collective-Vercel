"use client";
import { Icons } from "@/assets";
import { cn } from "@heroui/react";
import styles from "./buttons.module.css"

const ProfileButton = ({ className }) => {
  return (
     <div className={cn(styles.profile_button, className)}>
      <Icons.UserIcon size={18} />
    </div>
  );
};

export default ProfileButton;
