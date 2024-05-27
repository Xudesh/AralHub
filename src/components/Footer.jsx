import React from 'react'
import style from "../css/footer.module.css"
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className={style.footer}>
        <div className={style.footer_menu_div}>
            <ul className={style.footer_menu}>
                <li className={style.footer_menu_li}>
                    <Link className={style.footer_menu_link} to="/">
                        Главная
                    </Link>
                </li>

                <li className={style.footer_menu_li}>
                    <a className={style.footer_menu_link} href="#">
                        Как пользоватсья
                    </a>
                </li>

                <li className={style.footer_menu_li}>
                    <a className={style.footer_menu_link} href="#">
                        Политика конфиденциальности
                    </a>
                </li>

                <li className={style.footer_menu_li}>
                    <a className={style.footer_menu_link} href="#">
                        Условия использования
                    </a>
                </li>

                <li className={style.footer_menu_li}>
                    <a className={style.footer_menu_link} href="#">
                        Контакты
                    </a>
                </li>

                <li className={style.footer_menu_li}>
                    <a className={style.footer_menu_link} href="#">
                        Еще
                    </a>
                </li>
            </ul>

            <div className={style.footer_btns}>
                <button className={style.footer_login_btn}>Войти</button>
                <button className={style.footer_register_btn}>Регистрация</button>
            </div>
        </div>

        <div className={style.footer_logo_div}>

            <div className={style.logo}>
                <Link className={style.logo_name}>
                    <span className={style.logo_color}>Ло</span>
                готип</Link>
            </div>

            <span className={style.policy}>&copy; 2010-2023 Все права защищены</span>
        </div>
    </footer>
  )
}

export default Footer