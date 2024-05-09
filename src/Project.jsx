
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './index.css';

import slideImage from './assets/About.jpeg'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <div className='flex flex-col py-[2rem] min-h-[70vh] justify-center'>
                <h1 className='text-center font-bold text-[3rem]'>Project</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="">
                            <img src={slideImage} alt="" />

                            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <a href="http://">GitHub</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://"> <img src={slideImage} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://"> <img src={slideImage} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://"> <img src={slideImage} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://"> <img src={slideImage} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://"> <img src={slideImage} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://"> <img src={slideImage} />Weather App</a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://"> <img src={slideImage} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://"> <img src={slideImage} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://"> <img src={slideImage} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://"> <img src={slideImage} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://"> <img src={slideImage} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://"> <img src={slideImage} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://"> <img src={slideImage} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://"> <img src={slideImage} /></a>
                    </SwiperSlide>

                </Swiper>\
            </div>
        </>
    );
}
