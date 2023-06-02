import { BiCheck } from "react-icons/bi";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Experience } from "./Experience";
import experiences from "./experience.json";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

interface Iexperience {
  index?: number;
  title: string;
  description: string;
  tasks: string[];
}

export default function Services() {
  const experience_array: Experience[] = experiences;
  const [slideNum, setSlideNum] = useState(1);
  useEffect(() => {
    var w = window.innerWidth;
    if (w > 1024) {
      setSlideNum(3);
    }
  });
  return (
    <motion.section
      initial={{
        x: -200,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1.2,
      }}
      id="services"
    >
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
        {experience_array.map((experience: Iexperience, index: number) => (
          <SwiperSlide key={"experience_key_" + index} className="service">
            <div className="service__head">
              <h3 className="hidden">Raed elmajdoub - {experience.title}</h3>
              <h3>{experience.title}</h3>
              <p className="service__description">{experience.description}</p>
            </div>
            <ul className="service__list">
              {experience.tasks.map((task: string, i: number) => (
                <li key={"experience_task_key_" + i}>
                  <BiCheck className="service__list__icon" />
                  <p className="hidden">Raed elmajdoub - {task}</p>
                  <p>{task}</p>
                </li>
              ))}
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
