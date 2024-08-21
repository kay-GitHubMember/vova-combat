import styles from '../Authorization/Authorization.module.scss'

export function Authorization() {
    return (
        <div className={styles.authorization}>
            <form action="" className={styles.authorization_form}>
                <input type="text" className={styles.login} name="login" placeholder='Введите свой логин' />
                <input type="password" className={styles.password} name="password" placeholder='Введите свой пароль' />

                <button className={styles.authorization_button}>Войти</button>
            </form>
        </div>
    )
}