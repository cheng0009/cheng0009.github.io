import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    no: "01",
    title: "选题方向",
    body: "拆解你的知识领域，找到观众真正关心、你真正擅长的切入角度。",
    meta: "方向",
  },
  {
    no: "02",
    title: "脚本生成",
    body: "四套脚本模板覆盖口播、情景演绎、信息图、产品演示，按中文语境打磨，台词成稿可用。",
    meta: "4 模板",
  },
  {
    no: "03",
    title: "配图生成",
    body: "本地模型生成配图：实拍、信息图、流程插画、IP 手绘、叠加五类视觉，全片统一风格。",
    meta: "5 视觉模式",
  },
  {
    no: "04",
    title: "配音合成",
    body: "自动 TTS 配音，语速、断句跟随文案节奏，成品无需二次对轨。",
    meta: "自动",
  },
  {
    no: "05",
    title: "成片合成",
    body: "自动叠加字幕、封面、片头片尾，输出多尺寸成片，直接可投各平台。",
    meta: "自动",
  },
  {
    no: "06",
    title: "一键发布",
    body: "抖音、小红书、视频号、快手、B 站、YouTube 同时分发，定时发布也交给系统。",
    meta: "6 平台",
  },
];

export default function Pipeline() {
  const reduce = useReducedMotion();

  return (
    <section
      id="pipeline"
      className="hairline border-y bg-stone-100/60 dark:bg-stone-900/30"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-[58ch]">
          <p className="eyebrow text-orange-700 dark:text-orange-400">
            <span className="mr-2 inline-block h-px w-6 translate-y-[-3px] bg-orange-700 dark:bg-orange-400" />
            生产线
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            六道工序，一条流水线
          </h2>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-stone-600 dark:text-stone-400">
            每一条内容都走完这六步。你可以全自动跑，也可以在任意一步接管，
            专业判断永远在你手里。
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-stone-900/10 bg-stone-900/10 md:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
          {STEPS.map((s, i) => {
            const Cell = reduce ? "div" : motion.div;
            return (
              <Cell
                key={s.no}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-stone-50 p-8 transition-colors hover:bg-stone-50 dark:bg-stone-950 dark:hover:bg-stone-900/60"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-sm text-orange-700 dark:text-orange-400">
                    {s.no}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.18em] text-stone-400 dark:text-stone-500">
                    {s.meta}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
                  {s.body}
                </p>
              </Cell>
            );
          })}
        </div>
      </div>
    </section>
  );
}
