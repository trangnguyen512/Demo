import Image from 'next/image';
import React from 'react';
import ReserveImg1 from './image/reserve-3.1.png';
import ReserveImg2 from './image/reserve-3.2.png';

const CharacteristicsReserve3 = () => {
  return (
    <div className="page-numb">
      <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative flex justify-center items-center">
        <div className="main-content h-[100%] w-[95%] flex flex-col  md:grid md:grid-flow-row xl:grid-flow-col md:grid-rows-6 xl:grid-rows-none xl:grid-cols-2 gap-2 md:gap-40 xl:gap-10">
          <div className="col-left md:h-full lg:h-[20%] md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1  flex flex-col items-start justify-start gap-2 xl:gap-4 relative">
            <div className="title h-17 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary border-b-[1px] border-black w-full">
              最 新 の 埋 蔵 量 調 査
            </div>
            <div className="text-primary content w-full font-light">
              <div className="text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-loose">
                2019-2021年に行われた掘削調査によると、坑道掘削で発見
                <br />
                されていた
                <span className="text-secondary-dark font-semibold font-bulter_bold">
                  金鉱化帯が2倍に拡大する可能性が高い
                </span>
                <br />
                と報告されています。
              </div>
            </div>
            <div className="text-primary text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-loose">
              より大規模な金鉱脈が存在する可能性が示唆されており、
              <br />
              坑道拡張により
              <span className="text-secondary-dark font-semibold font-bulter_bold">
                新たな鉱脈に出会える可能性が高
                <br />
                く、増益が見込める可
              </span>
              能性があることが判明しています。
            </div>
            <div className="text-primary text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-loose">
              そのため、掘削作業を進めながら同時に継続的調査を行
              <br />
              い、坑道を拡張し新たな鉱脈を探る予定です。
            </div>
          </div>
          <div className="reserve-img col-right h-[80%] md:h-full md:row-start-1 md:row-end-6 xl:row-span-1 xl:col-span-1 flex flex-col items-start justify-start gap-4 xl:gap-10">
            <div className="h-0 xl:h-16"></div>
            <div className="h-1/2 min-h-[250px] md:min-h-[400px] xl:min-h-[300px] w-full flex flex-col items-start justify-between md:justify-center gap-2 bg-left-key-indicators py-8 md:py-4 px-2 md:px-4">
              <div className="h-full w-full relative">
                <Image
                  src={ReserveImg1}
                  objectFit="cover"
                  layout="fill"
                  alt="reserve 1"
                />
              </div>
            </div>
            <div className="min-h-[200px]  md:min-h-[300px] h-1/2 w-full flex flex-col items-start justify-center gap-6 bg-left-key-indicators py-4 px-0 md:px-4 relative">
              <div className="h-full w-full relative">
                <Image
                  src={ReserveImg2}
                  objectFit="fill"
                  layout="fill"
                  alt="reserve 1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacteristicsReserve3;
