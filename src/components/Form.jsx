import React from 'react'
import style from "../css/form.module.css"


function Form() {
  return (
    <div className={style.forms}>
        <form className={style.contact_form}>
            <p className={style.form_headline}>Наши контакты</p>

            <div className={style.contacts}>
                <p>Электронная почта:</p>
                <p>urzumovxudekee@gmail.com</p>
            </div>

            <div className={style.contacts}>
                <p>Номер:</p>
                <p>+998 90 263 06 90</p>
            </div>

            <div className={style.contacts}>
                <p>Телеграм:</p>
                <a target='blank' href="https://t.me/Urzumoov">@Urzumoov</a>
            </div>

            <div className={style.contacts}>
                <p>ГитХаб:</p>
                <a target='blank' href="https://github.com/Xudesh">Xudekee</a>
            </div>
        </form>
    </div>
  )
}

export default Form