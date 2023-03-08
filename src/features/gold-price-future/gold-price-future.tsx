import React from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';

const GoldPriceFuture = () => {
  return (
    <>
      <div>
        {/* PC */}

        <div className="bg-page28 hidden md:block lg:block h-[calc(100vh-130px)] w-full overflow-hidden">
          <div className="relative">
            <div className="flex flex-col items-center h-[100vh]">
              <div className="flex flex-col justify-center items-center h-[80vh]">
                <div
                  // animateIn="fadeInUp"
                  className="cursor-pointer tracking-[15px]"
                >
                  <span className=" text-[#CD9E47] text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                    金価格
                  </span>
                  <span className="text-[#474747] text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                    の今後
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE */}
        <div className="bg-page28 block md:hidden lg:hidden h-[calc(100vh-150px)] w-full overflow-hidden">
          <div className="relative">
            <div className="flex flex-col items-center h-[100vh]">
              <div className="flex flex-col justify-center items-center h-[75vh]">
                <div
                  // animateIn="fadeInUp"
                  className="cursor-pointer tracking-[15px]"
                >
                  <span className=" text-[#CD9E47] text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                    金価格
                  </span>
                  <span className="text-[#474747] text-[35px] md:text-[45px]  lg:text-lg_title font-medium font-bulter_bold  tracking-[5px]">
                    の今後
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer text */}
        <div className="text-bottom hidden lg:flex items-center justify-end h-[3%] bottom-0 relative z-10 w-full">
          <div className="text-[12px] text-center">
            ディスクレイマー：提示されている投資利益率は仮定のものであり、リターンを保証するものではありません。投資は案件の最終パフォーマンスによって左右されるため、リスクを十分に理解し、自己判断の元で意思決定を行ってください。
          </div>
        </div>
        {/* end footer text */}
      </div>
    </>
  );
};

export default GoldPriceFuture;
