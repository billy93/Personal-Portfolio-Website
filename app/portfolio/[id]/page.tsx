"use client";

import Footer from '@/components/Footer'
import { Spotlight } from '@/components/ui/Spotlight';
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useState } from 'react'


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "/porto1.png",
    "/porto2.png",
    "/porto3.png",
    "/porto4.png",
    "/porto1.png",
    "/porto2.png",
    "/porto3.png",
    "/porto4.png"
  ];

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleSlideTo = (index:number) => {
    setCurrentIndex(index);
  };

  return (
    <div id="default-carousel" className="relative mb-10" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden rounded-lg h-96 lg:h-[32rem]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out transform ${index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
            data-carousel-item
          >
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
              src={slide}
              className="block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleSlideTo(index)}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
  

const PortfolioDetail = ({id}: any) => {
  const [icon, setIcon]= useState([
    "/re.svg", "/tail.svg", "/ts.svg", "/gsap.svg", "/chakra.svg",
  "/re.svg", "/tail.svg", "/ts.svg", "/gsap.svg", "/chakra.svg"])
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">        
        <section id="portfolio">

          <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="h-[80vh] w-[50vw] top-10 left-full"
              fill="purple"
            />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
          </div>

          <div className="py-20 flex flex-col justify-center items-center m-auto">
            <div className='relative flex flex-col justify-center items-center m-auto'>
              <a href="/">
                <img src="/back.svg" width="48px" height="48px" className='absolute invert top-0 left-0 md:left-[-4rem]'/>
              </a>

              <h1 className="heading w-[50vw] text-center">
                Morrent - The modern solution for car rentals
              </h1>
              <p className='my-4 mb-10 text-center'>Seamless, Convenient, and Effortless Mobility at Your Fingertips.</p>
            </div>

            <div className='w-[70%]'>
              <Carousel/>
            </div>
            
            <div className='w-[70%] flex flex-col gap-10'>
              <div>
                <h1 className='font-bold text-3xl md:text-4xl'>Overview</h1>
                <p className='my-4 font-light'>Morrent, our cutting-edge car rental application developed using the robust MERN stack, is revolutionizing the car rental industry. With a dynamic homepage showcasing featured vehicles, convenient pickup and drop-off locations, and a comprehensive list of available cars, It ensures a seamless and visually appealing experience for users.</p>
              </div>

              <div>
                <h1 className='font-bold text-3xl md:text-4xl'>Problem</h1>
                <p className='my-4 font-light'>Morrent, our cutting-edge car rental application developed using the robust MERN stack, is revolutionizing the car rental industry. With a dynamic homepage showcasing featured vehicles, convenient pickup and drop-off locations, and a comprehensive list of available cars, It ensures a seamless and visually appealing experience for users.</p>
              </div>

              <div>
                <h1 className='font-bold text-3xl md:text-4xl'>Tech Stack</h1>
                <div className='grid gap-10 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 my-10 justify-evenly items-center flex-wrap'>
                  {icon.map((e,i) => (
                    <div key={i} className='rounded-full bg-[#1D1F25] w-24 h-24 flex justify-center items-center '>
                      <Image
                        width={0}
                        height={0}
                        style={{ width: '60%', height: '60%' }}
                        src={e}
                        className="block object-fill"
                        alt={`Logo`}
                      ></Image>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h1 className='font-bold text-3xl md:text-4xl'>Reflection</h1>
                <p className='my-4 font-light'>Morrent, our cutting-edge car rental application developed using the robust MERN stack, is revolutionizing the car rental industry. With a dynamic homepage showcasing featured vehicles, convenient pickup and drop-off locations, and a comprehensive list of available cars, It ensures a seamless and visually appealing experience for users.</p>
              </div>

              <div>
                <h1 className='font-bold text-3xl md:text-4xl'>Final Site</h1>
                  <p className='my-4 font-light'>
                    <a className="text-blue-400" target="_blank" href="https://sales-amanyaman.vercel.app">https://sales-amanyaman.vercel.app <img src="/link-2.svg" className='inline'/></a> 
                  </p>
                  <Carousel />
              </div>

              <div>
                <h1 className='font-bold text-3xl md:text-4xl'>Learning</h1>
                <ul className='list-decimal px-5'>
                  <li>
                    <p className='my-4 font-light'>Morrent, our cutting-edge car rental application developed using the robust MERN stack, is revolutionizing the car rental industry. With a dynamic homepage showcasing featured vehicles, convenient pickup and drop-off locations, and a comprehensive list of available cars, It ensures a seamless and visually appealing experience for users.</p>
                  </li>
                  <li>
                    <p className='my-4 font-light'>Morrent, our cutting-edge car rental application developed using the robust MERN stack, is revolutionizing the car rental industry. With a dynamic homepage showcasing featured vehicles, convenient pickup and drop-off locations, and a comprehensive list of available cars, It ensures a seamless and visually appealing experience for users.</p>
                  </li>
                  <li>
                    <p className='my-4 font-light'>Morrent, our cutting-edge car rental application developed using the robust MERN stack, is revolutionizing the car rental industry. With a dynamic homepage showcasing featured vehicles, convenient pickup and drop-off locations, and a comprehensive list of available cars, It ensures a seamless and visually appealing experience for users.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h1 className='font-bold text-3xl md:text-4xl'>Challenges</h1>
                <ul className='list-decimal px-5'>
                  <li>
                    <p className='my-4 font-light'>Morrent, our cutting-edge car rental application developed using the robust MERN stack, is revolutionizing the car rental industry. With a dynamic homepage showcasing featured vehicles, convenient pickup and drop-off locations, and a comprehensive list of available cars, It ensures a seamless and visually appealing experience for users.</p>
                  </li>
                  <li>
                    <p className='my-4 font-light'>Morrent, our cutting-edge car rental application developed using the robust MERN stack, is revolutionizing the car rental industry. With a dynamic homepage showcasing featured vehicles, convenient pickup and drop-off locations, and a comprehensive list of available cars, It ensures a seamless and visually appealing experience for users.</p>
                  </li>
                  <li>
                    <p className='my-4 font-light'>Morrent, our cutting-edge car rental application developed using the robust MERN stack, is revolutionizing the car rental industry. With a dynamic homepage showcasing featured vehicles, convenient pickup and drop-off locations, and a comprehensive list of available cars, It ensures a seamless and visually appealing experience for users.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h1 className='font-bold text-3xl md:text-4xl'>Future</h1>
                <p className='my-4 font-light'>Morrent, our cutting-edge car rental application developed using the robust MERN stack, is revolutionizing the car rental industry. With a dynamic homepage showcasing featured vehicles, convenient pickup and drop-off locations, and a comprehensive list of available cars, It ensures a seamless and visually appealing experience for users.</p>
              </div>
            </div>
          </div>
        </section> 
        <Footer />
      </div>
    </div> 
    )
}

export default PortfolioDetail