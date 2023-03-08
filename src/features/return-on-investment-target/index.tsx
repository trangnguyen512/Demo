import React from 'react';
import Image from 'next/image';
// import ScrollAnimation from 'react-animate-on-scroll';

const ReturnOnInvestmentTarget = () => {
  return (
    <div className="min-h-[1500px] md:min-h-[700px] h-[calc(100vh-130px)] w-full relative">
      <div className="main-content h-[95%] w-full flex flex-col xl:grid xl:grid-flow-row lg:grid-flow-col xl:grid-rows-6 lg:grid-rows-none lg:grid-cols-2 gap-2 md:gap-24 lg:gap-10">
        <div className="col-left mt-0 xl:mt-10 h-[70%] md:h-full md:row-start-1 md:row-end-6 lg:row-span-1 lg:col-span-1 flex flex-col items-start justify-start gap-4">
          <div className="title h-0"></div>
          <div className="content md:min-h-[500px] lg:h-fit p-4 flex flex-col items-start gap-2 justify-start h-full w-full bg-revenue">
            <div
              // animateIn="fadeInDown"
              className="text-left w-full font-bulter_bold text-sm_text md:text-[22px] lg:text-md_size_regular text-primary font-medium"
            >
              金価格及び鉱山埋蔵量から算出する予想投資利益率表（４年間）
            </div>
            <div className="tables min-h-[450px] md:min-h-0 h-full w-full flex items-end justify-center">
              <div className="cols1 min-w-[150px] w-1/3 h-[95%] relative">
                <div className="invisible rows h-1/4  w-full opacity-0 relative z-[-1]"></div>
                <div
                  // animateIn="fadeInDown"
                  className="rows h-1/4  w-full font-bulter_regular flex flex-col items-center justify-center gap-4 px-1 md:px-4 bg-tablet-cols-left"
                >
                  <div className="-mt-4 text-primary text-sm_text md:text-md_size_regular m font-bold">
                    鉱山埋蔵量 (oz)
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="text-blue_night text-sm_text md:text-md_size_regular font-bold">
                      悲観的予想
                    </div>
                    <div className="text-primary text-sm_text md:text-md_size_regular font-medium ">
                      55,000 oz
                    </div>
                  </div>
                </div>
                <div
                  // animateIn="fadeInDown"
                  // delay={200}
                  className="rows relative h-1/4  w-full font-bulter_medium flex flex-col md:flex-row items-center justify-center md:justify-between px-1 md:px-4 bg-tablet-cols-left"
                >
                  <div className="text-blue_night text-sm_text md:text-md_size_regular font-bold">
                    中間的予想
                  </div>
                  <div className="text-primary text-sm_text md:text-md_size_regular font-medium ">
                    82,500 oz
                  </div>
                  <div className="hidden md:block w-[225%] h-[110%] z-0 top-1 left-2 absolute">
                    <Image
                      src={'/Main/bg-horizontal.png'}
                      layout="fill"
                      objectFit="fill"
                      alt="horizontal "
                    />
                  </div>
                </div>
                <div
                  // animateIn="fadeInDown"
                  // delay={400}
                  className="rows h-1/4  w-full font-bulter_regular flex flex-col md:flex-row items-center justify-center md:justify-between px-1 md:px-4 bg-tablet-cols-left"
                >
                  <div className="text-blue_night text-sm_text md:text-md_size_regular font-bold">
                    楽観的予想
                  </div>
                  <div className="text-primary text-sm_text md:text-md_size_regular font-medium ">
                    110,000 oz
                  </div>
                </div>
              </div>
              {/* ----------------- */}
              <div className="cols2 relative min-w-[150px] overflow-x-scroll md:overflow-x-hidden w-2/3 flex flex-col h-full ">
                <div
                  // animateIn="fadeInDown"
                  // delay={200}
                  className="hidden md:block w-[32%] h-[73%] z-0 top-6 left-[32%] absolute"
                >
                  <Image
                    src={'/Main/bg-vertical.png'}
                    layout="fill"
                    objectFit="fill"
                    alt="horizontal "
                  />
                </div>

                <div className="bg-yellow-blur min-w-max w-full text-center h-[5%] font-bulter_medium text-md_size_regular text-primary font-medium">
                  金価格 USD/oz (オンス)
                </div>
                <div className="w-full h-[95%] flex items-center justify-start md:justify-center gap-0">
                  <div className="cols-1 min-w-[150px] h-full w-1/3 flex flex-col items-center justify-center">
                    <div
                      // animateIn="fadeInLeft"
                      className="bg-yellow-blur rows h-1/4 w-full flex flex-col items-center justify-between py-2"
                    >
                      <div className="text-blue_night text-lg font-semibold  ">
                        悲観的予想
                      </div>
                      <div className="text-primary text-base font-medium ">
                        $1,800/oz
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInLeft"
                      // delay={200}
                      className="rows h-1/4 flex items-end w-full"
                    >
                      <div className="h-[80%] flex flex-col items-center justify-center w-[90%] text-primary font-bulter_regular text-base md:text-lg box-calculator">
                        <div>47%</div>
                        <div>￥40,795,226</div>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInLeft"
                      // delay={300}
                      className="rows h-1/4 flex items-end w-full"
                    >
                      <div className="h-[80%] flex flex-col items-center justify-center w-[90%] text-primary font-bulter_regular text-base md:text-lg box-calculator">
                        <div>87%</div>
                        <div>¥82,155,616</div>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInLeft"
                      // delay={400}
                      className="rows h-1/4 flex items-end w-full"
                    >
                      <div className="h-[80%] flex flex-col items-center justify-center w-[90%] text-primary font-bulter_regular text-base md:text-lg box-calculator">
                        <div>127%</div>
                        <div>¥122,467,514</div>
                      </div>
                    </div>
                  </div>
                  <div className="cols-1 min-w-[150px] h-full w-1/3">
                    <div
                      // animateIn="fadeInLeft"
                      // delay={500}
                      className="bg-yellow-blur rows h-1/4 w-full flex flex-col items-center justify-between gap-1 py-2"
                    >
                      <div className="text-blue_night text-base md:text-lg font-semibold">
                        悲観的予想
                      </div>
                      <div className="text-primary flex flex-col text-base items-center justify-center font-medium">
                        <div>$1,800/oz</div>
                        <div className="h-3 flex items-center justify-centerw-full">
                          &#10072;
                        </div>
                        <div>$3,000/oz</div>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInLeft"
                      // delay={600}
                      className="rows h-1/4 flex items-end w-full"
                    >
                      <div className="h-[80%] flex flex-col items-center justify-center w-[90%] text-primary font-bulter_regular text-base md:text-lg  box-calculator">
                        <div>245%</div>
                        <div>¥484,401,675</div>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInLeft"
                      // delay={700}
                      className="rows relative h-1/4 flex items-end w-full"
                    >
                      <div className="h-[80%] py-0 px-1 flex flex-col items-center justify-center w-[90%] text-black font-bulter_regular text-base md:text-lg box-calculator border-result-calculator border-solid border-[2px]">
                        <div className="font-zenkaku text-[12px] font-bold">
                          目標値
                        </div>
                        <div className="text-secondary-dark text-xl text-shadow">
                          454.17%
                        </div>
                        <div className=" text-sm">¥975,514,097</div>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInLeft"
                      // delay={800}
                      className="rows h-1/4 flex items-end w-full"
                    >
                      <div className="h-[80%] flex flex-col items-center justify-center w-[90%] text-primary font-bulter_regular text-base md:text-lg box-calculator">
                        <div>667%</div>
                        <div>¥1,454,176,744</div>
                      </div>
                    </div>
                  </div>
                  <div className="cols-1 min-w-[150px] h-full w-1/3 ">
                    <div
                      // animateIn="fadeInLeft"
                      // delay={900}
                      className="bg-yellow-blur rows h-1/4 w-full flex flex-col items-center justify-between py-2"
                    >
                      <div className="text-blue_night text-lg font-semibold">
                        楽観的予想
                      </div>
                      <div className="text-primary flex flex-col text-base items-center justify-center font-medium ">
                        <div>$1,800/oz</div>
                        <div className="h-3 flex items-center justify-centerw-full">
                          &#10072;
                        </div>
                        <div>$4,500/oz</div>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInLeft"
                      // delay={1000}
                      className="rows h-1/4 flex items-end w-full"
                    >
                      <div className="h-[80%] flex flex-col items-center justify-center w-[90%] text-primary font-bulter_regular text-base md:text-lg box-calculator">
                        <div>384.83%</div>
                        <div>¥822,890,554</div>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInLeft"
                      // delay={1200}
                      className="rows h-1/4 flex items-end w-full"
                    >
                      <div className="h-[80%] flex flex-col items-center justify-center w-[90%] text-primary font-bulter_regular text-base md:text-lg box-calculator">
                        <div>674%</div>
                        <div>¥1,469,349,852</div>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInLeft"
                      // delay={1300}
                      className="rows h-1/4 flex items-end w-full"
                    >
                      <div className="h-[80%] flex flex-col items-center justify-center w-[90%] text-primary font-bulter_regular text-base md:text-lg box-calculator">
                        <div>991%</div>
                        <div>¥2,190,326,506</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-right p-2 h-[20%] md:h-full md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1 flex flex-col items-start justify-start gap-2 lg:gap-4 relative">
          <div
            // animateIn="fadeInDown"s
            className="title h-17 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:text-size_pcmd xl:size_pclg text-primary border-b-[1.5px] border-[#707070] w-full lg:w-[85%]"
          >
            投資利益率目標
          </div>
          <div className="content mt-3 w-full font-light">
            <div
              // animateIn="fadeInUp"
              // delay={200}
              className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
              第一号プロジェクトでは、収益性の高く、埋蔵量が増
              <br />
              える可能性のある金鉱山の採掘を４年間かけて行
              <br />
              う予定です。
            </div>
          </div>

          <div
            // animateIn="fadeInUp"
            // delay={300}
            className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium"
          >
            左記の予想利益表の通り、投資利益率は
          </div>
          <div
            // animateIn="fadeInUp"
            // delay={400}
            className="text-mobile text-secondary-dark font-semibold font-bulter_bold leading-[20px] md:leading-[35px] lg:leading-[30px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular"
          >
            今後の金価格
          </div>
          <div
            // animateIn="fadeInUp"
            // delay={500}
            className="text-mobile text-secondary-dark font-semibold font-bulter_bold leading-[20px] md:leading-[35px] lg:leading-[30px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular"
          >
            実際の金埋蔵量
          </div>
          <div
            // animateIn="fadeInUp"
            // delay={600}
            className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium"
          >
            によって変化します。当事業では300 - 400%の投資利
            <br />
            益率を目標としています。
          </div>

          <div className="top min-h-[100px] lg:min-h-[150px] w-full md:w-[90%] flex flex-col items-start justify-center bg-white bg-neo-gold-money">
            <div className="top h-1/4 text-primary_text font-zenkaku w-max md:w-[80%] px-4 bg-[#00020F] flex items-center justify-start ">
              <div
                // animateIn="fadeInDown"
                className="text-gradient text-[12px] md:text-md_size_regular lg:text-[22px] font-bold tracking-[5px] "
              >
                ４年間目標合計投資利益率
              </div>
            </div>
            <div
              // animateIn="fadeInLeft"
              className="content h-2/4 w-full flex items-center justify-center text-[22px]  md:text-[45px] lg:text-[55px] font-bulter_regular"
            >
              <span className="text-secondary-medium font-bold tracking-[10px] shadow-text-custom">
                300 - 400%
              </span>
            </div>
            <div className="bottom flex items-center justify-center gap-5 h-1/4 w-full">
              <div className="line h-[2px] w-[30%] relative">
                <Image
                  alt="left-line"
                  src={'/Main/line.png'}
                  layout="fill"
                  objectFit="fill"
                  priority
                />
              </div>
              <div className="mount mb-8 h-10 w-20 relative">
                <Image
                  alt="left-line"
                  src={'/Main/three-mount.png'}
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
              <div className="line h-[2px] w-[30%] relative">
                <Image
                  alt="left-line"
                  src={'/Main/line.png'}
                  layout="fill"
                  objectFit="fill"
                  priority
                />
              </div>
            </div>
          </div>
          <div
            // animateIn="fadeInDown"
            className="flex flex-col gap-1"
          >
            <div className="text-xs md:text-des_size font-medium">
              <span className="text-secondary-dark">例：350%の利益率</span>
              を達成した場合、
            </div>
            <div className="text-xs md:text-des_size font-medium leading-6 md:leading-4">
              10口応募<span className="text-secondary-dark">10,000USD</span>
              のケースでは、
            </div>
            <div className="text-xs md:text-des_size font-medium leading-6 md:leading-4">
              4年後に10,000 USD (元本) + 35,000 USDの
              <span className="text-secondary-dark">計45,000 USD</span>
              が手元に残る試算となります。
            </div>
          </div>
          {/* footer text on mobile */}
          <div className="text-bottom mt-10 md:mt-4 flex xl:hidden items-center justify-end h-[3%] bottom-0 relative z-10 w-full">
            <div className="text-[10px] md:text-[12px] text-center">
              ディスクレイマー：提示されている投資利益率は仮定のものであり、リターンを保証するものではありません。投資は案件の最終パフォーマンスによって左右されるため、リスクを十分に理解し、自己判断の元で意思決定を行ってください。
            </div>
          </div>
          {/* end footer text on mobile */}
        </div>
      </div>
      {/* footer text */}
      <div className="text-bottom hidden xl:flex items-end 2xl:items-center justify-end h-[3%] bottom-0 relative z-10 w-full">
        <div className="text-[10px] md:text-[12px] text-center">
          ディスクレイマー：提示されている投資利益率は仮定のものであり、リターンを保証するものではありません。投資は案件の最終パフォーマンスによって左右されるため、リスクを十分に理解し、自己判断の元で意思決定を行ってください。
        </div>
      </div>
      {/* end footer text */}
    </div>
  );
};

export default ReturnOnInvestmentTarget;
