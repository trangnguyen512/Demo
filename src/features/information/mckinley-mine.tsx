import React from 'react';
import Image from 'next/image';
import AmericaMap from './image/map-america.png';

const McKinleyMine = () => {
  return (
    <>
      <div className="min-h-[900px] md:min-h-[700px] flex items-center md:items-end justify-center px-5 py-10 h-[calc(100vh-130px)] w-full relative bg-mckinley-mine">
        <div className="main-content flex flex-col items-center justify-center gap-24 md:gap-6 h-[80%] w-full">
          <div className="mine h-[200px] md:h-1/3 w-full flex flex-col items-center justify-start md:justify-center gap-2">
            <div
              // animateIn="fadeInDown"
              // animateOnce
              // delay={100}
              className="tracking-[10px] font-bulter_regular text-secondary-dark text-title uppercase"
            >
              gold mine
            </div>
            <div
              // animateIn="fadeInDown"
              // animateOnce
              // delay={200}
              className="text-white font-bulter_regular w-max text-md_title  md:text-big_title "
            >
              McKinley Mine
            </div>
            <div
              // animateIn="fadeInDown"
              // animateOnce
              // delay={300}
              className="font-bulter_regular text-primary text-title"
            >
              Idaho, USA
            </div>
          </div>
          <div className="h-2/3 min-h-[300px] md:min-h-0 w-full flex flex-col-reverse    md:flex-row items-center justify-center gap-6">
            <div className="px-6 py-8 texts h-full w-full md:w-1/2 lg:w-2/3 bg-white/50 shadow-mckinley font-zenkaku text-size_regular md:text-base  xl:text-lg_size_regular font-semibold leading-6  xl:leading-10">
              <div>
                アイダホ州リギンズの近くに位置しており、一帯はシンプソン金鉱山地区の一部であり、金、銀を含む鉱物の生産で有名な
                <span className="text-secondary-dark">
                  ゴールドベルトに位置
                </span>
                しています。
              </div>
              <div>
                歴史的には、1911年に開発許可がおり、1937年までは採掘が行われましたが、それ以降は、本格的な採掘は停止していました。
              </div>
              <div>
                費用をかけ、再調査を行った結果、
                <span className="text-secondary-dark">想定の2倍以上の金脈</span>
                がある可能性が判明。改めて採掘を開始し、長期的にこの周辺の鉱山を開発していく予定です。
              </div>
            </div>
            <div
              // animateIn="fadeInRight"
              className="maps min-h-[200px] md:min-h-0 h-full w-full md:w-1/2 lg:w-1/3 relative"
            >
              <Image
                src={AmericaMap}
                objectFit="contain"
                layout="fill"
                alt="map america"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <McKinleyMine2 /> */}
    </>
  );
};

export default McKinleyMine;
