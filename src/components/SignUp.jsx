import React from 'react'
import style from "../css/sign_in.module.css"
import { Link } from 'react-router-dom'


function SingUp() {
  return (
    <div className={style.sign_in}>
    <form className={style.register_form}>
        <h1>Регистрация</h1>

        <label>
            Почта:
            <input type="text" placeholder='Введите почту...' required maxLength={25}/>
        </label>

        <label>
            Пароль:
            <input type="text" placeholder='Введите пароль...' required maxLength={25} />
        </label>

        <label>
            Подтвердите пароль:
            <input type="text" placeholder='Подтвердите пароль...' required maxLength={25} />
        </label>

        <span className={style.login_link}>Есть аккаунт? <Link to={'/sign_in'}>Войти</Link></span>

        <button className={style.register_btn} type='submit'>
            Зарегистрироваться
        </button>
    </form>
</div>
  )
}

export default SingUp