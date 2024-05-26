import React from 'react'
import style from "../css/content.module.css"
import chevron from '../assets/chevron.svg'
import doctorImg from "../assets/Doctor.png"
import chevroRignt from '../assets/right_chevron.svg'
import { Link, Outlet } from 'react-router-dom'

function Content() {
    return (
        <section className={style.content}>
            <div className={style.navigation}>
                <span className={style.nav_home}>Главная</span>

                <img className={style.nav_chevron} src={chevron} alt="chevron" />

                <span className={style.nav_sub}>Запись к врачу</span>
            </div>

            <div className={style.doctors}>
                <span className={style.all_doctors}>Врачи</span>

                <select className={style.doctor_select}>
                    <option className={style.select_opt} value="all">Все</option>
                    <option className={style.select_opt} value="all">Гинеколог</option>
                    <option className={style.select_opt} value="all">Хирург</option>
                    <option className={style.select_opt} value="all">Онколог</option>
                    <option className={style.select_opt} value="all">Инфекционист</option>
                    <option className={style.select_opt} value="all">Офтальмолог</option>
                    <option className={style.select_opt} value="all">ю</option>
                    <option className={style.select_opt} value="all">ю</option>

                </select>
            </div>

            <section className={style.cards}>

                <div className={style.doctor_card}>

                    <div className={style.card_image}>
                        <img src={doctorImg} alt="doctor" />
                    </div>

                    <div className={style.card_info}>
                        <div className={style.card_name}>
                            <Link className={style.card_name_link} to={'/detail'}>Абдулла Абдуллаев</Link>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Должность:</span>
                            <span className={style.answer}>Оториноларинголог</span>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Мед. учреждение:</span>
                            <span className={style.answer}>Семейная поликлиника</span>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Адрес:</span>
                            <span className={style.answer}>Республика Каракалпакстан, Нукус, А.Досназаров ул., 110</span>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Специальность:</span>
                            <span className={style.answer}>Врач общей практики</span>
                        </div>

                        <button className={style.card_sub}>
                            Записаться на прием <img className={style.card_sub_ico} src={chevroRignt} alt="chevron" />
                        </button>

                    </div>
                </div>


                <div className={style.doctor_card}>

                    <div className={style.card_image}>
                        <img src={doctorImg} alt="doctor" />
                    </div>

                    <div className={style.card_info}>
                        <div className={style.card_name}>
                            <p>Абдулла Абдуллаев</p>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Должность:</span>
                            <span className={style.answer}>Оториноларинголог</span>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Мед. учреждение:</span>
                            <span className={style.answer}>Семейная поликлиника</span>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Адрес:</span>
                            <span className={style.answer}>Республика Каракалпакстан, Нукус, А.Досназаров ул., 110</span>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Специальность:</span>
                            <span className={style.answer}>Врач общей практики</span>
                        </div>

                        <button className={style.card_sub}>
                            Записаться на прием <img className={style.card_sub_ico} src={chevroRignt} alt="chevron" />
                        </button>

                    </div>
                </div>


                <div className={style.doctor_card}>

                    <div className={style.card_image}>
                        <img src={doctorImg} alt="doctor" />
                    </div>

                    <div className={style.card_info}>
                        <div className={style.card_name}>
                            <p>Абдулла Абдуллаев</p>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Должность:</span>
                            <span className={style.answer}>Оториноларинголог</span>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Мед. учреждение:</span>
                            <span className={style.answer}>Семейная поликлиника</span>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Адрес:</span>
                            <span className={style.answer}>Республика Каракалпакстан, Нукус, А.Досназаров ул., 110</span>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Специальность:</span>
                            <span className={style.answer}>Врач общей практики</span>
                        </div>

                        <button className={style.card_sub}>
                            Записаться на прием <img className={style.card_sub_ico} src={chevroRignt} alt="chevron" />
                        </button>

                    </div>
                </div>

                <div className={style.doctor_card}>

                    <div className={style.card_image}>
                        <img src={doctorImg} alt="doctor" />
                    </div>

                    <div className={style.card_info}>
                        <div className={style.card_name}>
                            <p>Абдулла Абдуллаев</p>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Должность:</span>
                            <span className={style.answer}>Оториноларинголог</span>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Мед. учреждение:</span>
                            <span className={style.answer}>Семейная поликлиника</span>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Адрес:</span>
                            <span className={style.answer}>Республика Каракалпакстан, Нукус, А.Досназаров ул., 110</span>
                        </div>

                        <div className={style.card_role}>
                            <span className={style.question}>Специальность:</span>
                            <span className={style.answer}>Врач общей практики</span>
                        </div>

                        <button className={style.card_sub}>
                            Записаться на прием <img className={style.card_sub_ico} src={chevroRignt} alt="chevron" />
                        </button>

                    </div>
                </div>
            </section>

            <div className={style.learn_more}>
                <button className={style.card_more}>
                    Показать еще
                </button>
            </div>

        </section>

    )
}

export default Content