import React from 'react';
import Image from 'next/image';
import Item1 from './image/image1.png';
import Item2 from './image/image2.png';
import Item3 from './image/image3.png';
import Item4 from './image/image4.png';
// import ScrollAnimation from 'react-animate-on-scroll';

const McKinleyMine2 = () => {
  return (
    <div className="min-h-[900px] md:min-h-[700px] flex items-center md:items-end justify-center h-[calc(100vh-130px)]">
      <div className="main-content flex flex-col md:flex-row items-center justify-center h-full w-full">
        <div className="w-full md:w-2/5 h-full relative border-[3px] border-solid border-secondary/50">
          <Image src={Item1} objectFit="fill" layout="fill" alt="left image" />
        </div>
        <div className="w-full md:w-3/5 h-full flex flex-col items-center justify-center">
          <div className="h-1/2 w-full flex items-center justify-center">
            <div className="h-full w-1/2 relative border-[3px] border-solid border-secondary/50">
              <Image
                src={Item2}
                objectFit="fill"
                layout="fill"
                alt="left image"
              />
            </div>
            <div className="h-full w-1/2 relative border-[3px] border-solid border-secondary/50">
              <Image
                src={Item3}
                objectFit="fill"
                layout="fill"
                alt="left image"
              />
            </div>
          </div>
          <div className="h-1/2 w-full relative border-[3px] border-solid border-secondary/50">
            <Image
              src={Item4}
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

export default McKinleyMine2;
