import React, { useEffect } from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import style from "../css/content.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { GetDoctor } from '../config/axios'
import Card from '../pages/Card'
import Loading from "../assets/loading.gif"
import { Link } from 'react-router-dom'



function Content() {

    const state = useSelector(state => state.doctors)


    const dispatch = useDispatch()


    useEffect(() => {
        GetDoctor("https://xudaybergen.pythonanywhere.com/?format=json", dispatch)
    }, [])


    return (
        <section className={style.content}>
            <div className={style.navigation}>
                <Breadcrumb separator={">"}>
                    <BreadcrumbItem>
                        <BreadcrumbLink className='nav_home'><Link to={'/'}>Главная</Link></BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink className='nav_sub'><Link to={'/'}>Запись к врачу</Link></BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
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

            {state.doctors?.length !== 0 ? state.doctors?.map(item => (
                <Card item={item} key={item.id} />
            )): 
                <div className={style.loader}>
                    <img className={style.loading} src={Loading} />
                </div>
            }


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