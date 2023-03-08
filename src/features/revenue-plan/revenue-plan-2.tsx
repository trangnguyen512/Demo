import React from 'react';
import Image from 'next/image';
// import ScrollAnimation from 'react-animate-on-scroll';

const RevenuePlan2 = () => {
  return (
    <div className="min-h-[1500px] md:min-h-[700px] h-[calc(100vh-130px)] w-full relative">
      <div className="main-content h-[95%] w-full flex flex-col xl:grid xl:grid-flow-row lg:grid-flow-col xl:grid-rows-6 lg:grid-rows-none lg:grid-cols-2 gap-2 md:gap-24 lg:gap-10">
        <div className="col-left mt-0 xl:mt-10 h-[70%] md:h-full md:row-start-1 md:row-end-6 lg:row-span-1 lg:col-span-1 flex flex-col items-start justify-start gap-4">
          <div className="content md:min-h-[650px] lg:h-fit p-4 flex flex-col items-start gap-2 justify-start h-full w-full bg-revenue">
            <div
              // animateIn="fadeInRight"
              className="text-left w-full text-base font-bulter_regular md:text-xl lg:text-xl_size text-primary font-semibold"
            >
              金価格及び鉱山埋蔵量から算出する予想投資利益率表（４年間）
            </div>
            <div className="tables min-h-[450px] md:min-h-0 h-full w-full flex items-end justify-center">
              <div className="cols1 min-w-[150px] w-1/3 h-[95%] relative">
                <div className="invisible rows h-1/4  w-full opacity-0 relative z-[-1]"></div>
                <div
                  // animateIn="fadeInLeft"
                  // delay={300}
                  className="rows h-1/4  w-full font-zenkaku flex flex-col items-center justify-center gap-4 px-1 md:px-4 bg-tablet-cols-left"
                >
                  <div className="-mt-4 text-primary text-base md:text-xl font-bold">
                    鉱山埋蔵量 (oz)
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="text-blue_night text-base md:text-xl font-bold">
                      悲観的予想
                    </div>
                    <div className="text-primary text-base md:text-xl font-medium ">
                      55,000 oz
                    </div>
                  </div>
                </div>
                <div
                  // animateIn="fadeInLeft"
                  // delay={600}
                  className="rows relative h-1/4  w-full font-zenkaku flex flex-col md:flex-row items-center justify-center md:justify-between px-1 md:px-4 bg-tablet-cols-left"
                >
                  <div className="text-blue_night text-base md:text-xl font-bold">
                    中間的予想
                  </div>
                  <div className="text-primary text-base md:text-xl font-medium ">
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
                  // animateIn="fadeInLeft"
                  // delay={900}
                  className="rows h-1/4  w-full font-zenkaku flex flex-col md:flex-row items-center justify-center md:justify-between px-1 md:px-4 bg-tablet-cols-left"
                >
                  <div className="text-blue_night text-base md:text-xl font-bold">
                    楽観的予想
                  </div>
                  <div className="text-primary text-base md:text-xl font-medium ">
                    110,000 oz
                  </div>
                </div>
              </div>
              {/* ----------------- */}
              <div className="cols2 relative min-w-[150px] overflow-x-scroll md:overflow-x-hidden w-2/3 flex flex-col h-full ">
                <div className="hidden md:block w-[32%] h-[73%] z-0 top-6 left-[32%] absolute">
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
                      // animateIn="fadeInDown"
                      // delay={200}
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
                      // animateIn="fadeInDown"
                      // delay={400}
                      className="rows h-1/4 flex items-end w-full"
                    >
                      <div className="h-[80%] flex flex-col items-center justify-center w-[90%] text-primary font-bulter_regular text-base md:text-lg box-calculator">
                        <div>47%</div>
                        <div>￥40,795,226</div>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInDown"
                      // delay={600}
                      className="rows h-1/4 flex items-end w-full"
                    >
                      <div className="h-[80%] flex flex-col items-center justify-center w-[90%] text-primary font-bulter_regular text-base md:text-lg box-calculator">
                        <div>87%</div>
                        <div>¥82,155,616</div>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInDown"
                      // delay={800}
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
                      // animateIn="fadeInUp"
                      // delay={200}
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
                      // animateIn="fadeInUp"
                      // delay={400}
                      className="rows h-1/4 flex items-end w-full"
                    >
                      <div className="h-[80%] flex flex-col items-center justify-center w-[90%] text-primary font-bulter_regular text-base md:text-lg  box-calculator">
                        <div>245%</div>
                        <div>¥484,401,675</div>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInUp"
                      // delay={600}
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
                      // animateIn="fadeInUp"
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
                      // animateIn="fadeInDown"
                      // delay={200}
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
                      // animateIn="fadeInDown"
                      // delay={400}
                      className="rows h-1/4 flex items-end w-full"
                    >
                      <div className="h-[80%] flex flex-col items-center justify-center w-[90%] text-primary font-bulter_regular text-base md:text-lg box-calculator">
                        <div>384.83%</div>
                        <div>¥822,890,554</div>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInDown"
                      // delay={600}
                      className="rows h-1/4 flex items-end w-full"
                    >
                      <div className="h-[80%] flex flex-col items-center justify-center w-[90%] text-primary font-bulter_regular text-base md:text-lg box-calculator">
                        <div>674%</div>
                        <div>¥1,469,349,852</div>
                      </div>
                    </div>
                    <div
                      // animateIn="fadeInDown"
                      // delay={800}
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
            <div className="px-0 md:px-5  left-12 flex flex-col items-start justify-between w-full">
              <div
                // animateIn="fadeInRight"
                className="title mt-3 md:mt-0 font-bulter_regular font-extrabold w-[80%] text-xl md:text-[20px] text-primary border-b-[1px] border-secondary-dark"
              >
                目標値の算出条件
              </div>
              <div className="rest mt-3 md:mt-0 px-0 md:px-5 min-w-max max-w-[300px] md:min-w-max">
                <div
                  // animateIn="fadeInRight"
                  // delay={500}
                  className="font-bulter_regular text-mobile  md:text-sm lg:text-[16px]  text-primary font-medium"
                >
                  <li className="list-disc leading-8 max-w-[250px] md:min-w-max">
                    金価格は順調に上昇した数値$1,800 - 3,000程度による推移を想定
                  </li>
                  <li className="list-disc leading-8 max-w-[250px] md:min-w-max">
                    金鉱山埋蔵量は調査レポートにて保守的に推定されている <br />
                    約55,000オンスの1.5倍程度の実埋蔵量を想定
                  </li>
                  <li className="list-disc leading-8 max-w-[250px] md:min-w-max">
                    稼働期間を４−５年と想定
                  </li>
                  <li className="list-disc leading-8 max-w-[250px] md:min-w-max">
                    採掘からインゴット生産まで、1オンス$700-800の生産コストを想定
                  </li>
                  <li className="list-disc leading-8">1USD = 130円にて換算</li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-right p-2 md:p-0 h-[20%] md:h-full md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1 flex flex-col items-start justify-start gap-2 lg:gap-4 relative">
          <div
            // animateIn="slideInDown"
            className="title mt-3 md:mt-0 h-17 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary border-b-[1.5px] border-[#707070] w-full lg:w-[85%]"
          >
            収益プラン
          </div>
          <div
            // animateIn="fadeInLeft"
            className="content w-full font-light"
          >
            <div className="text-mobile md:text-md_size_regular xl:text-[20px] font-medium leading-6 md:leading-10">
              4年間合計で<span className="text-secondary-dark">300%-400%</span>
              を社員権メンバーに還元するこ
              <br className="hidden xl:inline" />
              とを目標としています。
            </div>
          </div>
          <div
            // animateIn="fadeInLeft"
            // delay={300}
            className="text-mobile md:text-md_size_regular xl:text-[20px] 2xl:text-lg_size_regular font-medium leading-6 md:leading-10 "
          >
            2M USD資金調達を2023年3月末日までに完了することで、
            <br />
            McKinley Mineの収益の13%を得る権利を取得し、採掘終了
            <br />
            予定の４年間の利益より投資家の方々へ配当を行います。
          </div>
          <div
            // animateIn="fadeInLeft"
            // delay={600}
            className="text-mobile md:text-md_size_regular xl:text-[20px] 2xl:text-lg_size_regular font-medium leading-6 md:leading-10"
          >
            左記の予想投資利益率表の通り、これらの予測は
            <br />
            <span className="text-secondary-dark">金価格の上昇</span>および
            <span className="text-secondary-dark">実際埋蔵量の増加</span>
            により大きく
            <br />
            変化します。
          </div>
          <div className="min-h-[750px] md:min-h-[400px] lg:min-h-[300px] xl:min-h-[260px] 2xl:min-h-[300px] bottom-section p-3 w-full h-full bg-left-key-indicators">
            <div className="wrap-section h-full w-full">
              <div
                // animateIn="fadeInUp"
                className="text-[20px] font-bulter_regular font-semibold text-primary  leading-6 md:leading-10"
              >
                悲観的（保守的）推定売上高
              </div>
              <div className="section-calculation h-full w-full">
                <div className="h-[45%] md:h-[35%] lg:h-[40%] xl:h-[30%] w-full flex flex-col md:flex-row items-center justify-start lg:justify-center gap-2 lg:gap-6">
                  <div
                    // animateIn="fadeInUp"
                    // delay={300}
                    className="box h-20 w-48 flex flex-col gap-4 text-primary"
                  >
                    <div className="h-[10%] top-text text-base md:text-md_size_regular text-center font-medium font-bulter_medium ">
                      推定総埋蔵量
                    </div>
                    <div className="h-[90%] flex items-center justify-center w-full font-bulter_regular text-base md:text-lg xl:text-[20px] box-calculator">
                      55,063oz
                    </div>
                  </div>
                  <div
                    // animateIn="fadeInUp"
                    // delay={500}
                    className="box-operator flex items-end justify-center h-32 md:h-20 w-24 md:w-12"
                  >
                    <div className="operator h-[55%] w-full relative">
                      <Image
                        src={'/Main/multiplication.png'}
                        layout="fill"
                        objectFit="contain"
                        alt="operator x"
                      />
                    </div>
                  </div>
                  <div
                    // animateIn="fadeInUp"
                    // delay={800}
                    className="box h-20 w-48 flex flex-col gap-4 text-primary"
                  >
                    <div className="h-[10%] top-text text-base md:text-md_size_regular text-center font-medium font-bulter_medium ">
                      金価格
                    </div>
                    <div className="h-[90%] flex items-center justify-center w-full font-bulter_regular text-base md:text-lg lg:text-[20px] box-calculator">
                      1,800USD/oz
                    </div>
                  </div>
                  <div
                    // animateIn="fadeInUp"
                    // delay={1000}
                    className="box-operator flex items-end justify-center h-32 md:h-20 w-24 md:w-12"
                  >
                    <div className="operator h-[55%] w-full relative">
                      <Image
                        src={'/Main/equal.png'}
                        layout="fill"
                        objectFit="contain"
                        alt="operator x"
                      />
                    </div>
                  </div>
                  <div
                    // animateIn="fadeInUp"
                    // delay={1200}
                    className="box h-20 w-48 flex flex-col gap-4 text-primary"
                  >
                    <div className="h-[10%] top-text text-base md:text-md_size_regular text-center font-medium font-bulter_medium ">
                      推定総埋蔵量
                    </div>
                    <div className="h-[80%] flex flex-col items-center justify-center w-[90%] font-bulter_regular text-base lg:text-[18px] box-calculator">
                      <div>99,113,400 USD</div>
                      <div>約127億円</div>
                    </div>
                  </div>
                </div>
                <div className="line my-3 h-[2px] w-full bg-secondary-dark"></div>
                <div className="h-[45%] md:h-[35%] lg:h-[40%] xl:h-[30%] w-full flex flex-col md:flex-row items-center justify-start lg:justify-center gap-2 lg:gap-6">
                  <div className="box visible md:invisible  h-24 w-48 flex flex-col gap-4 text-primary">
                    <div className="h-[10%] top-text text-base md:text-md_size_regular text-center font-medium font-bulter_medium ">
                      推定総埋蔵量
                    </div>
                    <div className="h-[90%] flex items-center justify-center w-full font-bulter_regular text-base md:text-lg lg:text-[20px] box-calculator">
                      55,063oz
                    </div>
                  </div>
                  <div className="box-operator flex items-end justify-center h-32 md:h-20 w-24 md:w-12">
                    <div className="operator h-[55%] w-full relative">
                      <Image
                        src={'/Main/multiplication.png'}
                        layout="fill"
                        objectFit="contain"
                        alt="operator x"
                      />
                    </div>
                  </div>
                  <div className="box h-20 w-48 flex flex-col gap-4 text-primary">
                    <div className="h-[10%] top-text text-base md:text-md_size_regular text-center font-medium font-bulter_medium ">
                      プロジェクト権利
                    </div>
                    <div className="h-[90%] flex items-center justify-center w-full font-bulter_regular text-lg lg:text-[20px]  box-calculator">
                      13%
                    </div>
                  </div>
                  <div className="box-operator flex items-end justify-center h-32 md:h-20 w-24 md:w-12">
                    <div className="operator h-[55%] w-full relative">
                      <Image
                        src={'/Main/equal.png'}
                        layout="fill"
                        objectFit="contain"
                        alt="operator x"
                      />
                    </div>
                  </div>
                  <div className="box h-20 w-48 flex flex-col gap-4 text-primary">
                    <div className="h-[10%] top-text text-base md:text-md_size_regular text-center font-medium font-bulter_medium">
                      推定売上高
                    </div>
                    <div className="h-[80%] flex flex-col items-center justify-center w-[90%] text-secondary-dark font-semibold font-bulter_regular text-base md:text-lg lg:text-[18px] box-calculator border-result-calculator">
                      <div>12,884,742 USD</div>
                      <div>約16億円</div>
                    </div>
                    <div className="-mt-3 text-center font-bulter_regular text-xs md:text-[14px] font-light">
                      *内推定固定費約12億円
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* footer text on mobile */}
          {/* <div className="text-bottom mt-10 md:mt-4 flex xl:hidden items-center justify-end h-[3%] bottom-0 relative z-10 w-full">
            <div className="text-[10px] md:text-[12px] text-center">
              ディスクレイマー：提示されている投資利益率は仮定のものであり、リターンを保証するものではありません。投資は案件の最終パフォーマンスによって左右されるため、リスクを十分に理解し、自己判断の元で意思決定を行ってください。
            </div>
          </div> */}
          {/* end footer text on mobile */}
        </div>
      </div>
      {/* footer text */}
      {/* <div className="text-bottom hidden xl:flex items-end 2xl:items-center justify-end h-[5%] bottom-0 relative z-10 w-full">
        <div className="text-[12px] 2xl:text-[14px] text-center">
          ディスクレイマー：提示されている投資利益率は仮定のものであり、リターンを保証するものではありません。投資は案件の最終パフォーマンスによって左右されるため、リスクを十分に理解し、自己判断の元で意思決定を行ってください。
        </div>
      </div> */}
      {/* end footer text */}
    </div>
  );
};

export default RevenuePlan2;
