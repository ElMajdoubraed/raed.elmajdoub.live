import { BiCheck } from "react-icons/bi"
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";
import experiences from "./experience.json"
import 'swiper/css';
import 'swiper/css/pagination';
export default function Services() {
    const experience_array: any = experiences; 
    const [slideNum, setSlideNum] = useState(1)
    useEffect(() => {
        var w = window.innerWidth;
        if (w > 1024) {
            setSlideNum(3)
        }

    })
  return (
    <section id="services">
        <h5>Experience i have gained</h5>
        <h2>Experience</h2>

        <Swiper
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={slideNum}
                navigation
                pagination={{ clickable: true }}
                className="container services__container"
        >
                
            {
                experience_array.map((experience: any, index: number) => 
                    <SwiperSlide key={'experience_key_' + index} className="service">
                        <div className="service__head">
                            <h3>{experience.title}</h3>
                            <p className="service__description">{experience.description}</p>
                        </div>
                        <ul className="service__list">
                        {
                            experience.tasks.map((task: string, i: number) =>
                            <li>
                                <BiCheck className="service__list__icon"/>
                                <p>{task}</p>
                            </li> 
                            )
                        }
                        </ul>        
                    </SwiperSlide>)
            }
        

        </Swiper>
    </section>
  )
}
