import { X } from "@phosphor-icons/react";
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
    <section className="hairline border-y-2 bg-stone-100/70 dark:bg-stone-900/30">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-[52ch]">
          <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-black leading-[1.08] tracking-tight">
            它不是另一种工具，
            <br />
            是另一套生产方式
          </h2>
        </Reveal>

        <RevealStagger className="mt-16 border-t-2 border-ink dark:border-white/25">
          {DIFFS.map((d) => (
            <RevealItem
              key={d.q}
              className="hairline border-b-2 py-10 md:py-12"
            >
              <div className="grid grid-cols-[3rem_1fr] gap-x-6 md:grid-cols-[4.5rem_1fr] md:gap-x-10">
                <span className="flex h-10 w-10 items-center justify-center bg-blue md:h-12 md:w-12">
                  <X size={20} weight="bold" className="text-white" />
                </span>
                <div>
                  <h3 className="text-2xl font-black tracking-tight md:text-4xl">
                    {d.q}
                  </h3>
                  <p className="mt-4 max-w-[54ch] text-lg font-medium leading-relaxed">
                    {d.a}
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
