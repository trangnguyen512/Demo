import React from 'react';
import Image from 'next/image';
import ReverseTop from './image/reserve-top.png';
import ReverseBottomLeft from './image/reverse-bottom-left.png';
import ReverseBottomRight from './image/reverse-bottom-right.png';
// import ScrollAnimation from 'react-animate-on-scroll';

const CharacterReserves = () => {
  return (
    <>
      <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative mt-4">
        <div className="main-content h-[97%] w-full flex flex-col md:grid md:grid-flow-row lg:grid-flow-col md:grid-rows-6 lg:grid-rows-none lg:grid-cols-2 gap-2 lg:gap-10">
          <div className="col-right h-[80%] md:h-full md:row-start-1 md:row-end-6 lg:row-span-1 lg:col-span-1 flex flex-col items-start justify-start gap-2">
            <div
              // animateIn="fadeInLeft"
              // delay={400}
              className="w-full h-[65%] relative bg-left-key-indicators py-4 px-6"
            >
              <Image
                src={ReverseTop}
                objectFit="fill"
                layout="fill"
                alt="left image"
              />
            </div>
            <div className="w-full h-[35%] p-3 bg-left-key-indicators">
              <div className="wrap-image flex items-center justify-center gap-6 h-full w-full">
                <div
                  // animateIn="fadeInLeft"
                  // delay={600}
                  className="w-1/2 h-full relative"
                >
                  <Image
                    src={ReverseBottomLeft}
                    objectFit="fill"
                    layout="fill"
                    alt="left image"
                  />
                </div>
                <div
                  // animateIn="fadeInLeft"
                  // delay={800}
                  className="w-1/2 h-full relative"
                >
                  <Image
                    src={ReverseBottomRight}
                    objectFit="fill"
                    layout="fill"
                    alt="left image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-right mt-5 md:mt-0 p-2 md:p-0 h-[20%] md:h-full md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1  flex flex-col items-start justify-start relative">
            <div
              // animateIn="fadeInDown"
              // animateOnce
              className="title h-17 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary"
            >
              金鉱山の構造的特徴
            </div>
            <div className="border-b-[1.5px] border-[#707070] w-full lg:w-[85%] mb-4" />

            <div
              // animateIn="fadeInDown"
              // animateOnce
              // delay={300}
              className="content w-full font-light"
            >
              <div className="text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10">
                鉱山に対して、横向きにトンネルが続いており、その先
                <br />
                に金脈がある採掘場が存在します。
              </div>
            </div>
            <div
              // animateIn="fadeInDown"
              // animateOnce
              // delay={500}
              className="text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10"
            >
              全体の長さは
              <span className="text-secondary">700メートル以上</span>
              にも渡り、3階層の作り
              <br />
              になっており、その間は梯子で繋がっています。
            </div>

            <div
              // animateIn="fadeInDown"
              // animateOnce
              // delay={700}
              className="text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10"
            >
              金脈は南北に伸びる局所的なせん断帯 - 変形の局所化現
              <br />
              象の地質構造の可能性が高く、
              <span className="text-secondary"> ゴールドが存在しやす</span>
              <br />
              <span className="text-secondary"> いエリア</span>
              となっており、実際に新たな金脈も周辺鉱山で
              <br />
              多く見つかっています。
            </div>
            <div
              // animateIn="fadeInDown"
              // animateOnce
              // delay={900}
              className="text-mobile pb-16   md:pb-10 lg:pb-0 md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10"
            >
              1930年代に設置された作業場にも関わらず、優れたコン
              <br />
              ディションで維持されており、
              <span className="text-secondary">既存の状態で初期の小</span>
              <br />
              <span className="text-secondary">
                規模生産をサポート出来るほどの状態
              </span>
              です。この
              <br />
              足場をベースに、採掘場所の拡大を行っていきます。
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-[28rem] lg:mt-40 xl:mt-36 2xl:mt-32 min-h-[1300px] md:min-h-[1300px] xl:min-h-[400px] 2xl:min-h-[900px]">
        <Partner />
      </div>
      <div className="lg:mt-20 xl:mt-12 ">
        <CharacteristicsReserves4 />
      </div>
      <div className="mt-4  lg:mt-20 xl:mt-12 pb-5 ">
        <CharacteristicsReserve3 />
      </div> */}
    </>
  );
};

export default CharacterReserves;
