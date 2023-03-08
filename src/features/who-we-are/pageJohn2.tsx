import React from 'react';
import Image from 'next/image';
import East from './image/east.png';
// import ScrollAnimation from 'react-animate-on-scroll';

const JohnDavid2 = () => {
  return (
    <>
      <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative">
        <div className="main-content w-full h-full flex flex-col  md:flex-col">
          <div className="w-full h-full flex flex-col md:flex-row lg:flex-row gap-0 md:gap-3 ">
            <div className="w-full md:w-[60%] h-full bg-john2">
              <div className="bg-logo h-[15%] md:h-[20%] w-full md:w-[30%] absolute top-[245px] md:top-auto right-0 md:bottom-[20px] md:left-[20px] ">
                <div className="h-full w-full">
                  <Image
                    alt="bg-left"
                    src={East}
                    layout="fill"
                    className="object-contain"
                    priority
                  />
                  <div className="absolute text-[15px] text-white right-[120px] md:right-[45px]  lg:right-[80px] bottom-[20px]">
                    <span>Board of Governors</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[40%] h-full">
              <div className="w-full h-[90%] md:h-[50%] flex justify-center items-center">
                <div className="w-full h-[80%] md:h-[50%]">
                  <div
                    // animateIn="fadeInUp"
                    className="text-secondary-dark text-[1.5rem] xl:text-[28px] font-normal font-bulter_regular"
                  >
                    CEO
                  </div>
                  <div
                    // animateIn="fadeInUp"
                    // delay={200}
                    className="text-secondary-dark text-[25px] md:text-[35px] lg:text-md_title xl:tex-[50px] font-medium font-bulter_regular"
                  >
                    John D. Waihee III
                  </div>
                  <div
                    // animateIn="fadeInUp"
                    // delay={400}
                    className="text-end text-secondary-dark text-xl_size font-medium font-bulter_regular"
                  >
                    Former Hawaii Governor
                  </div>
                </div>
              </div>
              <div className=" w-full h-[70%] md:h-[49%] relative">
                <div className="absolute bottom-0 right-0">
                  <a target="blank" href="https://www.eastwestcenter.org/">
                    https://www.eastwestcenter.org/
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[60%] h-auto bg-[#fff] shadow-[10px_10px_0_#C0B493] px-6 py-[1rem] texts bg-white/50 shadow-mckinley text-size_regular md:text-base  xl:text-[18px] leading-6  xl:leading-10 absolute bottom-[-140px] md:bottom-[40px] lg:bottom-[50px] right-0">
            <div
              // animateIn="fadeInLeft"
              className="text-intro text-primary leading-[20px] md:leading-[25px] lg:leading-[35px] text-size_regular md:text-[16px] xl:text-lg_size_regular font-medium"
            >
              John David Waihe IIIはEAST-WEST CENTERというアメリカ・アジア太平
              <br />
              洋諸国のより良い関係性のための活動を行っている組織の役員を務めてい
              <br />
              ます。
            </div>
            <div className="flex w-full relative items-center">
              <div
                // animateIn="fadeInLeft"
                // delay={300}
                className="w-[70%] text-intro text-primary leading-[20px] md:leading-[25px] lg:leading-[35px] text-size_regular md:text-[16px] xl:text-lg_size_regular font-medium"
              >
                <span>この組織の役員には他にもサントリー代表取締役</span>
                <br />
                <span>でもある新浪剛史さんや、現ハワイ州知事のJosh</span>
                <br />
                Greens氏、バンク・オブ・ハワイ会長兼CEOの
                <br />
                Peter S. Ho氏も名を連ねています。
              </div>
              <div
                // animateIn="fadeInLeft"
                // delay={500}
                className="w-[30%] z-[-1] absolute right-0 "
              >
                <Image
                  src={'/Main/user7.png'}
                  width="150"
                  height="150"
                  alt="bitcoin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JohnDavid2;
