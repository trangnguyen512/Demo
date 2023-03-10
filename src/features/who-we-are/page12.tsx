import React from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';

const JohnDavid = () => {
  return (
    <>
      {/* Page 12 */}
      <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative">
        <div className="bg-john main-content w-full h-full flex-col flex md:flex-col lg:flex-row">
          <div className=" md:w-full lg:w-[40%] h-full"></div>
          <div className="w-full md:w-full lg:w-[60%] h-full md:p-3">
            <div className=" w-full h-[40%] flex justify-end items-center p-0 lg:p-10">
              <div className="w-full md:w-[50%] h-full flex justify-start md:items-start lg:items-end ">
                <div className="w-full">
                  <div
                    // animateIn="lightSpeedIn"
                    className="text-white text-[1.5rem] font-normal font-bulter_regular"
                  >
                    CEO
                  </div>
                  <div
                    // animateIn="lightSpeedIn"
                    // delay={300}
                    className="text-white text-[25px] md:text-[35px] lg:text-md_title font-medium font-bulter_regular"
                  >
                    John D. Waihee III
                  </div>
                  <div
                    // animateIn="lightSpeedIn"
                    // delay={500}
                    className="text-end text-white text-xl_size font-medium font-bulter_regular"
                  >
                    Former Hawaii Governor
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[60%] flex justify-end items-end p-0 lg:p-10">
              <div className="bg-[#fff] w-auto lg:w-full h-auto shadow-[10px_10px_0_#C0B493] px-6 py-[1rem] texts bg-white/50 shadow-mckinley text-size_regular md:text-base  xl:text-[18px] leading-6  xl:leading-10">
                <div
                  // animateIn="slideInDown"
                  className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-[12px] md:text-md_size_regular xl:text-lg_size_regular font-medium"
                >
                  John David Waihe III ( ???????????????????????????????????????
                  <br />
                  ???3???) ???????????????????????????????????????????????????
                  <span className="font-medium font-bulter_bold">1986??????</span>
                  <br />
                  <span className="font-medium font-bulter_bold">
                    ???1994???????????????????????????4??????????????????????????????
                  </span>
                </div>
                <div
                  // animateIn="slideInDown"
                  // delay={300}
                  className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-[12px] md:text-md_size_regular xl:text-lg_size_regular font-medium"
                >
                  ??????????????????????????????
                  <span className="font-semibold">
                    {' '}
                    ??????????????????????????????????????????
                  </span>
                  <br />
                  <span className="font-semibold"> ?????????????????????????????????</span>
                  ???????????????????????????????????????
                  <br />
                  ????????????????????????????????????????????????????????????????????????
                  <br />
                  ?????????????????????????????????????????????
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{/* <JohnDavid2 /> */}</div>
    </>
  );
};

export default JohnDavid;
