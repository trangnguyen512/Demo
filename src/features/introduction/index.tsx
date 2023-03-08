import React, { useEffect } from 'react';
import Image from 'next/image';
import Chart1 from './image/chartintro.png';
import Chart2 from './image/go.png';
import Bgab from './image/imgan.png';

// animation Aos
import AOS from 'aos';
import 'aos/dist/aos.css';
// ------------------------

// import ScrollAnimation from 'react-animate-on-scroll';

const Introduction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="h-full w-full relative">
      <div className="main-content h-full w-full flex flex-col md:grid md:grid-flow-row lg:grid-flow-col md:grid-rows-6 lg:grid-rows-none lg:grid-cols-2 gap-2 lg:gap-10">
        <div className="col-left relative items-center justify-center mt-10 bg-left-key-indicators h-[60%] md:h-full md:row-start-1 md:row-end-6 lg:row-span-1 lg:col-span-1 flex flex-col">
          <div
            data-aos="fade-up"
            data-aos-delay="350"
            className="w-[80%] h-[70%] absolute right-0 p-0"
          >
            <div className="h-full w-full relative">
              <Image
                alt="bg-left"
                src={Bgab}
                layout="fill"
                priority
                className="object-contain"
              />
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay={150}
            className="w-[80%] h-[50%] "
          >
            <div className="w-full h-[20vh] md:h-[90%]">
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
              <div className="text-[7px] md:mt-2 md:mb-2 md:text-[11px] lg:text-[10px] xl:text-[13px] text-primary font-bulter_medium">
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
          <div
            data-aos="fade-left"
            className=" w-[80%] h-[40%] bg-white border-custom p-3 rounded-md z-30"
          >
            <div className="w-full h-[20vh] md:h-[80%]">
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
              <div className="text-[7px] md:text-[11px] lg:text-[10px] xl:text-[13px] md:mt-2 text-primary font-bulter_medium">
                ロシア・ウクライナ情勢をはじめとする国際情勢の不安定化は、一国に依存しない
                <br />
                普遍的な価値を持つ金の相場を押し上げる傾向が歴史的にあります。
              </div>
            </div>
          </div>
        </div>
        <div className="col-right p-2 md:p-0 lg:p-0 mt-5 md:mt-20 lg:mt-0 h-[20%] md:h-full md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1  flex flex-col items-start justify-start gap-2 lg:gap-4 relative">
          <div
            data-aos="zoom-in-up"
            className="title h-17 font-bulter_bold font-medium text-[25px] md:text-size_pcmd lg:size_pclg text-primary border-b-[1.5px] border-[#707070] w-[75%] md:w-full lg:w-[85%]"
          >
            はじめに
          </div>

          <div className="flex flex-col  gap-4 mt-4">
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-[13px] md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
              2022 年は、
              <span className="text-secondary-dark font-semibold font-bulter_bold">
                金の価格が歴史的に高騰した年
              </span>
              <span className="text-primary">となり</span>
              <br />
              ました。
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-[13px] md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
              2021年は1g=7,000円台で推移していきましたが、2022
              <br />
              年4月に8,883円の最高値を記 録した後、8,000円代を記
              <br />
              録し続けました。
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-[13px] md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
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

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-[13px] md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
              また、世界的にインフレが起きており、
              <span className="text-secondary-dark font-semibold font-bulter_bold">
                国際情勢の
              </span>
              <br />
              <span className="text-mobile text-secondary-dark font-semibold font-bulter_bold">
                {' '}
                先行きは非常に不透明
              </span>
              です。
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-[13px] md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
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

export default Introduction;
