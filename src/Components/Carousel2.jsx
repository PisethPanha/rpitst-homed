import img from "../assets/IMG1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardEvent from "./CardEvent";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import "./carousel.css";
import axios from "axios";

function Carousel2() {
  var accesstoken = `EAASARFxGZBIgBO6ZCIVZCRAN2M4WscYwkzxQ2EjrDcptNBSsnvDWp4406jbNe60a4kDnZAT5iRAVwIqg2FZCux9hyIbAdb8kYficIBLU2TAw9gQjiPZCCNeKPyWbsZCckF6tXpkuXZCiO9H0vpmFnTV1mzmLCu2gAqDTSiWePUZCGoyQmMNml6BOCfBrwGngXr8AZD`;
  var pageid = `100960786071190`;
  const [res, setRes] = useState([]);
  useEffect((ele, i) => {
    axios
      .get(
        `https://graph.facebook.com/v12.0/${pageid}?fields=posts{permalink_url,id,full_picture,message,created_time}&access_token=${accesstoken}`
      )
      .then((res) => {
        setRes(res.data.posts.data);
        console.log(res);
      });
  }, []);
  return (
    <div className="overflow-hidden w-full">
      <Swiper
        style={{
          width: "90%",
          maxWidth: "90%",
          margin: "0 auto",
        }}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation
        loop={true}
        spaceBetween={50}
        breakpoints={{
          820: {
            // When window width is >= 720px
            slidesPerView: 2.5,
          },
          0: {
            // When window width is < 720px
            slidesPerView: 1.5,
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {res.slice(0, 5).map((ele, i) => (
          <SwiperSlide key={i}>
            <CardEvent
              image={ele.full_picture}
              title={ele.message}
              link={ele.permalink_url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel2;
