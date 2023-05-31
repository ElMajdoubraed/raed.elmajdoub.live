import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Testimonials</h5>
      <h2>What People Say</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src="/images/client-1.jpg" alt="alt client" />
          </div>
          <h5 className="client__name">TEST USER</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quae.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src="/images/client-1.jpg" alt="alt client" />
          </div>
          <h5 className="client__name">TEST USER</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quae.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src="/images/client-1.jpg" alt="alt client" />
          </div>
          <h5 className="client__name">TEST USER</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quae.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
