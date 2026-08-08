import { Reveal, RevealItem, RevealStagger } from "./Reveal";

const DIFFS = [
  {
    q: "不是又一个 ChatGPT 提示词",
    a: "提示词给你灵感，但灵感不会自己变成成片。这是一条完整的生产流水线，从选题到发布闭环。",
  },
  {
    q: "不是云端 SaaS",
    a: "模型部署在你自己的电脑上，内容不经过第三方服务器，隐私与断供风险都留在门外。",
  },
  {
    q: "不是代运营",
    a: "系统、方法、数据都是你的。没有月费绑架，没有解约时人财两空。",
  },
  {
    q: "不是批量内容工厂",
    a: "产量上去了，判断仍由你掌控。系统负责工序，你负责「值不值得发」。",
  },
];

export default function Differentiators() {
  return (
    <section className="hairline border-y bg-stone-100/60 dark:bg-stone-900/30">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-32 lg:gap-20">
        <div className="md:sticky md:top-32 md:self-start">
          <Reveal>
            <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight md:text-4xl">
              它不是另一种工具，
              <br />
              是另一套生产方式
            </h2>
            <p className="mt-5 max-w-[40ch] text-base leading-relaxed text-stone-600 dark:text-stone-400">
              单点工具解决「某一步」，生产线解决「每一步之间的衔接」。
            </p>
          </Reveal>
        </div>

        <RevealStagger className="border-t border-stone-900/10 dark:border-white/10">
          {DIFFS.map((d) => (
            <RevealItem
              key={d.q}
              className="hairline border-b py-8 md:py-10"
            >
              <h3 className="text-lg font-medium tracking-tight md:text-xl">
                {d.q}
              </h3>
              <p className="mt-3 max-w-[54ch] text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
                {d.a}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
