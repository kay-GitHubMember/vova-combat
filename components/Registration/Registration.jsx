import styles from '../Registration/Registration.module.scss'
import { useAuth } from '../../hooks/useAuth'
import { useRef } from 'react'

export function Registration() {
    return (
        <div className={styles.authorization}>
            <form action="" className={styles.authorization_form}>
                <input 
                    type="text" 
                    className={styles.login} 
                    name="login" 
                    placeholder='Введите свой логин' 
                />
                <input 
                    type="password" 
                    className={styles.password} 
                    name="password" 
                    placeholder='Введите свой пароль' 
                />
                
                <button className={styles.authorization_button} type='submit' >
                    <a href="/app">Зарегистрироваться</a>
                </button>

                <a href="/authorization" className={styles.login_link}>Войти</a>
            </form>
        </div>
    )
}
