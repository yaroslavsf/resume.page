'use client'
import Image from "next/image";
import someImg from '../../../../public/c++.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Navigation, Pagination, Scrollbar } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/effect-coverflow';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';


import SectionHeading from "../typography/SectionHeading";
const photos_b = [
  'https://i.pinimg.com/originals/9f/38/53/9f385384cf86350110d2d0029a0dcc15.jpg',
  'https://i.pinimg.com/originals/9f/38/53/9f385384cf86350110d2d0029a0dcc15.jpg',
  'https://i.pinimg.com/originals/9f/38/53/9f385384cf86350110d2d0029a0dcc15.jpg'];

const AboutMeSection = () => {
  return (
    <div className="h-100 mt-5 flex flex-col items-center gap-y-14">
      <SectionHeading title="About me"/>
  
    <div className="w-full mb-5">

      <Swiper 
      className="w-11/12 h-11/12 breakpoint"
        loop={true}
        modules={[Scrollbar, Mousewheel, Autoplay]}
        pagination={{ clickable: true }}
        centeredSlides={true}
        grabCursor={true}
        scrollbar={{ draggable: true }}
        mousewheel={{
          invert: false,
        }}
        slidesPerView={1}
      >
        {photos_b.map((p, index) => {
          return (
            <SwiperSlide key={index}>
              <Image className="rounded w-full h-full" loader={() => p} src={p} alt="" height={300} width={300} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    </div>

  )
}

export default AboutMeSection;