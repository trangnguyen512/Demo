import React from 'react';
import Image from 'next/image';
// import User2 from './image/user3.png';
// import ScrollAnimation from 'react-animate-on-scroll';
import Model2 from './image/model2.png';

const Page32 = () => {
  return (
    <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative">
      <div className="main-content h-full w-full flex flex-col items-center mt-[6vh] md:mt-[17vh] lg:mt-0">
        <div className="w-full md:w-[95%] h-[40%] md:h-[30%] lg:h-[25%]">
          <div className="p-2 md:p-0">
            <div
              // animateIn="fadeInDown"
              // animateOnce
              // delay={100}
              className="title pl-0 md:pl-5 h-17 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary"
            >
              ジム・ロジャーズ氏の予測
            </div>
            <div className="line h-[2px] w-full md:w-[50%] bg-primary "></div>
            <div
              // animateIn="fadeInLeft"
              className="text-primary text-mobile mt-4 md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-8"
            >
              世界三大投資家と呼ばれるアメリカのジム・ロジャーズ氏は今後「株式」ではなく金や銀など「商品（コモ
              <br />
              ディティ）」の時代が到来すると予測しています。
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col lg:flex-row">
          <div className="w-full h-full flex justify-center items-center bg-white">
            <div className="w-[90%] h-[80%]">
              <div className="md:h-[50vh] lg:h-[460px] lg:w-full md:w-[100%] flex flex-col gap-4">
                <div
                  // animateIn="fadeInRightBig"
                  className="text-secondary-dark font-semibold font-bulter_bold leading-[20px] md:leading-[40px] lg:leading-[35px] xl:leading-[40px] des_size md:text-title lg:text-[18px] xl:text-[24px]"
                >
                  “「株式の時代」が終わり、
                  <br />
                  再び「商品の時代」が到来”
                </div>

                <div
                  // animateIn="fadeInUp"
                  className="text-intro text-primary leading-[20px] md:leading-[35px] lg:leading-[45px] text-mobile md:text-md_size_regular lg:text-[18px] xl:text-[24px] font-medium"
                >
                  これから起こる、景気後退時には、財政刺激と金融緩和が
                  <br />
                  ドルを下落させ、非常に激しいインフレになるだろう。
                </div>

                <div
                  // animateIn="fadeInUp"
                  // delay={300}
                  className="text-intro text-primary leading-[20px] md:leading-[35px] lg:leading-[45px] text-mobile md:text-md_size_regular lg:text-[18px] xl:text-[24px] font-medium"
                >
                  株式と商品の価格変動には逆の相関があって、およそ18年
                  <br />
                  程度のサイクルで両者が入れ替わります。
                </div>

                <div
                  // animateIn="fadeInUp"
                  // delay={300}
                  className="text-intro text-primary leading-[20px] md:leading-[35px] lg:leading-[45px] text-mobile md:text-md_size_regular lg:text-[18px] xl:text-[24px] font-medium"
                >
                  石油も70年代に15倍に上昇、
                  <span className="text-secondary-dark font-semibold font-bulter_bold">
                    ゴールドや銀は30年間で
                  </span>
                  <br />
                  <span className="text-secondary-dark font-semibold font-bulter_bold">
                    20倍以上も上がっています。
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-user_3 w-full h-[500px] md:h-[500px] lg:h-full relative">
            <div className="absolute z-10 bottom-3 left-3 text-intro text-white leading-[23px] lg:leading-[30px] text-mobile md:text-[18px] lg:text-[20px] font-medium">
              世界三大投資家
              <br />
              ジム・ロジャーズ
            </div>
            <div
              // animateIn="fadeInLeftBig"
              // delay={500}
              className="w-1/2 md:w-[30%] lg:w-2/3 h-[45%] md:h-[45%] absolute right-0  bottom-0 lg:right-0 xl:right-[-20px]  xl:bottom-[-1px] z-10"
            >
              <div className="h-full w-full relative">
                <Image
                  alt="bg-left"
                  src={Model2}
                  layout="fill"
                  priority
                  className="object-fill md:object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page32;
