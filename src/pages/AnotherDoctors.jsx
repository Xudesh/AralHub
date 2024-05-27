import React from 'react'
import { useDispatch } from 'react-redux'
import chevroRignt from '../assets/right_chevron.svg'
import style from "../css/detail.module.css"
import { Link } from 'react-router-dom'


function AnotherDoctors({item}) {

    const dispatch = useDispatch()


    return (
        <div className={style.doctor_card}>

            <div className={style.card_image}>
                <img src={item.photo} alt="doctor" />
            </div>

            <div className={style.card_info}>
                <div className={style.card_name}>
                    <Link className={style.card_name_link} to={'/'}>{item.name}</Link>
                </div>

                <div className={style.card_role}>
                    <span className={style.question}>Должность:</span>
                    <span className={style.answer}>{item.role}</span>
                </div>

                <div className={style.card_role}>
                    <span className={style.question}>Мед. учреждение:</span>
                    <span className={style.answer}>{item.institution}</span>
                </div>

                <div className={style.card_role}>
                    <span className={style.question}>Адрес:</span>
                    <span className={style.answer}>{item.address.slice(0, 20)+"..."}</span>
                </div>

                <div className={style.card_role}>
                    <span className={style.question}>Специальность:</span>
                    <span className={style.answer}>{item.specialization}</span>
                </div>

                <button className={style.card_sub} onClick={() => dispatch(Selecting(item))} to={"/detail"}>
                    Записаться на прием <img className={style.card_sub_ico} src={chevroRignt} alt="chevron" />
                </button>

            </div>
        </div>
    )
}

export default AnotherDoctors