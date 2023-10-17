"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Caroussel = () => {
  return (
    <div className="pt-[200px]">
      <div className="flex flex-col justify-center align-center px-10 mx-auto container">
        <div className=" text-center text-[50px] font-[700] leading-[64px] text-[#232340] pb-[120px]">
          {" "}
          What people say about Team
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={300}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper container mx-auto px-10"
        >
          <div className="flex flex-row">
            <SwiperSlide>
              <div className="bg-[#FFFFFF] space-y-4 shadow-xl w-[300px]">
                <div className="flex flex-row">
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                </div>
                <div>
                  <p>
                    Vestibulum eu quam nec neque pellentesque efficitur id eget
                    nisl. Proin porta est convallis lacus blandit pretium sed
                    non enim. Maecenas lacinia non orci at aliquam. Donec
                    finibus, urna bibendum ultricies laoreet.
                  </p>
                  <div className="flex flex-row pt-[10px]  space-x-4">
                    <div>
                      <Image src="/Ellipse.svg" width={40} height={40} />
                    </div>
                    <div className="flex flex-col">
                      <p>Chealsea Morgan</p>
                      <p>CEO of Subway</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF] space-y-4 shadow-xl w-[300px]">
                <div className="flex flex-row">
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                </div>
                <div>
                  <p>
                    Vestibulum eu quam nec neque pellentesque efficitur id eget
                    nisl. Proin porta est convallis lacus blandit pretium sed
                    non enim. Maecenas lacinia non orci at aliquam. Donec
                    finibus, urna bibendum ultricies laoreet.
                  </p>
                  <div className="flex flex-row pt-[10px]  space-x-4">
                    <div>
                      <Image src="/Ellipse.svg" width={40} height={40} />
                    </div>
                    <div className="flex flex-col">
                      <p>Chealsea Morgan</p>
                      <p>CEO of Subway</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF] space-y-4 shadow-xl w-[300px]">
                <div className="flex flex-row">
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                </div>
                <div>
                  <p>
                    Vestibulum eu quam nec neque pellentesque efficitur id eget
                    nisl. Proin porta est convallis lacus blandit pretium sed
                    non enim. Maecenas lacinia non orci at aliquam. Donec
                    finibus, urna bibendum ultricies laoreet.
                  </p>
                  <div className="flex flex-row pt-[10px]  space-x-4">
                    <div>
                      <Image src="/Ellipse.svg" width={40} height={40} />
                    </div>
                    <div className="flex flex-col">
                      <p>Chealsea Morgan</p>
                      <p>CEO of Subway</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF] space-y-4 shadow-xl w-[300px]">
                <div className="flex flex-row">
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                </div>
                <div>
                  <p>
                    Vestibulum eu quam nec neque pellentesque efficitur id eget
                    nisl. Proin porta est convallis lacus blandit pretium sed
                    non enim. Maecenas lacinia non orci at aliquam. Donec
                    finibus, urna bibendum ultricies laoreet.
                  </p>
                  <div className="flex flex-row pt-[10px]  space-x-4">
                    <div>
                      <Image src="/Ellipse.svg" width={40} height={40} />
                    </div>
                    <div className="flex flex-col">
                      <p>Chealsea Morgan</p>
                      <p>CEO of Subway</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF] space-y-4 shadow-xl w-[300px]">
                <div className="flex flex-row">
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                  <Image src="Star.svg" width={25} height={25} />
                </div>
                <div>
                  <p>
                    Vestibulum eu quam nec neque pellentesque efficitur id eget
                    nisl. Proin porta est convallis lacus blandit pretium sed
                    non enim. Maecenas lacinia non orci at aliquam. Donec
                    finibus, urna bibendum ultricies laoreet.
                  </p>
                  <div className="flex flex-row pt-[10px]  space-x-4">
                    <div>
                      <Image src="/Ellipse.svg" width={40} height={40} />
                    </div>
                    <div className="flex flex-col">
                      <p>Chealsea Morgan</p>
                      <p>CEO of Subway</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Caroussel;
