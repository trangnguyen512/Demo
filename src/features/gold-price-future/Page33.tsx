import React from 'react';
import Image from 'next/image';
import Item1 from './image/pth3.png';
import Item2 from './image/pth2.png';
import Item3 from './image/pth1.png';
// import ScrollAnimation from 'react-animate-on-scroll';

const Page33 = () => {
  return (
    <>
      <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative">
        <div className="main-content w-full h-full flex flex-col justify-center items-center mt-[15vh] md:mt-0">
          <div className="title p-2 md:p-0 w-full md:w-[95%] h-[20%]">
            <div
              // animateIn="fadeInDown"
              // animateOnce
              // delay={100}
              className="title pl-0 md:pl-5 h-17 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary"
            >
              直近の金関連ニュース
            </div>
            <div className="line h-[2px] w-[75%] md:w-[50%] bg-primary "></div>
            <div
              // animateIn="fadeInLeft"
              className="text-mobile mt-4 md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-10"
            >
              近年、金価格の上昇を報じるニュースが増えています。
            </div>
          </div>
          <div className="flex w-full h-3/4 relative justify-center items-center">
            <div className="w-full lg:w-[60%] h-full flex flex-col gap-2">
              <div
                // animateIn="fadeInUpBig"
                className="border-custom w-full h-full flex gap-3"
              >
                <div className="w-1/2 lg:w-[20%] h-full">
                  <div className="h-full w-full relative">
                    <Image
                      alt="bg-left"
                      src={Item1}
                      layout="fill"
                      objectFit="fill"
                      priority
                    />
                  </div>
                </div>
                <div className="w-[80%] h-full flex flex-col justify-center">
                  <div className="w-full lg:w-[90%] h-[70%]">
                    <div className="text-[#8F8F8F] font-bulter_regular text-[16px] font-medium mb-3">
                      16 Jan, 2023 | ロイター
                    </div>
                    <a
                      className="border-b-[1px] border-[#707070] w-full lg:w-[85%] text-[15px] md:text-[22px]"
                      href="https://jp.reuters.com/article/gold-price-idJPL6N3410A1"
                    >
                      <span className="text-[#2F2F2F] font-bulter_regular">
                        金価格、今年は
                      </span>
                      <span className="text-secondary-dark font-semibold font-bulter_bold">
                        最高値に向け上昇
                      </span>
                      <span className="text-[#2F2F2F] font-bulter_regular">
                        へ
                      </span>
                      <br />
                      <span className="text-[#2F2F2F] font-bulter_regular">
                        米利上げ打ち止めが視野
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div
                // animateIn="fadeInUpBig"
                // delay={300}
                className="border-custom w-full h-full flex gap-3"
              >
                <div className="w-1/2 lg:w-[20%] h-full">
                  <div className="h-full w-full relative">
                    <Image
                      alt="bg-left"
                      src={Item2}
                      layout="fill"
                      objectFit="fill"
                      priority
                    />
                  </div>
                </div>
                <div className="w-[80%] h-full flex flex-col justify-center">
                  <div className="w-full lg:w-[90%] h-[70%]">
                    <div className="text-[#8F8F8F] font-bulter_regular text-[16px] font-medium mb-3">
                      12 Jan, 2023 | Kitco News
                    </div>
                    <a
                      className="border-b-[1px] border-[#707070] w-full lg:w-[85%] text-[15px] md:text-[22px]"
                      href="https://www.kitco.com/news/2023-01-12/Russians-buy-record-amount-of-gold-bullion-in-2022.html"
                    >
                      <span className="text-[#2F2F2F] font-bulter_regular">
                        ロシア人、2022年に
                      </span>
                      <span className="text-secondary-dark font-semibold font-bulter_bold">
                        過去最高額
                      </span>
                      <span className="text-[#2F2F2F] font-bulter_regular">
                        の金地金を購入
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div
                // animateIn="fadeInUpBig"
                // delay={600}
                className="border-custom w-full h-full flex gap-3"
              >
                <div className="w-1/2 lg:w-[20%] h-full">
                  <div className="h-full w-full relative">
                    <Image
                      alt="bg-left"
                      src={Item3}
                      layout="fill"
                      objectFit="fill"
                      priority
                    />
                  </div>
                </div>
                <div className="w-[80%] h-full flex flex-col justify-center">
                  <div className="w-full lg:w-[60%] h-[70%]">
                    <div className="text-[#8F8F8F] font-bulter_regular text-[16px] font-medium mb-3">
                      24 Jan, 2023 | J-CAST
                    </div>
                    <a
                      className="border-b-[1px] border-[#707070] w-full lg:w-[85%]  text-[15px] md:text-[22px]"
                      href="https://www.j-cast.com/kaisha/2023/01/24454723.html?p=all"
                    >
                      <span className="text-[#2F2F2F] font-bulter_regular">
                        値上がり続く金価格...9か月ぶり、
                      </span>
                      <span className="text-secondary-dark font-semibold font-bulter_bold">
                        最高値に迫る
                      </span>
                      <span className="text-[#2F2F2F] font-bulter_regular font-semibold">
                        8957
                      </span>
                      <br />
                      <span className="text-[#2F2F2F] font-bulter_regular ">
                        円 高騰の原因をおさらい
                      </span>
                    </a>
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

export default Page33;
