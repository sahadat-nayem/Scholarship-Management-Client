import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slide from "./Slide";


export default function Banner () {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/2Xgf9XL/scholarship213.jpg"
            text="Unlock Opportunities, Transform Your Future: Scholarships Await"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/JFGWdy6d/1418-0-I9-A0942-1920px.jpg"
            text="Invest in Your Dreams, Apply for a Scholarship Today!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/jPxnJkZH/scholarship-hero-600-400-baaa8932fb4790e9.jpg"
            text="Education Without Limits: Scholarships Open Doors!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/S4zfxGfF/scholarships-in-canada.jpg"
            text="Turn Ambition into Achievement with the Right Scholarship!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/XrR4HGZf/scholarship-two.jpg"
            text="Financial Support for Bright Minds: Claim Your Scholarship Now!"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

