import React from 'react';
import Image from 'next/image';
import Item1 from './image/car3.png';
import Item2 from './image/pageft.png';
import Item3 from './image/pagefthr.png';
import Bgab from './image/imgan.png';
import ScrollAnimation from 'react-animate-on-scroll';

const PaPurposeOfFundraising = () => {
  return (
    <>
      <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative">
        <div className="absolute hidden lg:block z-[1] h-[350px] w-[500px] right-[400px] bottom-[10px]">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="h-full w-full relative"
          >
            <Image
              alt="bg-left"
              src={Bgab}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
        <div className="main-content relative h-full w-full flex flex-col md:grid md:grid-flow-row lg:grid-flow-col md:grid-rows-6 lg:grid-rows-none lg:grid-cols-2">
          <div className="col-right p-2 md:p-0 w-[95%] flex justify-start items-center h-full md:h-full md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1 flex-col relative">
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="title w-full md:w-[90%] ml-0 md:ml-[30px] mt-5 h-17 font-bulter_bold font-medium text-[25px] md:text-size_pcmd lg:text-size_pcmd xl:size_pclg text-primary"
            >
              社員権資金調達の目的
            </div>
            <div className="border-b-[1.5px] border-[#707070] w-full lg:w-[90%]" />

            <div className="flex flex-col gap-4 mt-7">
              <div
                data-aos="slide-left"
                className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-[13px] md:text-md_size_regular xl:text-lg_size_regular font-medium"
              >
                第一号LLCでは
                <span className="text-secondary-dark font-medium">
                  2.0 M USD (日本円にして約2.6億円)
                </span>
                <br />
                の資金調達を目標とします。
              </div>

              <div
                data-aos="slide-right"
                data-aos-delay="500"
                className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-[13px] md:text-md_size_regular xl:text-lg_size_regular font-medium"
              >
                2M USDの資金調達により、Neo Gold Money LLCは
                <br />
                アメリカのアイダホ州に位置するMcKinley Mine鉱山
                <br />
                事業における収益の13%を得る権利を取得します。
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-[13px] md:text-md_size_regular xl:text-lg_size_regular font-medium"
              >
                今回の資金調達の主な目的は以下のの３つとなりま
                <br />
                す。
              </div>
              <div className="text-mobile ml-[30px] text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-[13px] md:text-md_size_regular xl:text-lg_size_regular font-medium">
                <div
                  data-aos="fade-right"
                  data-aos-delay="400"
                  className="text-secondary-dark mb-[10px] font-medium font-bulter_medium list-item "
                >
                  採掘直前の最終資金調達
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="600"
                  className="text-secondary-dark mb-[10px] font-medium font-bulter_medium list-item"
                >
                  金価格上昇前の投資機会提供
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="800"
                  className="text-secondary-dark mb-[10px] font-medium font-bulter_medium list-item"
                >
                  金鉱山ビジネスの民主化
                </div>
                <br />
              </div>
            </div>
          </div>

          <div className="col-left md:mt-10 h-[60%] md:h-[90%] lg:h-[90%] md:row-start-1 md:row-end-6 lg:row-span-1 lg:col-span-1 flex flex-col items-start justify-start gap-4">
            <div
              data-aos="fade-right"
              data-aos-delay="1000"
              className="w-full md:w-full lg:w-[80%] h-[70%] md:h-full lg:h-full flex flex-col md:flex-row z-10 ml-0 lg:ml-[97px]"
            >
              <div className=" w-full h-full">
                <div className="flex h-full w-full pl-6 gap-6 flex-col justify-center bg-item">
                  <div className="text-yellow_light text-md_size_regular lg:text-[20px]">
                    <div>採掘直前の</div>
                    <div>最終資金調達</div>
                  </div>
                  <div className="text-pastel text-sm_text lg:text-[15px]">
                    金鉱山の取得から調査、採掘
                    <br />
                    までの下準備を終えており、
                    <br />
                    最後の準備に必要な最終調達
                    <br />
                    段階です。
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="1200"
                className="w-full h-[400px] md:h-full"
              >
                <div className="h-full w-full relative">
                  <Image
                    alt="bg-left"
                    src={Item1}
                    layout="fill"
                    objectFit="fill"
                    priority
                  />
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className=" w-full md:w-full lg:w-[80%] h-[70%] md:h-full lg:h-full flex flex-col md:flex-row z-10 ml-0 lg:ml-[50px]"
            >
              <div className="w-full h-full">
                <div className="flex h-full w-full pl-6 gap-6 flex-col justify-center bg-item">
                  <div className="text-yellow_light text-md_size_regular lg:text-[20px]">
                    <div>金価格上昇前の</div>
                    <div>絶好の投資機会</div>
                  </div>

                  <div className="text-pastel text-sm_text lg:text-[15px]">
                    世界経済の先行きの不透明さ
                    <br />
                    や、継続するインフレの懸念
                    <br />
                    から金価格が数年ぶりに大き
                    <br />
                    く動き出す前に採掘を開始し
                    <br />
                    ます。
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="w-full h-[400px] md:h-full"
              >
                <div className="h-full w-full relative">
                  <Image
                    alt="bg-left"
                    src={Item2}
                    layout="fill"
                    objectFit="fill"
                    priority
                  />
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className=" w-full md:w-full lg:w-[80%] h-[70%] md:h-full lg:h-full flex flex-col md:flex-row z-10 ml-0"
            >
              <div className="w-full h-full">
                <div className="flex h-full w-full pl-6 gap-6 flex-col justify-center bg-item">
                  <div className="text-yellow_light text-md_size_regular lg:text-[20px]">
                    <div> 金鉱山ビジネスの</div>
                    <div>民主化</div>
                  </div>

                  <div className="text-pastel text-sm_text lg:text-[15px]">
                    一般には出回っていない、高
                    <br />
                    収益金鉱山が数多くありま
                    <br />
                    す。LLCスキームを通じて、
                    <br />
                    長期的に収益を得られる案件
                    <br />
                    を提供します。
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="w-full h-[400px] md:h-full"
              >
                <div className="h-full w-full relative">
                  <Image
                    alt="bg-left"
                    src={Item3}
                    layout="fill"
                    objectFit="fill"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="800"
          className="text-bottom hidden lg:flex items-center justify-end h-[3%] bottom-0 relative z-10 w-full"
        >
          <div className="text-[12px] text-center">
            ディスクレイマー：提示されている投資利益率は仮定のものであり、リターンを保証するものではありません。投資は案件の最終パフォーマンスによって左右されるため、リスクを十分に理解し、自己判断の元で意思決定を行ってください。
          </div>
        </div>
      </div>
    </>
  );
};

export default PaPurposeOfFundraising;
