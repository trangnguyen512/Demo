import React from 'react';
import Image from 'next/image';
import Logo from './image/logo.png';
import House from './image/house.png';

const Page11 = () => {
  return (
    <>
      <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative">
        <div className="main-content h-[97%] w-full flex flex-col md:grid md:grid-flow-row lg:grid-flow-col md:grid-rows-6 lg:grid-rows-none lg:grid-cols-2 gap-2 lg:gap-10">
          <div className="col-left relative items-center justify-center h-[60%] md:h-full md:row-start-1 md:row-end-6 lg:row-span-1 lg:col-span-1 flex flex-col">
            <div className="h-full w-full relative">
              <Image
                alt="bg-left"
                src={House}
                layout="fill"
                priority
                className="object-fill"
              />
            </div>
          </div>
          <div className="col-right p-2 md:p-0 mt-5 md:mt-20 lg:mt-5 h-[20%] md:h-full md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1  flex flex-col items-start justify-start relative">
            <div className=" w-full">
              <div className="title h-17 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary border-b-[1.5px] border-[#707070] w-full lg:w-[85%]">
                Neo Gold Money LLC
              </div>
              <div className="flex flex-col  gap-4 mt-4">
                <div className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium">
                  Neo Gold Moneyは、良質で持続可能な金鉱山プロジェク
                  <br />
                  トを選定し、専門チームがデューデリを行い、
                  <span className="text-secondary-dark font-medium font-bulter_medium">
                    {' '}
                    投資家に
                  </span>
                  <br />
                  <span className="text-secondary-dark font-medium font-bulter_medium">
                    {' '}
                    長期的な利益
                  </span>
                  を提供することで評価を高めることができ
                  <br />
                  る、金鉱山案件へ参画することを目的としています。
                </div>

                <div className="text-mobile text-primary leading-[20px] md:leading-[35px] lg:leading-[35px] text-size_regular md:text-md_size_regular xl:text-lg_size_regular font-medium">
                  ハワイ州ホノルルにオフィスを有し、米国全土を中心と
                  <br />
                  した金鉱事業への投資に焦点を当てています。
                </div>
              </div>
            </div>
            <div className=" w-full h-full mt-10 md:mt-0 ">
              <div className=" w-full h-[40%] lg:h-[20%] flex flex-col justify-center">
                <div className="text-primary font-bulter_medium text-[1.3rem] font-medium">
                  会社概要
                </div>
                <div className="border-b-[1.5px] border-[#B8AB89] w-full lg:w-[85%]" />
              </div>
              <div className="w-full h-[80%] flex flex-col lg:flex-row  gap-4">
                <div className=" w-[25%] md:h-[400px]  lg:h-full md:absolute lg:relative ">
                  <div className="h-full w-full relative bottom-0 lg:bottom-[100px]">
                    <Image
                      alt="bg-left"
                      src={Logo}
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                </div>
                <div className="w-full lg:w-[75%] h-full">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-[10px] w-full lg:w-[450px] h-[65px] lg:h-[50px] bg-[white] relative border-[#707070] border-2 backdrop-blur-[0.5px]">
                      <div className="flex w-[100px] h-[25px] bg-[black] text-[#fff] justify-center">
                        <span className="flex items-center text-size_regular">
                          会社名
                        </span>
                      </div>
                      <div className="flex">
                        <span className="flex justify-center font-bulter_medium items-center text-sm_text md:text-xl_size text-primary font-medium">
                          NEO GOLD MONEY LLC
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-[10px] w-full lg:w-[450px] h-[65px] lg:h-[50px] bg-[white] relative border-[#707070] border-2 backdrop-blur-[0.5px]">
                      <div className="flex w-[100px] h-[25px] bg-[black] text-[#fff] justify-center">
                        <span className="flex items-center text-size_regular">
                          代表{' '}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="flex justify-center font-bulter_medium items-center text-sm_text md:text-[18px] text-primary font-medium">
                          John D. Waihee
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-[10px] w-full lg:w-[450px] h-[65px] lg:h-[50px] bg-[white] relative border-[#707070] border-2 backdrop-blur-[0.5px]">
                      <div className="flex w-[100px] h-[25px] bg-[black] text-[#fff] justify-center">
                        <span className="flex items-center text-size_regular">
                          住所
                        </span>
                      </div>
                      <div className="flex">
                        <span className="flex justify-center items-center font-bulter_medium text-sm_text md:text-[15px] text-primary font-medium">
                          345 Queen Street, Suite 909 Honolulu 96813, Hawaii,
                          USA
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-[10px] w-full lg:w-[450px] h-[65px] lg:h-[50px] bg-[white] relative border-[#707070] border-2 backdrop-blur-[0.5px]">
                      <div className="flex w-[100px] h-[25px] bg-[black] text-[#fff] justify-center">
                        <span className="flex items-center text-size_regular">
                          Email
                        </span>
                      </div>
                      <div className="flex">
                        <span className="flex justify-center items-center font-bulter_medium text-sm_text md:text-xl_size text-primary font-medium">
                          support@neogm.gold
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-[10px] w-full lg:w-[450px] h-[65px] lg:h-[50px] bg-[white] relative border-[#707070] border-2 backdrop-blur-[0.5px]">
                      <div className="flex w-[100px] h-[25px] bg-[black] text-[#fff] justify-center">
                        <span className="flex items-center text-size_regular">
                          Website
                        </span>
                      </div>
                      <div className="flex">
                        <span className="flex justify-center items-center font-bulter_medium text-sm_text md:text-xl_size text-primary font-medium">
                          https://neogm.gold
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page11;
