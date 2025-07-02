import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import slide1 from "../assets/bsd-3.png"
import slide2 from "../assets/bsd-4.png"



const Carousel = () => {
  return (
  
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        slidesPerView={1}
        className='w-full h-[80%] '
      >
        <SwiperSlide>
          <div className="bg-[#FDEBDD] relative h-full rounded-xl  text-center shadow">
               <div className='bg-black/20 rounded-xl h-[500px] w-full z-10 absolute'>
               </div>
              <img className='h-full w-full object-cover rounded-xl' src={slide1}/>
             
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#DCF0F2] relative h-full rounded-xl text-center shadow">
             <div className='bg-black/20 rounded-xl h-[500px] w-full z-10 absolute'>
               </div>
              <img className='h-full w-full object-fill rounded-xl' src={slide2}/>
          </div>
        </SwiperSlide>
      </Swiper>
  );
};

export default Carousel;
