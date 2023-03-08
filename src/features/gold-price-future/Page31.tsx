import React from 'react';
import Image from 'next/image';
import Model1 from './image/model1.png';
// import ScrollAnimation from 'react-animate-on-scroll';

const Page31 = () => {
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
              ジョン・ポールソン氏の予測
            </div>
            <div className="line h-[2px] w-full md:w-[50%] bg-primary "></div>
            <div
              // animateIn="fadeInLeft"
              className="text-primary text-mobile mt-4 md:text-md_size_regular xl:text-lg_size_regular font-medium leading-6 md:leading-8"
            >
              リーマンショックの年にサブプライムローンの空売りで利益を上げたことで有名なPaulson
              & Coのジョン・
              <br />
              ポールソン氏がBloombergのインタビューで金相場の今後の動向について次のように語っています。
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col lg:flex-row">
          <div className="bg-user w-full h-[500px] md:h-[500px] lg:h-full relative">
            <div className="absolute z-10 bottom-3 left-3 text-intro text-white leading-[23px] lg:leading-[30px] text-mobile md:text-[18px] lg:text-[20px] font-medium">
              金融史上最大の取引に成功
              <br />
              ジョン・ポールソン
            </div>
            <div
              // animateIn="fadeInLeftBig"
              // delay={500}
              className="w-1/2 md:w-[30%] lg:w-2/3 h-[45%] md:h-[45%] absolute right-0  bottom-0 lg:right-0 xl:right-[-20px]  xl:bottom-[-1px] z-10"
            >
              <div className="h-full w-full relative">
                <Image
                  alt="bg-left"
                  src={Model1}
                  layout="fill"
                  priority
                  className="object-fill md:object-contain"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center bg-white">
            <div className="w-[90%] h-[80%]">
              <div className="md:h-[50vh] lg:h-[460px] lg:w-full md:w-[100%] flex flex-col gap-4">
                <div
                  // animateIn="fadeInRightBig"
                  className="text-secondary-dark leading-[20px] md:leading-[40px] lg:leading-[35px] xl:leading-[45px] des_size md:text-title font-semibold lg:text-[18px] xl:text-[26px]"
                >
                  “価格は再上昇へ”
                </div>

                <div
                  // animateIn="fadeInUp"
                  className="text-intro text-primary leading-[20px] md:leading-[35px] lg:leading-[45px] text-mobile md:text-md_size_regular lg:text-[18px] xl:text-[26px] font-medium"
                >
                  “アメリカの実質金利が天井を迎えるときインフレが
                  <br />
                  戻ってくる。その時には、インフレを中央銀行が制御
                  <br />
                  できるとは誰も信じなくなる。その時こそ金価格が上
                  <br />
                  昇する時だ。
                </div>

                <div
                  // animateIn="fadeInUp"
                  // delay={300}
                  className="text-intro text-primary leading-[20px] md:leading-[35px] lg:leading-[40px] text-mobile md:text-md_size_regular lg:text-[18px] xl:text-[26px] font-medium"
                >
                  そして金価格は1970年代の物価高騰時代のような
                  <span className="text-secondary-dark font-semibold font-bulter_bold">
                    指数
                  </span>
                  <br />
                  <span className="text-secondary-dark font-semibold font-bulter_bold">
                    {' '}
                    関数的な上げ相場
                  </span>
                  に入ってゆくだろう。当時、金価
                  <br />
                  格は20倍以上に上昇している。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page31;
