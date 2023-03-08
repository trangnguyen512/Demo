import React from 'react';
import Image from 'next/image';
import Paper1 from './image/paper1.png';
import Paper2 from './image/paper2.png';
// import ScrollAnimation from 'react-animate-on-scroll';

const Page34 = () => {
  return (
    <>
      <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative">
        <div className="main-content w-full h-full flex flex-col justify-center items-center mt-[15vh] md:mt-0">
          <div className="w-full md:w-[95%] h-[20%] p-2 md:p-0">
            <div
              // animateIn="slideInDown"
              className="title h-17 ml-0 md:ml-5 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary"
            >
              参考文献
            </div>
            <div className="border-b-[1.5px] border-[#707070] w-full lg:w-[50%]" />

            <div
              // animateIn="fadeInLeft"
              className="text-mobile mt-4 md:text-md_size_regular xl:text-lg_size_regular font-medium"
            >
              近年、金価格の上昇を報じるニュースが増えています。
            </div>
          </div>

          <div className="w-[95%] h-full md:h-[70%] flex flex-col lg:flex-row gap-4">
            <div className="border-custom w-full h-full flex flex-col md:flex-row lg:flex-row">
              <div className="w-full lg:w-[52%] h-full">
                <div
                  // animateIn="slideInLeft"
                  // delay={600}
                  className="h-[300px] md:h-full w-full relative"
                >
                  <Image
                    alt="bg-left"
                    src={Paper1}
                    layout="fill"
                    priority
                    className="object-fill"
                  />
                </div>
              </div>
              <div className="w-full lg:w-[48%] h-full ">
                <div className="w-full lg:h-[90%] xl:h-full flex items-center">
                  <div
                    // animateIn="slideInLeft"
                    // delay={300}
                    className="text-paper mt-5 md:mt-0 ml-[20px] text-[18px] md:text-[20px] lg:leading-6 xl:leading-[30px] lg:text-[13px] xl:text-[17px] text-primary font-medium"
                  >
                    <div>
                      <a
                        className="text-[black] font-semibold border-b-[1.5px] border-[#8F8F8F]"
                        target="_blank"
                        href="https://www.amazon.co.jp/%E8%B6%85%E3%82%AB%E3%83%AA%E3%82%B9%E3%83%9E%E6%8A%95%E8%B3%87%E7%B3%BBYouTuber%E3%81%8C%E6%95%99%E3%81%88%E3%82%8B-%E3%82%B4%E3%83%BC%E3%83%AB%E3%83%89%E6%8A%95%E8%B3%87%E2%80%95%E2%80%95%E3%83%AA%E3%82%B9%E3%82%AF%E3%82%92%E5%86%92%E3%81%95%E3%81%9A%E3%81%8A%E9%87%91%E3%82%82%E3%81%A1%E3%81%AB%E3%81%AA%E3%82%8C%E3%82%8B%E6%96%B9%E6%B3%95-%E9%AB%98%E6%A9%8B%E3%83%80%E3%83%B3-ebook/dp/B08PBM7P98/ref=sr_1_2?qid=1675095256&s=books&sr=1-2"
                        rel="noreferrer"
                      >
                        超カリスマ投資系YouTuberが教
                        <br />
                        える ゴールド投資――リスク
                        <br />
                        を冒さずお金もちになれる方法
                      </a>
                    </div>
                    <div className="text-[#8F8F8F] text-start">高橋ダン</div>
                    <div>
                      来るべき世界不況で「銀行預金」
                      <br />
                      「株」「投信」「仮想通貨」すべ
                      <br />
                      ての資産が危ないと述べていま
                      <br />
                      す。
                    </div>
                    <div>
                      その中で、暴落に強く「有事の金
                      <br />
                      買い」と呼ばれることもある
                      <br />
                      「ゴールド」に注目をし、世界の
                      <br />
                      富裕層が注目するいまが投資の
                      <br />
                      チャンスであると述べます。
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-custom w-full h-full flex flex-col md:flex-row lg:flex-row">
              <div className=" w-full lg:w-[52%] h-full">
                <div
                  // animateIn="slideInRight"
                  // delay={600}
                  className="h-[300px] md:h-full w-full relative"
                >
                  <Image
                    alt="bg-left"
                    src={Paper2}
                    layout="fill"
                    priority
                    className="object-fill"
                  />
                </div>
              </div>
              <div className=" w-full lg:w-[48%] h-full ">
                <div className="w-full lg:h-[90%] xl:h-full flex items-center">
                  <div
                    // animateIn="slideInRight"
                    // delay={300}
                    className="text-paper mt-5 md:mt-0 ml-[20px] text-[18px] md:text-[20px] lg:leading-6 xl:leading-[30px] lg:text-[13px] xl:text-[17px] text-primary font-medium"
                  >
                    <div>
                      <a
                        className="text-[black] text-[18px] font-semibold border-b-[1.5px] tracking-[5px] border-[#8F8F8F]"
                        target="_blank"
                        href="https://www.amazon.co.jp/%E9%87%91%E4%BE%A1%E6%A0%BC%E3%81%AF6%E5%80%8D%E3%81%AB%E3%81%AA%E3%82%8B-%E3%81%84%E3%81%BE%E3%81%99%E3%81%90%E9%87%91%E3%82%92%E8%B2%B7%E3%81%84%E3%81%AA%E3%81%95%E3%81%84-%E3%82%B8%E3%82%A7%E3%83%BC%E3%83%A0%E3%82%BA%E3%83%BB%E3%83%AA%E3%82%AB%E3%83%BC%E3%82%BA/dp/4023315621/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1O5C49L5KH1TF&keywords=%E9%87%91+%E3%81%84%E3%81%BE%E3%81%99%E3%81%90&qid=1675095635&s=books&sprefix=%E9%87%91+%E3%81%84%E3%81%BE%E3%81%99%E3%81%90%2Cstripbooks%2C350&sr=1-1"
                        rel="noreferrer"
                      >
                        いますぐ金を買いなさい
                      </a>
                    </div>
                    <div className="text-[#8F8F8F] text-start">
                      {' '}
                      ジェームズ・リカーズ
                    </div>
                    <div>
                      アメリカ主権のドル基軸の体制が
                      <br />
                      終焉し、部分的な金本位制が戻っ
                      <br />
                      てくると予想しています。金の価
                      <br />
                      格はアメリカ、ユーロ圏、中国の
                      <br />
                      マネーサプラ イM1（現金通貨＋銀
                      <br />
                      行を除く預金通貨）が40％の金で
                      <br />
                      裏づけとする金本位制で同意され
                      <br />
                      るなら､通貨と金の適切な比率から
                      <br />
                      金価格は1オンス1万ドルが導き出
                      <br />
                      されます。
                    </div>
                    <div>
                      この分析から、著者は「金価格は6
                      <br />
                      倍になる」と述べてます。
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

export default Page34;
