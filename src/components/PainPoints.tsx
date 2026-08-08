import { Reveal, RevealItem, RevealStagger } from "./Reveal";

const POINTS = [
  {
    no: "01",
    title: "时间不够",
    body: "写脚本、找素材、剪视频、想封面，一条内容耗掉半天，产量全靠硬撑。",
  },
  {
    no: "02",
    title: "成本不低",
    body: "外包一条几十上百元，平台抽成后利润所剩无几，试错成本高。",
  },
  {
    no: "03",
    title: "风格漂移",
    body: "换工具、换人、换模板，画面和声音一直在变，IP 立不起来。",
  },
  {
    no: "04",
    title: "版权不清",
    body: "云端工具生成的素材归属模糊，做大了反而成了风险。",
  },
];

export default function PainPoints() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <Reveal className="max-w-[58ch]">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          一个人做内容，困在流水线上游
        </h2>
        <p className="mt-5 text-base leading-relaxed text-stone-600 dark:text-stone-400">
          知识工作者不缺判断力，缺的是把判断变成成片的工序。
          时间、成本、风格、版权，是四道最常见的坎。
        </p>
      </Reveal>

      <RevealStagger className="mt-14 border-t border-stone-900/10 dark:border-white/10">
        {POINTS.map((p) => (
          <RevealItem
            key={p.no}
            className="hairline grid grid-cols-[3rem_1fr] gap-x-6 border-b py-7 md:grid-cols-[4rem_12rem_1fr] md:gap-x-10 md:py-8"
          >
            <span className="font-mono text-sm text-orange-700 dark:text-orange-400">
              {p.no}
            </span>
            <h3 className="text-lg font-medium tracking-tight md:text-xl">
              {p.title}
            </h3>
            <p className="col-start-2 mt-2 max-w-[52ch] text-[15px] leading-relaxed text-stone-600 md:col-start-3 md:mt-0 dark:text-stone-400">
              {p.body}
            </p>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
