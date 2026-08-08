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
      className="hairline border-y-2 bg-stone-100/70 dark:bg-stone-900/30"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[46ch]">
            <h2 className="text-[clamp(1.8rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-tight">
              一条流水线，六道工序
            </h2>
            <p className="mt-6 text-lg font-medium leading-relaxed">
              每一条内容都走完这六步。你可以全自动跑，也可以在任意一步接管，
              专业判断永远在你手里。
            </p>
          </div>
          <p className="font-display text-[2.4rem] font-semibold leading-none text-blue md:text-[3.6rem]">
            06
            <span className="text-lg font-medium text-stone-600 dark:text-white/40">
              &nbsp;工序
            </span>
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {STEPS.map((s, i) => {
            const Cell = reduce ? "div" : motion.div;
            return (
              <Cell
                key={s.no}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="hairline group border-2 bg-white p-8 transition-colors hover:bg-blue md:p-10 dark:bg-stone-950 dark:hover:bg-blue"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-[1.8rem] font-semibold leading-none text-blue group-hover:text-white md:text-[2.4rem]">
                    {s.no}
                  </span>
                  <span className="font-mono text-[13px] font-medium tracking-[0.18em] group-hover:text-white/70">
                    {s.meta}
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-bold tracking-tight group-hover:text-white md:text-xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-[48ch] text-base font-medium leading-relaxed group-hover:text-white/85 md:text-lg">
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
