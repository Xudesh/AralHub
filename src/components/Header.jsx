import React from 'react'
import style from '../css/header.module.css'
import browser from "../assets/browser.svg"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className={style.header}>
        <div className={style.logo}>
            <Link to={'/'} className={style.logo_name}>
                <span className={style.logo_color}>Ло</span>
            готип</Link>
        </div>

        <ul className={style.header_menu}>
            <li className={style.menu_li}>
                <a href="#" className={style.menu_link}>Главная</a>
            </li>

            <li className={style.menu_li}>
                <a href="#" className={style.menu_link}>Как пользоваться?</a>
            </li>

            <li className={style.menu_li}>
                <a href="#" className={style.menu_link_active}>Запись к врачу</a>
            </li>

            <li className={style.menu_li}>
                <a href="#" className={style.menu_link}>Контакты</a>
            </li>
        </ul>


        <div className={style.buttons}>
            <img className={style.browser_ico} src={browser} alt="" />

            <button className={style.login_btn}>
                Войти
            </button>
            
            <button className={style.register_btn}>
                Регистрация
            </button>
        </div>
    </header>
  )
}

export default Header