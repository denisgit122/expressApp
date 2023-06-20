import {useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import css from './Slice.module.css'

import { FreeMode, Navigation, Thumbs } from "swiper";

const Slice = ({photos,status, setStatus}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const lightBox = () => {
      setStatus(true)
    }

return (
    <>
    <Swiper
        style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
    >
        {photos && photos.map((photo)=> (

            <SwiperSlide onClick={() => lightBox()} key={photo}>
                <img  className={status? css.imgLightBox :css.img} src={photo} alt="Photo"/>
            </SwiperSlide>

        ))}
    </Swiper>
    <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
    >
        {photos && photos.map((photo)=> (
            <SwiperSlide  key={photo}>
                <img className={css.img2} src={photo} alt="Photo"/>
            </SwiperSlide>

        ))}
    </Swiper>
</>
);
};

export {Slice};

