import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import shiningbg from "../assets/img/shiningbg.jpg";
import "./Slide.css";

// Video imports
import slide_image_1 from "../assets/vids/arc.mp4";
import slide_image_2 from "../assets/vids/mega.mp4";
import slide_image_3 from "../assets/vids/arc.mp4";
import slide_image_4 from "../assets/vids/arc.mp4";
import slide_image_5 from "../assets/vids/arc.mp4";
import slide_image_6 from "../assets/vids/arc.mp4";
import slide_image_7 from "../assets/vids/arc.mp4";

const slides = [
  { id: 1, video: slide_image_1 },
  { id: 2, video: slide_image_2 },
  { id: 3, video: slide_image_3 },
  { id: 4, video: slide_image_4 },
  { id: 5, video: slide_image_5 },
  { id: 6, video: slide_image_6 },
  { id: 7, video: slide_image_7 },
];

function Slide() {
  return (
    <div
      className="slider-root z-50 bg-cover bg-center bg-no-repeat w-full mt-[-20] overflow-hidden lg:h-screen"
      style={{ backgroundImage: `url(${shiningbg})` }}
    >
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
              coverflowEffect: {
                rotate: 30,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: false,
              }
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 30,
              coverflowEffect: {
                rotate: 40,
                stretch: 0,
                depth: 70,
                modifier: 1,
                slideShadows: true,
              }
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              coverflowEffect: {
                rotate: 45,
                stretch: 0,
                depth: 80,
                modifier: 1,
                slideShadows: true,
              }
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 40,
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }
            }
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="video-container">
                <div className="video-wrapper">
                  <video
                    src={slide.video}
                    className="slide-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          <div className="slider-controler">
            {/* <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div> */}
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
export default Slide
