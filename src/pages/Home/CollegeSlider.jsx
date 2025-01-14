import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Helmet } from 'react-helmet-async';

import 'swiper/css';
import 'swiper/css/pagination';

const CollegeSlider = () => {
    return (
        <div className='p-20 grayscale'>
            <Helmet>
                <title>Scholarship Management | Home</title>
            </Helmet>
             <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper max-w-screen-md mx-auto mb-24"
            >
                <SwiperSlide>
                    <img className='border-2 border-gray-500 md:px-7 md:py-6' src="https://i.ibb.co.com/DQPgRjK/images-removebg-preview.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='size-36 border-2 border-gray-500' src="https://i.ibb.co.com/b2XfShq/images-1-removebg-preview-1.png"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='border-2 border-gray-500 py-6' src="https://i.ibb.co.com/dD5Tgdm/images-removebg-preview-1.png"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='size-36 border-2 border-gray-500' src="https://i.ibb.co.com/wsQtvtW/images-2-removebg-preview.png"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='size-36 border-2 border-gray-500' src="https://i.ibb.co.com/HF99pPb/images-1-removebg-preview-2.png"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CollegeSlider;