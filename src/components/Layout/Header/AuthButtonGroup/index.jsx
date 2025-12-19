import LoginButton from "@/components/shared/Buttons/LoginButton";
import styles from "./authbuttongroup.module.css";
import RegisterButton from "@/components/shared/Buttons/RegisterButton";
import SearchButton from "@/components/shared/Buttons/SearchButton";
const AuthButtonGroup = () => {
    return (
        <div className={styles.auth_button_group_container}>
            <LoginButton />
            <RegisterButton />
            <SearchButton/>
        </div>
    )
}

export default AuthButtonGroup;