'use client'
import { Swiper, SwiperSlide } from 'swiper/react'


import 'swiper/css';
import 'swiper/css/pagination'


import { Pagination } from 'swiper/modules'
import Giay from './Giay';

const PopularGiaychuyen = ({ bangiay }) => {
    console.log(bangiay)
    return (
        <Swiper
            slidePerView={1}
            spaceBetween={30}
            breakpoints={
                {
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    960: { slidesPerView: 3 },
                    1440: { slidesPerView: 4 },
                }
            }
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className='popular-bike-slide mb8'
        >
            {bangiay.map((giay) => {
                return <SwiperSlide>
                    <Giay giay={giay} />
                </SwiperSlide>
            })}
        </Swiper>
    )
}
export default PopularGiaychuyen