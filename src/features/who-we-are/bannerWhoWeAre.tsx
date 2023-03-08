import React from 'react';
import Image from 'next/image';

const BannerWhoWeAre = () => {
  return (
    <>
      <div className="bg-page10 hidden md:block lg:block h-full w-full overflow-hidden">
        <div className="relative">
          <div className="flex flex-col items-center h-[100vh]">
            <div className="flex flex-col justify-center items-center h-[80vh]">
              <div className="cursor-pointer">
                <span className="text-primary text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  Who{' '}
                </span>
                <span className="text-secondary-dark text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold tracking-[5px]">
                  We{' '}
                </span>{' '}
                <span className="text-primary text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                  Are{' '}
                </span>
              </div>
              <div className="object-cover">
                <Image
                  src={'/Main/who-we.png'}
                  width="250"
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

export default BannerWhoWeAre;
