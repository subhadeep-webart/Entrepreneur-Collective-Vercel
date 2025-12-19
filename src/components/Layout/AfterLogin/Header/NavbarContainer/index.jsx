import styles from "./afterloginnavbar.module.css";
import AfterLoginNavbarMenu from "./AfterLoginNavbarMenu";
const AfterLoginNavbarContainer = () => {
  return (
    <div className={styles.navbar_container}>
      <AfterLoginNavbarMenu />
    </div>
  );
};

export default AfterLoginNavbarContainer;
