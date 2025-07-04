import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import slide1 from "../assets/bsd-3.png"
import slide2 from "../assets/bsd-4.png"
import slide3 from "../assets/bsd-5.png"
import slide4 from "../assets/bsd-6.png"
import slide5 from "../assets/bsd-7.png"
import slide6 from "../assets/bsd-8.png"
import slide7 from "../assets/bsd-9.png"
import slide8 from "../assets/bsd-0.png"
import slide9 from "../assets/bsd-11.png"
import slide10 from "../assets/bsd-12.png"
import slide11 from "../assets/bsd-13.png"
import slide12 from "../assets/bsd-14.png"



const Carousel = () => {
  return (
  
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        slidesPerView={1}
        spaceBetween={30}
        className='w-full h-[75%] '
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
        <SwiperSlide>
          <div className="bg-[#FDEBDD] relative h-full rounded-xl  text-center shadow">
               <div className='bg-black/20 rounded-xl h-[500px] w-full z-10 absolute'>
               </div>
              <img className='h-full w-full object-cover rounded-xl' src={slide3}/>
             
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#DCF0F2] relative h-full rounded-xl text-center shadow">
             <div className='bg-black/20 rounded-xl h-[500px] w-full z-10 absolute'>
               </div>
              <img className='h-full w-full object-fill rounded-xl' src={slide4}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FDEBDD] relative h-full rounded-xl  text-center shadow">
               <div className='bg-black/20 rounded-xl h-[500px] w-full z-10 absolute'>
               </div>
              <img className='h-full w-full object-cover rounded-xl' src={slide5}/>
             
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#DCF0F2] relative h-full rounded-xl text-center shadow">
             <div className='bg-black/20 rounded-xl h-[500px] w-full z-10 absolute'>
               </div>
              <img className='h-full w-full object-fill rounded-xl' src={slide6}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FDEBDD] relative h-full rounded-xl  text-center shadow">
               <div className='bg-black/20 rounded-xl h-[500px] w-full z-10 absolute'>
               </div>
              <img className='h-full w-full object-cover rounded-xl' src={slide7}/>
             
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#DCF0F2] relative h-full rounded-xl text-center shadow">
             <div className='bg-black/20 rounded-xl h-[500px] w-full z-10 absolute'>
               </div>
              <img className='h-full w-full object-fill rounded-xl' src={slide8}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FDEBDD] relative h-full rounded-xl  text-center shadow">
               <div className='bg-black/20 rounded-xl h-[500px] w-full z-10 absolute'>
               </div>
              <img className='h-full w-full object-cover rounded-xl' src={slide9}/>
             
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#DCF0F2] relative h-full rounded-xl text-center shadow">
             <div className='bg-black/20 rounded-xl h-[500px] w-full z-10 absolute'>
               </div>
              <img className='h-full w-full object-fill rounded-xl' src={slide10}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FDEBDD] relative h-full rounded-xl  text-center shadow">
               <div className='bg-black/20 rounded-xl h-[500px] w-full z-10 absolute'>
               </div>
              <img className='h-full w-full object-cover rounded-xl' src={slide11}/>
             
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#DCF0F2] relative h-full rounded-xl text-center shadow">
             <div className='bg-black/20 rounded-xl h-[500px] w-full z-10 absolute'>
               </div>
              <img className='h-full w-full object-fill rounded-xl' src={slide12}/>
          </div>
        </SwiperSlide>
      </Swiper>
  );
};

export default Carousel;
