import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, WechatLogo } from "@phosphor-icons/react";
import { CTA_LABEL, WECHAT_HREF } from "../lib/cta";

const INDEX = [
  ["01", "选题方向"],
  ["02", "脚本生成"],
  ["03", "配图生成"],
  ["04", "配音合成"],
  ["05", "成片合成"],
  ["06", "一键发布"],
] as const;

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section id="top" className="hairline relative overflow-hidden border-b">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-orange-500/8 blur-3xl dark:bg-orange-500/10"
      />
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:pt-24 lg:gap-20">
        <div>
          <p {...enter(0)} className="eyebrow text-orange-700 dark:text-orange-400">
            <span className="mr-2 inline-block h-px w-6 translate-y-[-3px] bg-orange-700 dark:bg-orange-400" />
            知二IP · AI 内容生产线
          </p>
          <motion.h1
            {...enter(0.08)}
            className="mt-6 text-6xl font-semibold leading-[1.06] tracking-tight md:text-7xl"
          >
            一个人，也能开一条
            <br />
            <span className="text-orange-700 dark:text-orange-400">
              内容生产线
            </span>
          </motion.h1>
          <motion.p
            {...enter(0.16)}
            className="mt-7 max-w-[44ch] text-lg leading-relaxed text-stone-800 dark:text-stone-300"
          >
            部署在你电脑上的 AI 视频生产线：选题、脚本、配图、配音、合成、发布，
            全程自动。版权与数据完全归你，每一条内容仍由你的专业把关。
          </motion.p>
          <motion.div {...enter(0.24)} className="mt-10 flex flex-wrap items-center gap-4">
            <a href={WECHAT_HREF} className="btn-primary">
              <WechatLogo size={18} weight="bold" />
              {CTA_LABEL}
            </a>
            <a href="#pipeline" className="btn-ghost">
              了解系统
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          {...enter(0.2)}
          className="hairline relative border bg-stone-50/60 p-8 dark:bg-stone-900/40"
        >
          <div className="flex items-baseline justify-between">
            <p className="font-mono text-xs tracking-[0.22em] text-stone-600 dark:text-stone-400">
              今日生产单
            </p>
            <p className="font-mono text-xs text-orange-700 dark:text-orange-400">
              06 / 06
            </p>
          </div>
          <div className="mt-6 divide-y divide-stone-900/15 dark:divide-white/10">
            {INDEX.map(([no, label], i) => (
              <div key={no} className="flex items-center justify-between py-4">
                <span className="font-mono text-base text-stone-600 dark:text-stone-400">
                  {no}
                </span>
                <span className="text-base font-medium tracking-wide">{label}</span>
                <span
                  className={`font-mono text-xs ${
                    i < INDEX.length - 1
                      ? "text-stone-500 dark:text-stone-500"
                      : "text-orange-700 dark:text-orange-400"
                  }`}
                >
                  {i < INDEX.length - 1 ? "自动" : "完成"}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 border-t border-stone-900/15 pt-5 font-mono text-xs leading-relaxed tracking-[0.14em] text-stone-600 dark:border-white/10 dark:text-stone-400">
            从想清楚到发出去
            <br />
            每一步都有系统兜底
          </p>
        </motion.div>
      </div>
    </section>
  );
}
