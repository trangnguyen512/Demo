import React from 'react';
import Image from 'next/image';
import Item1 from './image/moutant.png';
import Item2 from './image/light.png';
import Item3 from './image/cart1.png';

const CharacteristicsReserves4 = () => {
  return (
    <div className="bg-neo-main min-h-[700px] h-[calc(100vh-130px)] w-full relative">
      <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="page-img w-full lg:w-2/5 h-1/3 lg:h-full relative border-[5px] border-solid border-secondary-light/50">
          <Image src={Item1} objectFit="fill" layout="fill" alt="left image" />
        </div>
        <div className="w-full lg:w-3/5 h-2/3 lg:h-full flex flex-col items-center justify-center bg-right-reserve-4">
          <div className="w-full h-1/3 border-[5px] border-solid border-secondary-light/50 relative">
            <Image
              src={Item2}
              objectFit="fill"
              layout="fill"
              alt="left image"
            />
          </div>
          <div className="w-full px-8  py-2 h-1/3 flex flex-col items-center justify-between border-[5px] border-solid border-secondary-light/50 relative">
            <div className="w-full text-left font-zenkaku text-[25px] lg:text-[35px] tracking-[10px] text-primary font-medium">
              <span className="text-secondary-dark">金</span>埋蔵量
            </div>
            <div className="text-[35px] lg:text-big_title text-secondary tracking-widest font-bulter_bold ">
              55,000oz
            </div>
            <div className="w-max md:w-full text-right font-bulter_medium  text-[25px] lg:text-[35px] tracking-[10px] text-primary font-medium">
              以上の可能性
            </div>
          </div>
          <div className="w-full h-1/3 border-[5px] border-solid border-secondary-light/50 relative">
            <Image
              src={Item3}
              objectFit="fill"
              layout="fill"
              alt="left image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacteristicsReserves4;
