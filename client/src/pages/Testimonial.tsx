import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';

import telegramjoin from "../assets/telegramjoin.png";

export default function Testimonial() {
  const testimonials = [
    {
      text: "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
      name: "Sheryl Berge",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      text: "As a professional athlete, I rely on high-performance gear for my training. This site offers a great selection of top-notch products.",
      name: "Leland Kiehn",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
      text: "I’ve tried many brands before, but nothing compares to the comfort and durability I’ve found here. Highly recommended!",
      name: "Jordan Clark",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
    },
  ];

  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
  <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-lg shadow-md">
    
    {/* Left Column */}
    <div className="md:col-span-1 flex flex-col justify-start items-center text-center md:text-left">
      <h2 className="text-3xl font-bold mb-2">Telegram Community</h2>
      <p className="text-gray-600 mb-4">
        Join a community of fellow Forex Traders
      </p>
      <img 
        src={telegramjoin}
        alt="Telegram Community" 
        className="rounded-lg shadow-md w-full max-w-xs"
      />
    </div>

    {/* Right Column - Carousel */}
    <div className="md:col-span-2">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 }, // Only 2 on large screens
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <figure className="bg-white p-6 rounded-2xl shadow-xl h-full flex flex-col justify-between">
              <blockquote>
                <p className="text-lg text-slate-900">{testimonial.text}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <div>
                  <div className="text-base font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                </div>
                <img
                  className="h-14 w-14 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
  </div>
</div>

  );
}
