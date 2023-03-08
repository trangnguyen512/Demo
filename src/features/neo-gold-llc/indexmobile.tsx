import React from 'react';
import Image from 'next/image';

const NeoGoldLLCMobile = () => {
  return (
    <div className="min-h-[700px] h-[calc(100vh-150px)] w-full relative">
      <div className="main-content h-[97%] w-full flex flex-col-reverse md:grid md:grid-flow-row lg:grid-flow-col md:grid-rows-6 lg:grid-rows-none lg:grid-cols-2 gap-2 lg:gap-10">
        <div className="col-left mt-[30vh] h-[60%] md:h-full md:row-start-1 md:row-end-6 lg:row-span-1 lg:col-span-1 flex flex-col items-start justify-start gap-4">
          <div className="title h-0 lg:h-12"></div>
          <div className="content flex flex-col gap-8 h-full w-full">
            <div className="top h-[22%] w-full flex flex-col items-start justify-center bg-white bg-neo-gold-money">
              <div className="top h-1/4 text-primary_text  font-zenkaku w-[80%] px-4 bg-[#00020F] flex items-center justify-start ">
                <div className="text-gradient text-[10px] md:text-md_size_regular  lg:text-[22px] font-bold tracking-[5px] ">
                  ４年間目標合計投資利益率
                </div>
              </div>
              <div className="content h-2/4 w-full flex items-center justify-center text-[22px]  md:text-[45px] lg:text-[55px] font-bulter_regular">
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
            <div className="bottom h-[65%] w-full relative z-10 bg-shadow-custom">
              <div className="text pt-4 px-4 font-medium text-[10px] md:text-md_size_regular">
                有限責任社員権の募集
              </div>
              <div className="h-[100%] w-[90%]">
                <Image
                  alt="Logo"
                  src={'/Main/neo-gold-group.png'}
                  layout="fill"
                  objectFit="fill"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-right h-[20%] md:h-full md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1  flex flex-col items-start justify-start relative">
          <div className="title h-17 font-bulter_bold font-medium text-[25px] text-primary border-b-[1.5px] border-[#707070] w-full lg:w-[85%]">
            Neo Gold MoneyLLC 社員権
          </div>
          <div className="flex flex-col gap-4 mt-7">
            <div className="flex flex-col  gap-4 2xl:gap-7 mt-0">
              <div className="text-intro text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium">
                Neo Gold Money LLCは、米国ネバダ州に設立された <br />
                合同会社でハワイにオフィスを有し、
                <br />
                <span className="text-secondary-dark font-semibold font-bulter_bold">
                  金採掘・生産の収益分配を目的
                </span>
                としています。
              </div>
            </div>
            <div className="text-intro text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium">
              Neo Gold Money LLCでは金鉱山採掘事業に向けた資金 <br />
              調達を社員権募集という形態で行います。
            </div>

            <div className="text-intro text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium">
              <span className="font-semibold text-primary font-bulter_medium">
                {' '}
                社員権は1口あたり1,300USD＋事務手数料にて応募可{' '}
              </span>
              <br />
              <span className="font-medium text-primary font-bulter_medium">
                {' '}
                能
              </span>
              となっており、2024年からの配当開始を予定しています。
            </div>

            <div className="text-intro text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium">
              社員権は出資金以上の責任を負わない有限責任社員権 <br />
              であり、保有者は保有分に応じた収益の受取権と議決
              <br />
              権を有します。
            </div>
            <br />
          </div>
        </div>
      </div>
      <div className="text-bottom hidden lg:flex items-center justify-end h-[3%] bottom-0 relative z-10 w-full">
        <div className="text-[12px] text-center">
          ディスクレイマー：提示されている投資利益率は仮定のものであり、リターンを保証するものではありません。投資は案件の最終パフォーマンスによって左右されるため、リスクを十分に理解し、自己判断の元で意思決定を行ってください。
        </div>
      </div>
    </div>
  );
};

export default NeoGoldLLCMobile;
