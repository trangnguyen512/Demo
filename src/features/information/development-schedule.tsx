import React from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';

const DevelopmentSchedule = () => {
  return (
    <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative">
      <div className="main-content w-full h-full grid grid-flow-row grid-rows-8 grid-cols-1">
        {/* w-full flex flex-col justify-center items-center */}
        <div className="w-[95%] h-full">
          <div className="title h-17 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary">
            開発スケジュール
          </div>
          <div className="border-b-[1.5px] border-[#707070] w-full lg:w-[50%]" />
          <div className="text-mobile mt-5 md:text-md_size_regular xl:text-lg_size_regular font-medium leading-[30px]">
            2M
            USD資金調達を2023年3月末日までに完了し、2023年前半に採掘準備および継続的調査を実施し、2023年後半
            <br />
            にかけて小規模の採掘を開始します。その後2024年、2025年が採掘のピークとなり、2026年、2027年に規模を縮
            <br />
            小しつつ採掘完了の予定です。ただし採掘量の増加が確認された場合は継続して採掘を行います。
          </div>
        </div>
        <div className="mt-20 min-h-[500px] md:min-h-0 md:mt-0 chart-bottom row-start-3 row-span-full flex overflow-x-auto items-start justify-start md:grid grid-flow-col grid-cols-7 gap-2 xl:gap-6 relative">
          <div
            // animateIn="fadeInLeft"
            className="col-span-1 min-w-[150px] md:min-w-0 h-[100%] flex items-start justify-start bg-black/10 rounded-md"
          >
            <div className="head font-bulter_regular bg-normal min-h-fit py-8  w-full h-8 flex flex-col justify-center items-center">
              <div className="text-md_size_regular text-secondary-dark">
                2023
              </div>
              <div className="text-[15px] lg:text-[22px] font-semibold">
                Q1 - Q2
              </div>
            </div>
          </div>
          <div
            // animateIn="fadeInLeft"
            // delay={300}
            className="col-span-1 min-w-[150px] md:min-w-0 h-[100%] flex items-start justify-start bg-black/5 rounded-md"
          >
            <div className="head font-bulter_regular bg-normal min-h-fit py-8  w-full h-8 flex flex-col justify-center items-center">
              <div className="text-md_size_regular text-secondary-dark">
                2023
              </div>
              <div className="text-[15px] lg:text-[22px] font-semibold">
                Q3 - Q4
              </div>
            </div>
          </div>
          <div
            // animateIn="fadeInLeft"
            // delay={500}
            className="col-span-1 min-w-[150px] md:min-w-0 h-[100%] flex items-start justify-start bg-black/10 rounded-md"
          >
            <div className="head font-bulter_regular bg-normal min-h-fit py-8  w-full h-8 flex flex-col justify-center items-center">
              <div className="text-md_size_regular text-[#FF8A8A]">2024</div>
              <div className="text-[15px] lg:text-[22px] font-semibold">
                Q1 - Q2
              </div>
            </div>
          </div>
          <div
            // animateIn="fadeInLeft"
            // delay={700}
            className="col-span-1 min-w-[150px] md:min-w-0 h-[100%] flex items-start justify-start bg-black/5 rounded-md"
          >
            <div className="head font-bulter_regular bg-normal min-h-fit py-8  w-full h-8 flex flex-col justify-center items-center">
              <div className="text-md_size_regular text-[#FF8A8A]">2024</div>
              <div className="text-[15px] lg:text-[22px] font-semibold">
                Q3 - Q4
              </div>
            </div>
          </div>
          <div
            // animateIn="fadeInLeft"
            // delay={900}
            className="col-span-1 min-w-[150px] md:min-w-0 h-[100%] flex items-start justify-start bg-black/10 rounded-md"
          >
            <div className="head font-bulter_regular bg-normal min-h-fit py-8  w-full h-8 flex flex-col justify-center items-center">
              <div className="text-md_size_regular text-[#2BBA14]">2025</div>
              <div className="text-[15px] lg:text-[22px] font-semibold">
                Q1 - Q2
              </div>
            </div>
          </div>
          <div
            // animateIn="fadeInLeft"
            // delay={1100}
            className="col-span-1 min-w-[150px] md:min-w-0 h-[100%] flex items-start justify-start bg-black/5 rounded-md"
          >
            <div className="head font-bulter_regular bg-normal min-h-fit py-8  w-full h-8 flex flex-col justify-center items-center">
              <div className="text-md_size_regular text-[#2BBA14]">2025</div>
              <div className="text-[15px] lg:text-[22px] font-semibold">
                Q3 - Q4
              </div>
            </div>
          </div>
          <div
            // animateIn="fadeInLeft"
            // delay={1300}
            className="col-span-1 min-w-[150px] md:min-w-0 h-[100%] flex items-start justify-start bg-black/10 rounded-md"
          >
            <div className="head font-bulter_regular bg-normal min-h-fit py-8  w-full h-8 flex flex-col justify-center items-center">
              <div className="text-md_size_regular text-[#6E57FE]">2026</div>
              <div className="text-[15px] lg:text-[22px] font-semibold">
                Q1 - Q2
              </div>
            </div>
          </div>
          {/* absolute */}
          <div
            // animateIn="fadeInDown"
            // delay={2000}
            className="min-w-[1098px] md:min-w-0 absolute flex flex-col gap-2 md:gap-4 lg:gap-2 xl:gap-3 bottom-8 xl:bottom-12 h-[80%] w-full"
          >
            <div className="frame-1 mt-5 text-center font-zenkaku text-primary text-[14px] lg:text-xl font-semibold rounded-xl bg-chart-development-shedule w-fit px-3 py-1">
              資金調達
            </div>
            <div className="frame-2 text-center px-3 py-1 w-[13%] font-zenkaku text-primary text-[14px] lg:text-xl font-semibold rounded-xl bg-chart-development-shedule">
              準備期間
            </div>
            <div className="frame-3 relative left-14   lg:left-28 text-center px-3 py-1 w-[20%] lg:w-[21.5%] font-zenkaku text-primary text-[14px] lg:text-xl font-semibold rounded-xl bg-chart-development-shedule">
              継続的調査
            </div>
            <div className="frame-4 relative left-[22%] text-center px-3 py-1 w-fit font-zenkaku text-primary text-[14px] lg:text-xl font-semibold rounded-xl bg-chart-development-shedule">
              金属試験
            </div>
            <div className="frame-5 relative left-[25%] text-center px-3 py-1 w-[17%] font-zenkaku text-primary text-[14px] lg:text-xl font-semibold rounded-xl bg-chart-development-shedule">
              サンプル試験
            </div>
            <div className="frame-6 relative left-[26%] text-center px-3 py-1 w-[20%] font-zenkaku text-primary text-[14px] lg:text-xl font-semibold rounded-xl bg-chart-development-shedule">
              小規模採掘開始
            </div>
            <div className="frame-7 relative left-[29%] text-center px-3 py-1 w-[20%] font-zenkaku text-primary text-[14px] lg:text-xl font-semibold rounded-xl bg-chart-development-shedule">
              追加施設の設置
            </div>
            <div className="frame-8 relative left-[43.5%] text-center px-3 py-1 w-[56.5%] font-zenkaku text-primary text-[14px] lg:text-xl font-semibold rounded-xl bg-chart-development-shedule">
              フルオペレーション
            </div>
            <div className="frame-9 relative left-[52%] text-center px-3 py-1 w-[48%] font-zenkaku text-primary text-[14px] lg:text-xl font-semibold rounded-xl bg-chart-development-shedule">
              追加採掘調査・規模拡大準備
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSchedule;
