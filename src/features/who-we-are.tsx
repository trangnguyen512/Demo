import React from 'react';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';

const WhoAreYou = () => {
  return (
    <>
      <div className="hidden md:block lg:block h-[calc(100vh-150px)] w-full overflow-hidden">
        <div className="relative">
          <div className="flex flex-col items-center h-[100vh]">
            <div className="flex flex-col justify-center items-center h-[50vh]">
              <ScrollAnimation animateIn="fadeInUp" className="cursor-pointer">
                <span className="text-primary text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  Who{' '}
                </span>
                <span className="text-secondary-dark text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold tracking-[5px]">
                  We{' '}
                </span>{' '}
                <span className="text-primary text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  Are{' '}
                </span>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={400}
                className="object-cover"
              >
                <Image
                  src={'/Main/who-we.png'}
                  width="250"
                  height="50"
                  alt="bitcoin"
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden lg:hidden bg-page10 h-[calc(100vh-150px)] w-full overflow-hidden">
        <div className="relative">
          <div className="flex flex-col items-center h-[100vh]">
            <div className="flex flex-col justify-center items-center h-[75vh]">
              <ScrollAnimation animateIn="fadeInUp" className="cursor-pointer">
                <span className="text-primary text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  Who{' '}
                </span>
                <span className="text-secondary-dark text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold tracking-[5px]">
                  We{' '}
                </span>{' '}
                <span className="text-primary text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  Are{' '}
                </span>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={400}
                className="object-cover"
              >
                <Image
                  src={'/Main/who-we.png'}
                  width="250"
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

export default WhoAreYou;
