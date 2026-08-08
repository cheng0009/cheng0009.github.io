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
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <p {...enter(0)} className="eyebrow">
              <span className="mr-3 inline-block h-[10px] w-[10px] bg-blue align-middle dark:bg-blue" />
              知二IP · AI 内容生产线
            </p>
            <motion.h1
              {...enter(0.08)}
              className="mt-6 text-[clamp(2.2rem,5.3vw,4.8rem)] font-bold leading-[1.04] tracking-tight"
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
              <img
                src="./images/hero-creator.webp"
                alt="内容创作者在麦克风前录制自己的知识节目"
                width="1200"
                height="1500"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
              <div className="absolute left-4 top-4 bg-white px-3 py-1.5 font-mono text-[13px] font-medium tracking-[0.22em]">
                生产单
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-t-2 border-ink bg-ink px-5 py-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-display text-2xl font-semibold leading-none text-white">
                      06 / 06
                    </p>
                    <p className="mt-1.5 font-mono text-[13px] tracking-[0.14em] text-white/80">
                      从想清楚 到发出去
                    </p>
                  </div>
                  <p className="font-mono text-[13px] tracking-[0.14em] text-white/80">
                    每一步 · 都有系统兜底
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hairline border-t-2 bg-ink text-white dark:bg-ink">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-10 gap-y-2 px-5 py-5 md:px-10">
          {STEPS.map((s, i) => (
            <span key={s} className="flex items-center gap-10">
              <span className="font-display text-lg font-semibold tracking-[0.14em] md:text-xl">
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
