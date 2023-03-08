import React from 'react';
import Image from 'next/image';
// import ScrollAnimation from 'react-animate-on-scroll';

const DistributionSchedule = () => {
  return (
    <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative flex justify-center items-center">
      <div className="main-content h-[97%] w-[95%] flex flex-col-reverse  md:grid md:grid-flow-row lg:grid-flow-col md:grid-rows-6 lg:grid-rows-none lg:grid-cols-2 gap-2 lg:gap-10 mt-[20vh] md:mt-0">
        <div className="col-left mt-[20vh] md:mt-0 lg:mt-0  text-primary h-[20%] md:h-full md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1  flex flex-col items-start justify-start gap-2 lg:gap-4 relative">
          <div
            // animateIn="fadeInRight"
            className="title mt-5 md:mt-0 h-17 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary"
          >
            分配スケジュール
          </div>
          <div className="border-b-[1.5px] border-[#707070] w-full lg:w-[85%]" />

          <div
            // animateIn="fadeInLeft"
            // delay={400}s
            className="max-w-[90%] content w-full font-light"
          >
            <div className="text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10">
              １年目は小規模採掘をしながら、継続調査や鉱山開発お
              よび規模拡大に注力するため、収益はプラスにならない 予定です。
            </div>
          </div>
          <div
            // animateIn="fadeInLeft"
            // delay={800}
            className="max-w-[90%] text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10"
          >
            採掘量は２−３年後にピークを迎え、その後徐々に減少 していきます。
            <span className="text-secondary-dark font-semibold font-bulter_bold">
              ２年目の収益により、ほとんどの元本を 回収できる予定
            </span>
            となっており、３年後から純収益となる 予定です。
          </div>
          <div
            // animateIn="fadeInLeft"
            // delay={1200}
            className="max-w-[90%] text-mobile md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10"
          >
            採掘開始後４−５年での採掘完了を想定していますが、
            埋蔵量の増加が確認された場合は、継続して採掘を行い ます。
          </div>
          <div
            // animateIn="fadeInLeft"
            // delay={1400}
            className="max-w-[90%] text-mobile pb-16  md:pb-10 lg:pb-0 md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10"
          >
            収益の分配開始は2024年1月頃を予定しています。また、
            支払い通貨はUSDC或いはUSDT、配当タームは四半期に1
            回を予定しております。
          </div>
          <div className="text-bottom flex lg:hidden items-center justify-end h-[3%] bottom-0 relative z-10 w-full">
            <div className="text-[10px] md:text-[12px] text-center">
              ディスクレイマー：提示されている投資利益率は仮定のものであり、リターンを保証するものではありません。投資は案件の最終パフォーマンスによって左右されるため、リスクを十分に理解し、自己判断の元で意思決定を行ってください。
            </div>
          </div>
        </div>
        <div className="col-right h-[80%] md:h-full md:row-start-1 md:row-end-6 lg:row-span-1 lg:col-span-1 flex flex-col items-start justify-start gap-4">
          <div className="title h-0 lg:h-20"></div>
          <div className="content flex flex-col items-start justify-center h-full w-full">
            <div className="font-bulter_regular text-primary w-full text-left">
              <div
                // animateIn="fadeInDown"
                className="text-[16px] md:text-lg px-8"
              >
                年別収益予想チャート
              </div>
            </div>
            <div className="chart-layout mt-3 flex flex-col gap-10 h-full w-full px-0 md:px-8 py-2 bg-green-700s">
              <div className="chart h-[80%] w-full relative">
                <div className="w-full h-[40%] lg:h-1/5">
                  <div
                    // animateIn="fadeInRightBig"
                    // delay={500}
                    className="text-[14px] md:text-[20px] font-medium text-primary money border-b-[1px] border-secondary-light"
                  >
                    $5,000,000
                  </div>
                  <div className="space flex items-center justify-end h-full w-full">
                    <div className="space h-[80%] w-[80%] bg-black/5"></div>
                  </div>
                </div>
                <div className="w-full h-[40%] lg:h-1/5">
                  <div
                    // animateIn="fadeInRightBig"
                    // delay={800}
                    className="text-[14px] md:text-[20px] font-medium text-primary money border-b-[1px] border-secondary-light"
                  >
                    $4,000,000
                  </div>
                  <div className="space flex items-center justify-end h-full w-full">
                    <div className="space h-[80%] w-[80%] bg-black/10"></div>
                  </div>
                </div>
                <div className="w-full h-[40%] lg:h-1/5">
                  <div
                    // animateIn="fadeInRightBig"
                    // delay={1100}
                    className="text-[14px] md:text-[20px] font-medium text-primary money border-b-[1px] border-secondary-light"
                  >
                    $3,000,000
                  </div>
                  <div className="space flex items-center justify-end h-full w-full">
                    <div className="space h-[80%] w-[80%] bg-black/5"></div>
                  </div>
                </div>
                <div className="w-full h-[40%] lg:h-1/5">
                  <div
                    // animateIn="fadeInRightBig"
                    // delay={1400}
                    className="text-[14px] md:text-[20px] font-medium text-primary money border-b-[1px] border-secondary-light"
                  >
                    $2,000,000
                  </div>
                  <div className="space flex items-center justify-end h-full w-full">
                    <div className="space h-[80%] w-[80%] bg-black/10"></div>
                  </div>
                </div>
                <div className="w-full h-[40%] lg:h-1/5">
                  <div
                    // animateIn="fadeInRightBig"
                    // delay={1700}
                    className="text-[14px] md:text-[20px] font-medium text-primary money border-b-[1px] border-secondary-light"
                  >
                    $1,000,000
                  </div>
                  <div className="space flex items-center justify-end h-full w-full">
                    <div className="space h-[80%] w-[80%] bg-black/5"></div>
                  </div>
                  <div className="mt-[-30px] text-[14px] md:text-[20px] font-medium text-primary money border-b-[1px] border-secondary-light">
                    $0
                  </div>
                </div>
                <div className="absolute flex items-start justify-end bottom-[-130px]  md:-bottom-[25px] h-full w-full">
                  <div className="columns flex items-center justify-center gap-4 w-[80%] relative bottom-0 h-full">
                    <div className="wrap-cols flex items-end justify-center w-1/4 h-full">
                      <div className="cols-1 w-7 md:w-14 h-0 bg-columns"></div>
                    </div>
                    <div className="wrap-cols flex items-end justify-center w-1/4 h-full relative">
                      <div
                        // animateIn="fadeInUp"
                        // delay={500}
                        className="cols-2 w-7 md:w-14 h-[38%] bg-columns border-solid border-2 border-[#000]"
                      ></div>
                      <div
                        // animateIn="fadeInUp"
                        // delay={500}
                        className="polygon-path absolute top-[44%] md:top-[40%] lg:top-[43%] xl:top-[46%] right-0 xl:right-0 2xl:right-8 h-24 w-[150px] md:w-[250px]"
                      >
                        <div className="h-[80%] md:h-full w-full relative ">
                          <Image
                            src={'/Main/polygon-path.png'}
                            layout="fill"
                            objectFit="fill"
                          />
                          <div className="absolute text-xs md:text-[20px] font-semibold font-bulter_regular h-full top-3 md:top-4 px-2 text-white">
                            2 年目 にて元本回収予定
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wrap-cols flex items-end justify-center w-1/4 h-full">
                      <div
                        // animateIn="fadeInUp"
                        // delay={1000}
                        className="cols-3 w-7 md:w-14 h-[85%] bg-columns"
                      ></div>
                    </div>
                    <div className="wrap-cols flex items-end justify-center w-1/4 h-full">
                      <div
                        // animateIn="fadeInUp"
                        // delay={1500}
                        className="cols-4 w-7 md:w-14 h-[45%] bg-columns"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[5%]">
                <div className="space flex items-center justify-end h-full w-full">
                  <div className="space flex gap-2 h-[80%] w-[80%] font-bulter_light font-base text-[16px]">
                    <div className="item w-1/4 h-full flex items-center justify-center">
                      1年目
                    </div>
                    <div className="item w-1/4 h-full flex items-center justify-center">
                      2年目
                    </div>
                    <div className="item w-1/4 h-full flex items-center justify-center">
                      3年目
                    </div>
                    <div className="item w-1/4 h-full flex items-center justify-center">
                      4年目
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-bottom hidden lg:flex items-center justify-end h-[3%] bottom-0 relative z-10 w-full">
        <div className="text-[14px] text-center">
          ディスクレイマー：提示されている投資利益率は仮定のものであり、リターンを保証するものではありません。投資は案件の最終パフォーマンスによって左右されるため、リスクを十分に理解し、自己判断の元で意思決定を行ってください。
        </div>
      </div> */}
    </div>
  );
};
export default DistributionSchedule;
