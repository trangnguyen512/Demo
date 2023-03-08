import React from 'react';
import Image from 'next/image';
// import ScrollAnimation from 'react-animate-on-scroll';

const RevenuePlan = () => {
  return (
    <div>
      {/* PC */}
      <div className="bg-revenue-plan hidden md:block lg:block min-h-[700px] h-[calc(100vh-130px)] w-full relative">
        <div className="relative">
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center items-center h-[80vh]">
              <div
                // animateIn="fadeInUp"
                className="pb-3 tracking-[15px]"
              >
                <span className="text-[#CD9E47] text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  収益
                </span>
                <span className="text-[#474747] text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  プラン
                </span>
              </div>
              <div
                // animateIn="fadeInUp"
                // delay={300}
                className="object-cover"
              >
                <Image
                  src={'/Main/yellow-2.png'}
                  width="300"
                  height="50"
                  alt="yellow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="bg-revenue-plan block md:hidden lg:hidden min-h-[700px] h-[calc(100vh-150px)] w-full relative">
        <div className="relative">
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center items-center h-[75vh]">
              <div
                // animateIn="fadeInUp"
                className="pb-3 tracking-[15px]"
              >
                <span className="text-[#CD9E47] text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  収益
                </span>
                <span className="text-[#474747] text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  プラン
                </span>
              </div>
              <div
                // animateIn="fadeInUp"
                // delay={300}
                className="object-cover"
              >
                <Image
                  src={'/Main/yellow-2.png'}
                  width="300"
                  height="50"
                  alt="yellow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenuePlan;
