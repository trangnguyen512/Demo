import React from 'react';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';

const HomeMobile = () => {
  return (
    <>
      <section className="bg-home h-full w-full">
        <div className="h-[100vh] md:full xl:h-[100vh] flex items-center justify-center xl:flex xl:items-center">
          <div className="relative">
            <div className="flex flex-col justify-center items-center">
              <div className="w-full h-full mb-6 flex justify-center items-center">
                <ScrollAnimation
                  animateIn="fadeInDown"
                  className="w-[180px] h-[70px] md:w-[250px] lg:h-[90px] 2xl:h-[170px] 2xl:w-[250px] relative"
                >
                  <Image
                    alt="logo.png"
                    src={'/Main/mainlogo.png'}
                    layout="fill"
                    priority
                    objectFit="contain"
                    className=""
                  />
                </ScrollAnimation>
              </div>
              <ScrollAnimation
                animateIn="fadeInUp"
                className="title-homme cursor-pointer mb-10 word-spacing:0.16rem] mix-blend-normal text-primary text-md_size_regular  md:text-xl_size lg:text-banner_size 2xl:text-xl_name font-semibold font-bulter_bold"
              >
                BECOME A{' '}
                <span className="text-secondary-dark font-medium font-bulter_bold">
                  GOLD MINE
                </span>{' '}
                OWNER{' '}
              </ScrollAnimation>
              <ScrollAnimation animateIn="zoomIn" className="mb-5">
                <div className="span-txt font-bulter_regular text-center mb-7 text-[1.5rem]  lg:text-[2rem] 2xl:text-[3rem] mix-blend-normal tracking-[10px] text-primary font-semibold">
                  事業概要説明書
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-llc text-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[2rem] text-primary font-medium mix-blend-normal">
                    <span className="font-bulter_regular  font-semibold">
                      {' '}
                      第一号{' '}
                    </span>
                    L L C{' '}
                  </span>
                  <span className="text-llc text-center font-bulter_regular mb-7 text-[1.2rem] lg:text-[1.4rem]  2xl:text-[2rem] tracking-[4px] text-primary font-semibold mix-blend-normal">
                    合同会社社員権 説明用資料
                  </span>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMobile;
