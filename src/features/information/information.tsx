import React from 'react';
import Image from 'next/image';

const Information = () => {
  return (
    <>
      {/* Pc */}
      <div className="bg-page15 hidden md:block lg:block h-[calc(100vh-130px)] w-full overflow-hidden">
        <div className="relative">
          <div className="flex flex-col items-center h-[100vh]">
            <div className="flex flex-col justify-center items-center h-[80vh]">
              <div
                // animateIn="fadeInDown"
                className="cursor-pointer tracking-[15px] [word-spacing:0.16rem]"
              >
                <span className="text-primary ttext-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[8px]">
                  McKinley
                </span>
                <span className="text-secondary-dark text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[8px]">
                  金鉱山情報
                </span>
              </div>
              <div
                // animateIn="fadeInUp"
                className="object-cover"
              >
                <Image
                  src={'/Main/who-we.png'}
                  width="300"
                  height="50"
                  alt="bitcoin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden lg:hidden bg-page15 h-[calc(100vh-150px)] w-full overflow-hidden">
        <div className="relative">
          <div className="flex flex-col items-center h-[100vh]">
            <div className="flex flex-col justify-center items-center h-[75vh]">
              <div className="cursor-pointer tracking-[15px] [word-spacing:0.16rem]">
                <div className="text-primary text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[8px]">
                  McKinley
                </div>
                <div className="text-secondary-dark text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[8px]">
                  金鉱山情報
                </div>
              </div>
              <div className="object-cover">
                <Image
                  src={'/Main/who-we.png'}
                  width="300"
                  height="50"
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

export default Information;
