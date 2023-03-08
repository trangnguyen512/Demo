import React from 'react';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';

const OurMissionMobile = () => {
  return (
    <>
      <div className="bg-page6 h-[calc(100vh-150px)] w-full overflow-hidden">
        <div className="relative">
          <div className="flex flex-col items-center h-[100vh]">
            <div className="flex flex-col justify-center items-center h-[75vh]">
              <ScrollAnimation
                animateIn="fadeInLeft"
                className="cursor-pointer"
              >
                <span className="text-primary text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  Our{' '}
                </span>
                <span className="text-secondary-dark text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  Mission
                </span>{' '}
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInLeft"
                delay={200}
                className="object-cover"
              >
                <Image
                  src={'/Main/yello.png'}
                  width="230"
                  height="50"
                  alt="bitcoin"
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurMissionMobile;
