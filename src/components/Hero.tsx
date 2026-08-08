import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, WechatLogo } from "@phosphor-icons/react";
import { CTA_LABEL, WECHAT_HREF } from "../lib/cta";

const STEPS = ["选题", "脚本", "配图", "配音", "合成", "发布"] as const;

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
      <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p {...enter(0)} className="eyebrow">
              <span className="mr-3 inline-block h-[10px] w-[10px] bg-blue align-middle dark:bg-blue" />
              知二IP · AI 内容生产线
            </p>
            <motion.h1
              {...enter(0.08)}
              className="mt-6 text-[clamp(2.75rem,6.6vw,6rem)] font-black leading-[1.04] tracking-tight"
            >
              一个人
              <br />
              开一条
              <span className="ml-3 mt-2 inline-block bg-blue px-[0.14em] py-[0.04em] text-white dark:bg-blue dark:text-white">
                内容生产线
              </span>
            </motion.h1>
            <motion.p
              {...enter(0.16)}
              className="mt-8 max-w-[46ch] text-lg font-medium leading-relaxed md:text-xl"
            >
              部署在你电脑上的 AI 视频生产线：选题、脚本、配图、配音、合成、发布，
              全程自动。版权与数据完全归你，每一条内容仍由你的专业把关。
            </motion.p>
            <motion.div {...enter(0.24)} className="mt-10 flex flex-wrap items-center gap-4">
              <a href={WECHAT_HREF} className="btn-primary">
                <WechatLogo size={20} weight="bold" />
                {CTA_LABEL}
              </a>
              <a href="#pipeline" className="btn-ghost">
                了解系统
                <ArrowRight size={18} weight="bold" />
              </a>
            </motion.div>
          </div>

          <motion.div {...enter(0.2)} className="relative">
            <div className="hairline relative overflow-hidden border-2 bg-white dark:bg-stone-950">
              <div className="flex items-center justify-between border-b-2 border-ink px-5 py-4 dark:border-white/25">
                <p className="font-mono text-[13px] font-medium tracking-[0.22em]">生产单</p>
                <p className="font-display text-[13px] font-bold tracking-[0.22em] text-blue dark:text-blue">
                  NO.06/06
                </p>
              </div>
              <div className="flex items-center justify-between p-5 md:p-6">
                <p className="max-w-[14ch] text-2xl font-black leading-tight md:text-3xl">
                  从想清楚
                  <br />
                  到发出去
                </p>
                <div className="relative">
                  <div
                    aria-hidden
                    className="h-[150px] w-[150px] rounded-full bg-blue md:h-[190px] md:w-[190px]"
                  />
                  <span className="font-display absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[64px] font-bold leading-none text-white md:text-[80px]">
                    06
                  </span>
                </div>
              </div>
              <div className="border-t-2 border-ink px-5 py-4 dark:border-white/25">
                <p className="font-display text-[15px] font-medium tracking-[0.08em]">
                  每一步 · 都有系统兜底
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hairline border-t-2 bg-ink text-white dark:bg-ink">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-10 gap-y-2 px-5 py-5 md:px-10">
          {STEPS.map((s, i) => (
            <span key={s} className="flex items-center gap-10">
              <span className="font-display text-lg font-bold tracking-[0.14em] md:text-xl">
                {s}
              </span>
              {i < STEPS.length - 1 && (
                <span aria-hidden className="h-[10px] w-[10px] bg-blue" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
