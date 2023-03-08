import React from 'react';
import Image from 'next/image';
// import ScrollAnimation from 'react-animate-on-scroll';

const BannerWhyGoldNow = () => {
  return (
    <div className="bg-page8 h-[calc(100vh-130px)] w-full overflow-hidden">
      <div className="relative">
        <div className="flex flex-col items-center h-[100vh]">
          <div className="flex flex-col justify-center items-center h-[80vh]">
            <div className="cursor-pointer">
              <span className="text-primary text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                Why{' '}
              </span>
              <span className="text-secondary-dark text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                Gold Mine{' '}
              </span>{' '}
              <span className="text-primary text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                Now{' '}
              </span>
            </div>
            <div className="object-cover">
              <Image
                src={'/Main/why-gold.png'}
                width="250"
                height="50"
                alt="bitcoin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWhyGoldNow;
