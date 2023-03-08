import React from 'react';
import Image from 'next/image';
import Vector from './image/vector.png';
import Arrow1 from './image/arrows-1.png';
import Arrow2 from './image/arrows-2.png';
import Arrow3 from './image/arrows-3.png';
// import ScrollAnimation from 'react-animate-on-scroll';

const Earnings = () => {
  return (
    <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative">
      <div className="main-content h-full w-full flex flex-col justify-center items-center mt-[15vh] md:mt-0">
        <div className="w-full md:w-[95%] h-[25%] md:h-[20%] p-2">
          <div className="title h-17 ml-0 md:ml-5 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary">
            金価格と予想投資利益率
          </div>
          <div className="border-b-[1.5px] border-[#707070] w-full lg:w-[50%]" />

          <div
            // animateIn="fadeInLeft"
            className="text-size_regular mt-4 md:text-md_size_regular xl:text-lg_size_regular font-medium"
          >
            今後上昇する可能性が示唆されている金価格ですが、
            <br />
            鉱山の金埋蔵量がレポート通りの場合でも、金価格が上昇によって予想投資利益率(4年)は以下の通りとなります。
          </div>
        </div>

        <div className="bg-table flex px-4 pb-2 items-end justify-start md:justify-center w-full h-3/4 relative">
          <div className="wrap-table overflow-x-auto md:overflow-x-visible flex flex-col justify-center items-center h-[95%] w-full gap-1">
            <div className="chart w-full h-[80%] flex items-center justify-start relative ">
              <div className="real-chart w-fit flex items-center justify-center gap-4 lg:gap-6 xl:gap-14 h-full md:w-[90%] relative">
                <div
                  // animateIn="fadeInDown"
                  className="cols-1 min-w-[150px] md:min-w-0 h-full flex items-start justify-start w-1/3 bg-col-1"
                >
                  <div className="head w-full h-[25%] bg-[#272D3C] flex flex-col items-center justify-center">
                    <div className="text-secondary-dark text-lg lg:text-title font-bulter_regular font-semibold">
                      1,800 USD/oz
                    </div>
                    <div className="text-[#DDDDDD] text-base lg:text-md_size_regular">
                      8,254 円/g
                    </div>
                  </div>
                </div>
                <div
                  // animateIn="fadeInDown"
                  //
                  className="cols-2 min-w-[250px] md:min-w-0 h-full flex items-start justify-start w-2/3 bg-col-2"
                >
                  <div className="head w-full h-[25%] bg-[#243336] flex flex-col items-center justify-center">
                    <div className="text-secondary-dark text-lg lg:text-title font-bulter_regular font-semibold">
                      1,800 - 3,000 USD/oz
                    </div>
                    <div className="text-[#DDDDDD] text-base lg:text-md_size_regular">
                      8,254 - 13,757 円/g
                    </div>
                  </div>
                </div>
                <div
                  // animateIn="fadeInDown"
                  className="cols-3 h-full min-w-[250px] md:min-w-0 flex items-start justify-start w-2/3 bg-col-3"
                >
                  <div className="head w-full h-[25%] bg-[#403928] flex flex-col items-center justify-center">
                    <div className="text-secondary-dark text-lg lg:text-title font-bulter_regular font-semibold">
                      3,000 - 4,500 USD/oz
                    </div>
                    <div className="text-[#DDDDDD] text-base lg:text-md_size_regular">
                      8,254 - 13,757 円/g
                    </div>
                  </div>
                </div>
                <div className="line-bottom border-b-[2px] border-solid border-[#505050] absolute bottom-0 left-0 h-1 w-[105%]"></div>
              </div>
              <div className="min-w-[755px] md:min-w-0 overlay-dot flex items-center justify-center gap-1 absolute bottom-0 h-[75%] w-full">
                <div className="dash-dotted flex flex-col bg-slate-500s items-center justify-between  h-[80%] w-[90%] bg-red-500s relative">
                  <div className="trick w-full"></div>
                  <div className="trick w-full"></div>
                  <div className="trick w-full"></div>
                  <div className="trick w-full"></div>
                  <div className="trick w-full"></div>
                  <div className="trick w-full"></div>
                  <div className="trick w-full"></div>
                </div>
                <div
                  // animateIn="fadeIn"
                  //}
                  className="absolute left-0 w-[90%] h-[80%]"
                >
                  <div className="h-full w-full relative">
                    <Image
                      src={Vector}
                      layout="fill"
                      objectFit="fill"
                      alt="line"
                    />
                  </div>
                </div>
                <div className="dash-dotted flex items-center justify-center h-full w-[10%] bg-blue-700s relative">
                  <div className="absolute px-4 w-full flex justify-start -top-[60px] text-primary font-zenkaku text-md_size_regular">
                    <div>
                      金価格 <br />
                      (USD/oz)
                    </div>
                  </div>
                  {/*price right vertical */}
                  <div className="px-4 font-bulter_regular gap-2 text-primary text-lg flex flex-col items-start justify-between  h-[85%] w-full relative ">
                    <div>$4,500</div>
                    <div>$4,000</div>
                    <div>$3,500</div>
                    <div>$3,000</div>
                    <div>$2,500</div>
                    <div>$2,000</div>
                    <div>$1,500</div>
                    <div className="vertical-line absolute w-1 h-[115%] left-0 border-l-[2px] border-solid border-primary  "></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-content flex items-start justify-start  w-full h-[20%]">
              <div className="wrap-box w-fit flex items-center justify-center md:w-[90%] h-full gap-4 lg:gap-6 xl:gap-14">
                <div className="cols-1 min-w-[150px] md:min-w-0 h-full flex items-center justify-center w-1/3">
                  <div className="bg-numb px-2 py-2 flex flex-col justify-center items-center text-center border-color relative">
                    <div className="font-zenkaku text-lg  lg:text-2xl font-medium ">
                      47%
                    </div>
                    <div className="font-bulter_light text-base lg:text-lg">
                      ￥121,759,702
                    </div>
                    {/* arrow */}
                    <div className="absolute -top-14  h-14 w-8 ">
                      <div className="h-full w-full relative">
                        <Image src={Arrow1} objectFit="contain" layout="fill" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cols-2 min-w-[250px] md:min-w-0 h-full flex items-center justify-center w-2/3">
                  <div className="bg-numb px-8 py-2 flex flex-col justify-center items-center text-center border-color relative">
                    <div className="font-zenkaku text-lg  lg:text-2xl font-medium ">
                      最大 ~245%
                    </div>
                    <div className="font-bulter_light text-base lg:text-lg">
                      ~¥673,927,081
                    </div>
                    {/* arrow */}
                    <div className="absolute -top-14  h-14 w-8 ">
                      <div className="h-full w-full relative">
                        <Image src={Arrow2} objectFit="contain" layout="fill" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cols-3 min-w-[250px] md:min-w-0 h-full flex items-center justify-center w-2/3">
                  <div className="bg-numb px-8 py-2 flex flex-col justify-center items-center text-center border-color relative">
                    <div className="font-zenkaku text-lg  lg:text-2xl font-medium ">
                      最大 ~384.83%
                    </div>
                    <div className="font-bulter_light text-base lg:text-lg">
                      ~¥1,00,555,472
                    </div>
                    {/* arrow */}
                    <div className="absolute -top-14  h-14 w-8 ">
                      <div className="h-full w-full relative">
                        <Image src={Arrow3} objectFit="contain" layout="fill" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* absolute unit */}
          <div className="absolute bottom-0 xl:bottom-4 right-6 font-zenkaku text-size_regular xl:text-lg text-primary">
            1USD = 130円にて換算
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
