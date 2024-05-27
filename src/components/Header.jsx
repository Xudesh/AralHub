import React, { useState } from 'react'
import style from '../css/header.module.css'
import browser from "../assets/browser.svg"
import { Link } from 'react-router-dom'
import MenuBar from "../assets/menu.svg"


function Header() {

  const [sidebar, setSidebar] = useState(true);

  const showSideBar = () => setSidebar(!sidebar)


  return (
    <header className={style.header}>
        <div className={style.logo}>
            <Link to={'/'} className={style.logo_name}>
                <span className={style.logo_color}>Ло</span>
            готип</Link>
        </div>

        <ul className={sidebar ? style.header_menu : style.header_menu_active}>
            <li className={style.menu_li}>
                <Link to={'/'} className={style.menu_link}>Главная</Link>
            </li>

            <li className={style.menu_li}>
                <a href="#" className={style.menu_link}>Как пользоваться?</a>
            </li>

            <li className={style.menu_li}>
            <Link to={'/'} className={style.menu_link}>Запись к врачу</Link>
            </li>

            <li className={style.menu_li}>
                <Link to={'/form'} className={style.menu_link}>Контакты</Link>
            </li>
        </ul>


        <div className={sidebar ? style.buttons : style.button_active}>
            <img className={style.browser_ico} src={browser} alt="" />

            <Link to={'/sign_in'} className={style.login_btn}>
                Войти
            </Link>
            
            <Link to={'/sign_up'} className={style.register_btn}>
                Регистрация
            </Link>
        </div>

        <button className={sidebar ? style.logo_menu : style.logo_menu_deg} onClick={showSideBar}>
            <img className={style.burger} src={MenuBar} alt="" />
        </button>

    </header>
  )
}

export default Header