import React, { useEffect, useState } from 'react'
import style from "../css/detail.module.css"
import Doctor from "../assets/Doctor.png"
import chevronDown from '../assets/chevron_down.svg'
import { Link } from 'react-router-dom'
import chevroRignt from '../assets/right_chevron.svg'
import { useDispatch, useSelector } from 'react-redux'
import AnotherDoctors from './AnotherDoctors'
import { GetDoctor } from '../config/axios'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'



function DetailPage({ item }) {

  const state = useSelector(state => state.doctors)

  const { doctors, doctor_detail } = useSelector(state => state.doctors)



  console.log(doctor_detail)


  const dispatch = useDispatch();


  useEffect(() => {
    GetDoctor("https://xudaybergen.pythonanywhere.com/?format=json", dispatch)
  }, [])

  return (
    <section className={style.detail}>
      <div className={style.navigation}>
        <Breadcrumb separator={">"}>
          <BreadcrumbItem>
            <BreadcrumbLink className='nav_home'>
              <Link to={'/'}>Главная</Link>
              </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>
            <Link to={'/'}>Запись к врачу</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to={'/detail'}>{doctor_detail.name}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>


      <div className={style.about_doctor}>

        <div className={style.doctor_image}>
          <img src={doctor_detail.photo} alt="Doctor image" />
        </div>

        <div className={style.doctor_info}>

          <div className={style.doctor_name}>
            <p className={style.doctor_name_p}>{doctor_detail.name}</p>
          </div>

          <div className={style.doctor_role}>
            <span className={style.question}>Должность:</span>
            <span className={style.answer}>{doctor_detail.role}</span>
          </div>

          <div className={style.doctor_role}>
            <span className={style.question}>Мед. учреждение:</span>
            <span className={style.answer}>{doctor_detail.institution}</span>
          </div>

          <div className={style.doctor_role}>
            <span className={style.question}>Адрес:</span>
            <span className={style.answer}>{doctor_detail.address}</span>
          </div>

          <div className={style.doctor_role}>
            <span className={style.question}>Специальность:</span>
            <span className={style.answer}>{doctor_detail.specialization}</span>
          </div>
        </div>
      </div>

      <div className={style.days}>

        {/* First Date */}
        <span className={style.sub_day}>19 марта, вторник</span>
        <div className={style.free_days}>
          <span className={style.time}>07:00</span>
          <span className={style.time}>07:30</span>
          <span className={style.time}>08:00</span>
          <span className={style.time}>08:30</span>
          <span className={style.time}>09:00</span>
          <span className={style.time}>09:30</span>
          <span className={style.time}>10:00</span>
          <span className={style.time}>10:30</span>
          <span className={style.time}>11:00</span>
          <span className={style.time}>11:30</span>
          <span className={style.time}>12:00</span>
          <span className={style.time}>12:30</span>
          <span className={style.time}>13:00</span>
          <span className={style.time}>13:30</span>
          <span className={style.time}>14:00</span>
          <span className={style.time}>14:30</span>
          <span className={style.time}>15:00</span>
          <span className={style.time}>15:30</span>
          <span className={style.time}>16:00</span>
          <span className={style.time}>16:30</span>
          <span className={style.time}>17:00</span>
          <span className={style.time}>17:30</span>


        </div>

        {/* Second Date */}
        <span className={style.sub_day}>20 марта, среда</span>
        <div className={style.free_days}>
          <span className={style.time} >07:00</span>
          <span className={style.time}>07:30</span>
          <span className={style.time}>08:00</span>
          <span className={style.time}>08:30</span>
          <span className={style.time}>09:00</span>
          <span className={style.time}>09:30</span>
          <span className={style.time}>10:00</span>
          <span className={style.time}>10:30</span>
          <span className={style.time}>11:00</span>
          <span className={style.time}>11:30</span>
          <span className={style.time}>12:00</span>
          <span className={style.time}>12:30</span>
          <span className={style.time}>13:00</span>
          <span className={style.time}>13:30</span>
          <span className={style.time}>14:00</span>
          <span className={style.time}>14:30</span>
          <span className={style.time}>15:00</span>
          <span className={style.time}>15:30</span>
          <span className={style.time}>16:30</span>
          <span className={style.time}>17:00</span>
          <span className={style.time}>17:30</span>


        </div>

        {/* Third Date */}
        <span className={style.sub_day}>21 марта, четверг</span>
        <div className={style.free_days}>
          <span className={style.time}>07:00</span>
          <span className={style.time}>07:30</span>
          <span className={style.time}>08:00</span>
          <span className={style.time}>08:30</span>
          <span className={style.time}>09:00</span>
          <span className={style.time}>09:30</span>
          <span className={style.time}>10:00</span>
          <span className={style.time}>10:30</span>
          <span className={style.time}>11:00</span>
          <span className={style.time}>11:30</span>
          <span className={style.time}>12:00</span>
          <span className={style.time}>12:30</span>
          <span className={style.time}>13:00</span>
        </div>

        <div className={style.more}>Еще 2 дня <img src={chevronDown} alt="more" /></div>


        <button className={style.time_show}>
          Выберите время приема
        </button>
      </div>

      <h2 className={style.headline}>Другие врачи</h2>
      <div className={style.another_doctors}>
        {state.doctors.map(item => (
          <AnotherDoctors item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default DetailPage