import React from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';

const FinalPageMobile = () => {
  return (
    <div className="min-h-[700px] h-[calc(100vh-130px)] w-full relative">
      <div className="main-content h-full w-full flex flex-col justify-center items-center md:mt-0">
        <div className="w-full md:w-[95%] h-[10%] p-2 md:p-0">
          <div className="title h-17 ml-0 md:ml-5 font-bulter_bold font-medium text-[22px] md:text-size_pcmd lg:size_pclg text-primary">
            ディスクレイマー
          </div>
          <div className="border-b-[1.5px] border-[#707070] w-full lg:w-[50%]" />
        </div>

        <div className="w-[95%]">
          <div className="text-size_regular md:text-md_size_regular xl:text-[18px] font-medium leading-6 md:leading-10">
            本資料は極秘情報として提供されるものであり、配布することはできません。
            <br />
            この文書は、米国における証券の売付け又は買付けの勧誘を構成するものではありません。
            <br />
            この文書は、米国における証券の募集または販売を構成するものではありません。
            <br />
            この文書を受領した時点で、また法律で認められている国や地域で、重要な情報（投資目的、方針、リスク要因、手数料、関連する資格など）が記載された機密私募メモを、法律で認められている国・地域でのみ提供します。
            <br />
            本書は、一般に公表することを目的としたものではありません。
            <br />
            本書で作成されたすべての情報は正確であると思われますが、NEO GOLD
            MONEY LLC（以下「NEO
            GOLD」)は、その完全性または正確性に関して、いかなる明示的な保証も行いません。また、本資料に掲載された情報の誤りに関して、一切の責任を負いません。
            過去の実績は、将来の業績を保証するものではありません。実際の結果は、本書または本書で開発されたモデルが意図または予測したものと異なる場合があります。
            <br />
            ここに記載された投資戦略にはリスクがあり、その結果損失が発生する可能性があります。
            NEO
            GOLDの戦略への投資は、高度なリスクを伴い、そのパフォーマンスは大きく変動する可能性があり、また流動性が限定的または皆無である可能性があります。
            <br />
            市場、経済情勢またはその他のリスク要因が市場や経済状況、その他のリスク要因により、投資戦略のパフォーマンスに重大な影響を与える可能性があります。
            <br />
            当社は競争的な事業を営んでおり競合他社の中には、多大な経営資源と柔軟性を有し、当社と効果的に競争することを可能にしている企業があります。
            <br />
            取引構造、政治的・経済的不安定性、インフレおよびインフレ抑制のための政府施策の負担を負う可能性があります。また、インフレ抑制のための政府の施策
            <br />
            も、当社の業績に悪影響を及ぼす可能性があります。
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPageMobile;
