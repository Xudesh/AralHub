import React from 'react'
import style from "../css/sign_in.module.css"
import { Link } from 'react-router-dom'


function SignIn() {
  return (
    <div className={style.sign_in}>
        <form className={style.login_form}>
            <h1>Войти</h1>

            <label>
                Почта:
                <input type="text" placeholder='Введите почту...' required  maxLength={25}/>
            </label>
            <label>
                Пароль:
                <input type="text" placeholder='Введите пароль...' required maxLength={25} />
            </label>

            <span className={style.register_link}>Нет аккаунта? <Link to={'/sign_up'}>Зарегистрироваться</Link></span>

            <button className={style.login_btn} type='submit'>
                Войти
            </button>
        </form>
    </div>
  )
}

export default SignIn