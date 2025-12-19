import SearchButton from "@/components/shared/Buttons/SearchButton";
import styles from "./buttongroup.module.css";
import ProfileButton from "@/components/shared/Buttons/ProfileButton";
const ButtonGroup = () => {
  return (
    <div className={styles.button_group_container}>
      <SearchButton className="w-[41px] h-[41px]" />
      <ProfileButton/>
    </div>
  );
};

export default ButtonGroup;
