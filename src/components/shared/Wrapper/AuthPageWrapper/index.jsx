import styles from "./authwrapper.module.css";
const AuthPageWrapper = ({ children }) => {
    return (
        <section className={styles.auth_container}>
            {children}
        </section>
    )
}

export default AuthPageWrapper;