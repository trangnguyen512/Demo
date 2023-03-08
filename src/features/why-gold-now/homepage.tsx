import React from 'react';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';

const WhyGoldNowMobile = () => {
  return (
    <section>
      <div className="bg-page8 h-[calc(100vh-150px)] w-full overflow-hidden">
        <div className="relative">
          <div className="flex flex-col items-center h-[100vh]">
            <div className="flex flex-col justify-center items-center h-[75vh]">
              <ScrollAnimation
                animateIn="fadeInLef"
                className="cursor-pointer text-center md:text-start"
              >
                <span className="text-primary text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  Why{' '}
                </span>
                <span className="text-secondary-dark text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  Gold Mine{' '}
                </span>{' '}
                <span className="text-primary text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  Now{' '}
                </span>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" className="object-cover">
                <Image
                  src={'/Main/why-gold.png'}
                  width="250"
                  height="50"
                  alt="bitcoin"
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGoldNowMobile;
