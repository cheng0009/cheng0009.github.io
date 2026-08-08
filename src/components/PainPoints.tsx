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
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="md:sticky md:top-28 md:self-start">
          <Reveal>
            <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-black leading-[1.08] tracking-tight">
              一个人做内容，
              <br />
              困在流水线上游
            </h2>
            <p className="mt-7 max-w-[44ch] text-lg font-medium leading-relaxed">
              知识工作者不缺判断力，缺的是把判断变成成片的工序。
              时间、成本、风格、版权，是四道最常见的坎。
            </p>
          </Reveal>
        </div>

        <RevealStagger className="hairline border-t-2">
          {POINTS.map((p) => (
            <RevealItem key={p.no} className="hairline border-b-2 py-10 md:py-12">
              <div className="grid grid-cols-[3.5rem_1fr] items-baseline gap-x-6 md:grid-cols-[6rem_1fr]">
                <span className="font-display text-3xl font-bold text-blue md:text-5xl">
                  {p.no}
                </span>
                <div>
                  <h3 className="text-2xl font-black tracking-tight md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-[48ch] text-lg font-medium leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
