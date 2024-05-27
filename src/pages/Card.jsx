import React from 'react'
import { useDispatch } from 'react-redux'
import { Selecting } from '../reducers/Doctors.slice'
import style from "../css/content.module.css"
import { Link } from 'react-router-dom'
import chevroRignt from '../assets/right_chevron.svg'


function Card({item}) {

    const dispatch = useDispatch()

  return (
    <div className={style.doctor_card} >

    <div className={style.card_image}>
        <img src={item.photo} alt="doctor" />
    </div>

    <div className={style.card_info}>
        <div className={style.card_name}>
            <p className={style.card_name_link}>{item.name}</p>
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
            <span className={style.answer}>{item.address.slice(0, 14)+ "..."}</span>
        </div>

        <div className={style.card_role}>
            <span className={style.question}>Специальность:</span>
            <span className={style.answer}>{item.specialization}</span>
        </div>

        <Link className={style.record} onClick={() => dispatch(Selecting(item))} to={"/detail"}>
            <button className={style.card_sub}>
                Записаться на прием <img className={style.card_sub_ico} src={chevroRignt} alt="chevron" />
            </button>
        </Link>

    </div>
</div>
  )
}

export default Card