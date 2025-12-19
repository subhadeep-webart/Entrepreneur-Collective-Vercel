import styles from "./auth.module.css";
const AuthFormWrapper = ({ headerText = "", children, className }) => {
    return (
        <div className={`${styles.auth_form_container} ${className}`}>
            <h3>{headerText}</h3>
            {children}
        </div>
    )
}

export default AuthFormWrapper;