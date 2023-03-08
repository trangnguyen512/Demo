import React from 'react';
import Image from 'next/image';
import Item1 from './image/it1.png';
import Item2 from './image/it2.png';
import Item3 from './image/it3.png';
import ScrollAnimation from 'react-animate-on-scroll';

const OurMissionContent = () => {
  return (
    <div className="min-h-[700px] h-[calc(100vh-150px)] w-full relative">
      <div className="main-content h-[90%] w-full flex flex-col md:grid md:grid-flow-row lg:grid-flow-col md:grid-rows-6 lg:grid-rows-none lg:grid-cols-2 gap-2 lg:gap-10">
        <div className="col-left relative items-center justify-center mt-10 h-[60%] md:h-full md:row-start-1 md:row-end-6 lg:row-span-1 lg:col-span-1 flex flex-col">
          <div className="w-full h-full flex flex-col ">
            <div className="grid grid-flow-col auto-cols-[minmax(0,_2fr)] w-full h-full">
              <ScrollAnimation
                animateIn="fadeInLeft"
                className="bg-miss flex justify-center items-center"
              >
                <span className="flex items-center text-[12px] md:text-[17px] lg:text-[25px] xl:text-[28px] text-[#fff] font-semibold">
                  持続可能な開発
                </span>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" delay={200}>
                <div className="h-full w-full relative">
                  <Image
                    alt="bg-left"
                    src={Item1}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </ScrollAnimation>
            </div>

            <div className="grid grid-flow-col auto-cols-[minmax(0,_2fr)]  w-full h-full">
              <ScrollAnimation animateIn="fadeInLeft" delay={300}>
                <div className="h-full w-full relative">
                  <Image
                    alt="bg-left"
                    src={Item2}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInLeft"
                delay={400}
                className="bg-miss flex justify-center items-center"
              >
                <span className="flex items-center text-[12px] md:text-[17px] lg:text-[25px] xl:text-[28px] text-[#fff] font-semibold">
                  高品質の金生産
                </span>
              </ScrollAnimation>
            </div>

            <div className="grid grid-flow-col auto-cols-[minmax(0,_2fr)] w-full h-full">
              <ScrollAnimation
                animateIn="fadeInLeft"
                delay={500}
                className="bg-miss flex justify-center items-center"
              >
                <span className="flex items-center text-[12px] md:text-[17px] lg:text-[25px] xl:text-[28px] text-[#fff] font-semibold">
                  鉱山事業の世代交代
                </span>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" delay={600}>
                <div className="h-full w-full relative">
                  <Image
                    alt="bg-left"
                    src={Item3}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="col-right p-2 md:p-0 mt-5 md:mt-20 lg:mt-0 h-[20%] md:h-full md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1  flex flex-col items-start justify-start gap-2 lg:gap-4 relative">
          <ScrollAnimation
            animateIn="fadeInDown"
            animateOnce
            delay={100}
            className="title h-17 font-bulter_bold font-medium text-[25px] md:text-size_pcmd lg:size_pclg text-primary border-b-[1.5px] border-[#707070] w-full lg:w-[85%]"
          >
            Our Mission
          </ScrollAnimation>
          <div className="flex flex-col  gap-4 mt-4">
            <ScrollAnimation
              animateIn="fadeInDown"
              animateOnce
              delay={300}
              className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
              <span className="text-secondary-dark font-medium font-bulter_medium">
                {' '}
                世界的に金需要が増加
              </span>
              しており、 金は今後も重要な
              <br />
              資産となるでしょう。また、国際関係や政治的な不安な
              <br />
              どにより、基軸通貨が米ドルから移行する可能性もあり
              <br />
              ます。
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInDown"
              animateOnce
              delay={400}
              className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
              それに伴い、資産の保全としての
              <span className="text-secondary-dark font-medium font-bulter_medium">
                金はより重要な役
              </span>
              <br />
              <span className="text-secondary-dark font-medium font-bulter_medium">
                割
              </span>
              を担うこと考えています。
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInDown"
              animateOnce
              delay={500}
              className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
              そのため、金鉱山開発においては、
              <span>持続可能な開発</span>
              に
              <br />
              力を入れ、環境保護に配慮しながら、高品質な金を生産
              <br />
              することが求められます。
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInDown"
              animateOnce
              delay={600}
              className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
              また、多くの小-中規模の鉱山が
              <span className="text-secondary-dark font-medium font-bulter_medium">
                世代交代、資金調達
              </span>
              <br />
              <span className="text-secondary-dark font-medium font-bulter_medium">
                {' '}
                を必要
              </span>
              としています。
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeInDown"
              animateOnce
              delay={700}
              className="text-mobile text-[black] leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-semibold"
            >
              我々はその問題を解決しながら、質の高い投資
              <br />
              機会を長期的に提供します。
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurMissionContent;
