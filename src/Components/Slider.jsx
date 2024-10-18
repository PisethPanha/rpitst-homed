import React from "react";
import img1 from "../assets/IMG1.png";
import img2 from "../assets/IMG17.png";
import img3 from "../assets/IMG3.png";
import img4 from "../assets/IMG4.png";
import img5 from "../assets/IMG5.png";
import { motion } from "framer-motion";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
function Slider() {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="reletive ">
            <img src={img1} width="100%" />
            <motion.div
              className="md:block hidden absolute left-[40%] top-[50%] mx-auto bg-gray-600 shadow-[0px_0px_20px] shadow-white rounded-3xl p-4 "
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-white font-[700] text-[50px] ">
                ថ្នាក់ដឹកនាំ
              </h1>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} width="100%" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
