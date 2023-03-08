import React from 'react';
import Image from 'next/image';
import Chart1 from './image/chartintro.png';
import Chart2 from './image/go.png';

const IntroductionMobile = () => {
  return (
    <div className="min-h-[700px] h-[calc(100vh-150px)] w-full relative">
      <div className="main-content h-[90%] w-full flex flex-col-reverse md:grid md:grid-flow-row lg:grid-flow-col md:grid-rows-6 lg:grid-rows-none lg:grid-cols-2 gap-2 lg:gap-10">
        <div className="col-left mt-[45vh] relative items-center justify-center bg-left-key-indicators h-[60%] md:h-full md:row-start-1 md:row-end-6 lg:row-span-1 lg:col-span-1 flex flex-col">
          <div className="w-[80%] h-[50%] ">
            <div className="w-full h-[90%]">
              <div className="h-full w-full relative">
                <Image
                  alt="bg-left"
                  src={Chart1}
                  layout="fill"
                  priority
                  className="object-fill"
                />
              </div>
            </div>
            <div className="w-full h-[10%] flex items-center">
              <div className="text-[7px] mt-2 mb-2 text-primary font-bulter_medium">
                出典：三菱マテリアル
                <a
                  target="_blank"
                  href="https://gold.mmc.co.jp/market/gold-price/#gold_longspan)"
                  rel="noreferrer"
                >
                  {' '}
                  (https://gold.mmc.co.jp/market/gold-price/#gold_longspan)
                </a>
              </div>
            </div>
          </div>
          <div className=" w-[80%] h-[40%] bg-white border-custom p-3 rounded-md z-30">
            <div className="w-full h-[80%]">
              <div className="h-full w-full relative">
                <Image
                  alt="bg-left"
                  src={Chart2}
                  layout="fill"
                  priority
                  className="object-fill"
                />
              </div>
            </div>
            <div className=" w-full h-[20%] flex items-center">
              <div className="text-[6px] mt-2 text-primary font-bulter_medium">
                ロシア・ウクライナ情勢をはじめとする国際情勢の不安定化は、一国に依存しない
                <br />
                普遍的な価値を持つ金の相場を押し上げる傾向が歴史的にあります。
              </div>
            </div>
          </div>
        </div>
        <div className="col-right mt-5 md:mt-20 lg:mt-0 h-[20%] md:h-full md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1  flex flex-col items-start justify-start gap-2 lg:gap-4 relative">
          <div className="title h-17 font-bulter_bold font-medium text-[25px] text-primary border-b-[1.5px] border-[#707070] w-full lg:w-[85%]">
            はじめに
          </div>

          <div className="flex flex-col  gap-4 mt-4">
            <div className="text-intro text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium">
              2022 年は、
              <span className="text-secondary-dark font-semibold font-bulter_bold">
                金の価格が歴史的に高騰した年
              </span>
              <span className="text-primary">となり</span>
              <br />
              ました。
            </div>

            <div className="text-intro text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium">
              2021年は1g=7,000円台で推移していきましたが、2022
              <br />
              年4月に8,883円の最高値を記 録した後、8,000円代を記
              <br />
              録し続けました。
            </div>

            <div className="text-intro text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium">
              金価格に最も大きな影響を与えたのは、ウクライナ情
              <br />
              勢です。ロシアが侵攻を開始したことで、「有事の
              <br />
              金」としての
              <span className="text-secondary-dark font-semibold font-bulter_bold">
                {' '}
                金の需要が高まり、金相場は上昇
              </span>
              し
              <br />
              ました。
            </div>

            <div className="text-intro text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium">
              また、世界的にインフレが起きており、
              <span className="text-secondary-dark font-semibold font-bulter_bold">
                国際情勢の
              </span>
              <br />
              <span className="text-intro text-secondary-dark font-semibold font-bulter_bold">
                {' '}
                先行きは非常に不透明
              </span>
              です。
            </div>

            <div className="text-intro text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium">
              不安定な世界情勢の中では、株式や通貨の信用や価値
              <br />
              <span className="text-primary">が揺らぐため</span>
              <span className="text-secondary-dark font-semibold font-bulter_bold">
                {' '}
                不動の通貨とされる金
              </span>
              <span>が需要を増や</span>
              <br />
              すことが予想されます。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionMobile;
