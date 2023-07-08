import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import img_12 from '../assets/images/12.jpg'
import img_13 from '../assets/images/13.jpg'
import img_15 from '../assets/images/15.jpg'
import img_16 from '../assets/images/16.jpg'
import img_24 from '../assets/images/24.jpg'
import img_25 from '../assets/images/25.jpg'



export default function Testimonials() {
  return (
      <>
          <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
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
                    <img
                        className=" h-80 md:h-150 rounded-3xl p-3 w-full flex justify-center"
                        src={img_12}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="h-80 md:h-150 rounded-3xl p-3 w-full flex justify-center"
                        src={img_13}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="h-80 md:h-150 rounded-3xl p-3 w-full flex justify-center"
                        src={img_15}
                        alt="image slide 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="h-80 md:h-150 rounded-3xl p-3 w-full flex justify-center"
                        src={img_16}
                        alt="image slide 4"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="h-80 md:h-150 rounded-3xl p-3 w-full flex justify-center"
                        src={img_24}
                        alt="image slide 5"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="h-80 md:h-150 rounded-3xl p-3 w-full flex justify-center"
                        src={img_25}
                        alt="image slide 6"
                    />
                </SwiperSlide>
            </Swiper>
      </>
  );
}


// "Working with this photographer was a delight. They were patient, understanding, and made the whole process enjoyable. The photographs they delivered were stunning, and I couldn't be happier with the memories they captured. I highly recommend their services!"
// "The photographs I received from this photographer were outstanding. Each image was carefully composed, and the use of lighting was exceptional. Their attention to detail brought the photos to life, and I couldn't be more pleased with the final results. Highly professional and highly recommended!"
// "I had a fantastic experience with this photographer. Their expertise and artistic vision were evident in every shot. They listened to my ideas and incorporated them seamlessly into the shoot. The final photographs were breathtaking and exceeded my expectations."
// "I can't say enough good things about this photographer. Their professionalism and talent were unmatched. They captured the emotions and essence of the moment effortlessly. The final images were truly works of art. I highly recommend their services!"