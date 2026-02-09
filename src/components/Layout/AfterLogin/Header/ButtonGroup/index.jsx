import SearchButton from "@/components/shared/Buttons/SearchButton";
import styles from "./buttongroup.module.css";
import ProfileDropdown from "@/components/ui/Dropdowns/ProfileDropdown";
const ButtonGroup = () => {
  return (
    <div className={styles.button_group_container}>
      <SearchButton className="w-[41px] h-[41px]" />
      {/* <ProfileButton/> */}
      <ProfileDropdown/>
    </div>
  );
};

export default ButtonGroup;
