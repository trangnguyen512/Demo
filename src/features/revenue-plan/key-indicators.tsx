import React from 'react';
import Image from 'next/image';
// import ScrollAnimation from 'react-animate-on-scroll';

const KeyIndicators = () => {
  return (
    <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative">
      <div className="main-content h-[97%] w-full flex flex-col md:grid md:grid-flow-row lg:grid-flow-col md:grid-rows-6 lg:grid-rows-none lg:grid-cols-2 gap-2 lg:gap-10">
        <div className="col-left h-[60%] md:h-full md:row-start-1 md:row-end-6 lg:row-span-1 lg:col-span-1 flex flex-col items-start justify-start gap-4">
          <div className="title h-0 lg:h-20"></div>
          <div className="content flex items-start justify-center h-full w-full">
            <div className="wrap-content py-4 md:py-6 lg:py-4 h-[80%] w-full lg:-[90%] xl:w-[80%] flex flex-col items-center justify-around gap-10 bg-left-key-indicators ">
              <div className="font-zenkaku px-10 relative">
                <div className="absolute h-24 w-24 md:h-40 md:w-40 z-0 top-0 right-6">
                  <Image
                    src={'/Main/1.png'}
                    objectFit="contain"
                    layout="fill"
                    alt="bg-1"
                    priority
                  />
                </div>

                <div className="relative z-10 title-number flex items-center justify-start gap-6 font-medium text-[25px] md:text-md_title lg:text-lg_title xl:text-xl_title text-primary">
                  <div className="number h-10 w-10 md:h-14 md:w-14 flex items-center justify-center font-bulter_regular bg-black text-white">
                    <div
                      // animateIn="fadeInRightBig"
                      // delay={200}
                      className="text-[25px] md:text-[40px] mt-3"
                    >
                      1
                    </div>
                  </div>
                  <div
                    // animateIn="fadeInRightBig"
                    // delay={400}
                    className="title w-max"
                  >
                    鉱山埋蔵量
                  </div>
                </div>
                <div
                  // animateIn="fadeInRightBig"
                  // delay={600}
                  className="relative z-10 tracking-widest font-thin text-size_regular mt-3 md:text-md_size_regular xl:text-lg_size_regular leading-6 md:leading-8"
                >
                  鉱山埋蔵量が増える事により大きく
                  <br />
                  収益率が向上します。
                </div>
              </div>
              <div className="font-zenkaku px-10 relative">
                <div className="absolute h-24 w-24 md:h-40 md:w-40 z-0 top-0 right-6">
                  <Image
                    src={'/Main/2.png'}
                    objectFit="contain"
                    layout="fill"
                    alt="bg-1"
                    priority
                  />
                </div>
                <div className="relative z-10 title-number flex items-center justify-start gap-6 font-medium text-[25px] md:text-md_title lg:text-lg_title xl:text-xl_title text-primary">
                  <div className="number h-10 w-10 md:h-14 md:w-14 flex items-center justify-center font-bulter_regular bg-black text-white">
                    <div
                      // animateIn="fadeInLeftBig"
                      // delay={200}
                      className="text-[25px] md:text-[40px] mt-3"
                    >
                      2
                    </div>
                  </div>
                  <div
                    // animateIn="fadeInLeftBig"
                    // delay={400}
                    className="title w-max"
                  >
                    金価格
                  </div>
                </div>
                <div
                  // animateIn="fadeInLeftBig"
                  // delay={600}
                  className="relative z-10 text tracking-widest font-thin text-size_regular mt-3 md:text-md_size_regular xl:text-lg_size_regular leading-6 md:leading-8"
                >
                  鉱山埋蔵量が増える事により大きく <br />
                  収益率が向上します。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-right mt-[-30px] md:mt-0 p-2 md:p-0 h-[20%] md:h-full md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1  flex flex-col items-start justify-start gap-2 lg:gap-4 relative">
          <div
            // animateIn="fadeInRight"s
            className="title h-17 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary"
          >
            重要指標
          </div>
          <div className="border-b-[1.5px] border-[#707070] w-full lg:w-[85%]" />

          <div
            // animateIn="fadeInLeft"
            // delay={400}
            className="content w-full font-light"
          >
            <div className="text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10">
              当事業において投資収益率を左右する重要な指標は
              <br />
              <span className="text-secondary-dark">鉱山埋蔵量</span> 及び
              <span className="text-secondary-dark">金価格</span> となります。
            </div>
          </div>
          <div
            // animateIn="fadeInLeft"
            // delay={600}
            className="text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10"
          >
            <span className="text-secondary-dark">鉱山埋蔵量</span>
            に関しては、金鉱山情報の項目で説明した <br />
            通り、最新の調査結果において金鉱化帯が2倍に拡大する <br />
            可能性が高いとの報告があるように、とてもポジティブ
            <br />
            な傾向を示しています。
          </div>
          <div
            // animateIn="fadeInLeft"
            // delay={800}
            className="text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10"
          >
            <span className="text-secondary-dark">金価格</span>
            に関しては、市場価格に見てとれるよう長期的に
            <br />
            は上昇の傾向にある予想が可能です。
          </div>
          <div
            // animateIn="fadeInLeft"
            // delay={1000}
            className="text-mobile pb-16  md:pb-10 lg:pb-0 md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10"
          >
            これらには、不安定な国際情勢、インフレの高止まり予
            <br />
            測、今後進む可能性のあるドル安の進行など複数の要因
            <br />
            が今後金の需要を増加させると考えられます。
          </div>
          {/* footer text on mobile */}
          <div className="text-bottom flex lg:hidden items-center justify-end h-[3%] bottom-0 relative z-10 w-full">
            <div className="text-[10px] md:text-[12px] text-center">
              ディスクレイマー：提示されている投資利益率は仮定のものであり、リターンを保証するものではありません。投資は案件の最終パフォーマンスによって左右されるため、リスクを十分に理解し、自己判断の元で意思決定を行ってください。
            </div>
          </div>
          {/* end footer text on mobile */}
        </div>
      </div>
      {/* footer text */}
      <div className="text-bottom hidden lg:flex items-center justify-end h-[3%] bottom-0 relative z-10 w-full">
        <div className="text-[14px] text-center">
          ディスクレイマー：提示されている投資利益率は仮定のものであり、リターンを保証するものではありません。投資は案件の最終パフォーマンスによって左右されるため、リスクを十分に理解し、自己判断の元で意思決定を行ってください。
        </div>
      </div>
      {/* end footer text */}
    </div>
  );
};
export default KeyIndicators;
