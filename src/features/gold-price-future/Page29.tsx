import React from 'react';
import Image from 'next/image';
import Chart from './image/tablechart.png';
// import ScrollAnimation from 'react-animate-on-scroll';

const Page29 = () => {
  return (
    <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative">
      <div className="main-content h-[90%] w-full flex flex-col md:grid md:grid-flow-row lg:grid-flow-col md:grid-rows-6 lg:grid-rows-none lg:grid-cols-2 gap-2 lg:gap-10">
        <div className="col-left relative items-center justify-center mt-10 h-[60%] md:h-full md:row-start-1 md:row-end-6 lg:row-span-1 lg:col-span-1 flex flex-col">
          <div
            // animateIn="fadeInLeft"
            className="w-full h-full bg-custom"
          >
            <div className="h-full w-full relative">
              <Image
                alt="bg-left"
                src={Chart}
                layout="fill"
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="col-right p-2 md:p-0 mt-5 md:mt-20 lg:mt-0 h-[20%] md:h-full md:row-start-6 md:row-end-7 lg:row-span-1 lg:col-span-1  flex flex-col items-start justify-start gap-2 lg:gap-4 relative">
          <div
            // animateIn="fadeInDown"
            className="title h-17 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary border-b-[1.5px] border-[#707070] w-full lg:w-[85%]"
          >
            金価格の今後
          </div>
          <div className="flex flex-col  gap-4 mt-4">
            <div
              // animateIn="fadeInDown"
              className="text-primary leading-[20px] md:leading-[25px] lg:leading-[35px] xl:leading-[38px] text-mobile md:text-md_size_regular lg:text-lg_size_regular xl:text-xl_size font-medium"
            >
              2023年1月現在、金の価格は長期的にも短期的にも上昇傾向
              <br />
              にあります。一般的に、金相場上昇の要因には以下の６つ
              <br />
              が挙げられると言われています。
            </div>

            <div
              // animateIn="fadeInDown"
              className="text-[#4160AE] ml-[30px] leading-[20px] md:leading-[25px] lg:leading-[35px] xl:leading-[38px] text-mobile md:text-md_size_regular lg:text-lg_size_regular xl:text-xl_size font-semibold"
            >
              <div>
                <span className="text-primary font-bulter_medium">１、</span>
                供給量に対して需要増加
              </div>
              <div>
                <span className="text-primary font-bulter_medium">２、</span>
                ドル安
              </div>
              <div>
                <span className="text-primary font-bulter_medium"> ３、</span>
                地政学リスクが高まる
              </div>
              <div>
                <span className="text-primary font-bulter_medium"> ４、</span>
                インフレ懸念
              </div>
              <div>
                <span className="text-primary font-bulter_medium"> ５、</span>
                各国の中央銀行が金の購入
              </div>
              <div>
                <span className="text-primary font-bulter_medium"> ６、</span>
                世界的な低金利
              </div>
            </div>

            <div
              // animateIn="fadeInDown"
              // animateOnce
              // delay={500}
              className="text-primary leading-[20px] md:leading-[25px] lg:leading-[35px] xl:leading-[38px] text-mobile md:text-md_size_regular lg:text-lg_size_regular xl:text-xl_size font-medium"
            >
              現在の世界情勢を踏まえると、これら
              <span className="text-secondary-dark font-medium font-bulter_medium">
                金相場上昇の全
              </span>
              <br />
              <span className="text-secondary-dark font-medium font-bulter_medium">
                ての要因が満たされる可能性
              </span>
              が高いといえます。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page29;
