// components/Slider.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Slider({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      className="rounded-lg overflow-hidden border border-[#2a003f] shadow-lg shadow-[#00bcd4]/10"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[300px] sm:h-[400px]">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1f44]/90 to-transparent p-4 text-white">
              <p className="font-medium">{image.caption}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}