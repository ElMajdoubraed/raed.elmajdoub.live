import { BiCheck } from "react-icons/bi"
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
export default function Services() {
  return (
    <section id="services">
        <h5>Experience i have gained</h5>
        <h2>Experience</h2>

        <Swiper
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                className="container services__container"
        >
                
        <SwiperSlide className="service">
            <div className="service__head">
                <h3>UI/UX design</h3>
                <p className="service__description">khdemet maa kadha kadha</p>
            </div>

            <ul className="service__list">
                <li>
                    <BiCheck className="service__list__icon"/>
                    <p>task name</p>
                </li>
                <li>
                    <BiCheck className="service__list__icon"/>
                    <p>task name</p>
                </li>
            </ul>
        </SwiperSlide>

        <SwiperSlide className="service">
            <div className="service__head">
                <h3>UI/UX design</h3>
            </div>

            <ul className="service__list">
                <li>
                    <BiCheck className="service__list__icon"/>
                    <p>task name</p>
                </li>
                <li>
                    <BiCheck className="service__list__icon"/>
                    <p>task name</p>
                </li>
            </ul>
        </SwiperSlide>
        

        </Swiper>
    </section>
  )
}
