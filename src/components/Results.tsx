import { Reveal } from "./Reveal";

const SLOTS = [
  {
    ratio: "16:9",
    note: "封面 / 横版成片",
    kind: "img",
    src: "./images/result-holding.jpg",
    alt: "内容创作者手持摄像机拍摄成片",
    aspect: "aspect-video",
  },
  {
    ratio: "9:16",
    note: "竖版成片",
    kind: "img",
    src: "./images/result-camera.jpg",
    alt: "手持摄像机拍摄竖屏内容",
    aspect: "aspect-[9/16]",
  },
  {
    ratio: "16:9",
    note: "信息图场景",
    kind: "img",
    src: "./images/result-mic.jpg",
    alt: "录音室麦克风特写",
    aspect: "aspect-video",
  },
  { ratio: "3:4", note: "IP 手绘场景", kind: "block" },
] as const;

export default function Results() {
  return (
    <section
      id="results"
      className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32"
    >
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[52ch]">
          <p className="eyebrow">
            <span className="mr-3 inline-block h-[10px] w-[10px] bg-blue align-middle" />
            成果
          </p>
          <h2 className="mt-6 text-[clamp(1.8rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-tight">
            从这条线上下来的成片
          </h2>
          <p className="mt-6 text-lg font-medium leading-relaxed">
            以下为生产线的真实产出示例，将陆续替换为最新成片。
          </p>
        </div>
        <span className="font-display text-[2.4rem] font-semibold leading-none text-blue md:text-[3.6rem]">
          04
          <span className="text-lg font-medium text-stone-600 dark:text-white/40">
            &nbsp;个位置
          </span>
        </span>
      </Reveal>

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        {SLOTS.map((s, i) => (
          <Reveal key={s.note} delay={(i % 2) * 0.1}>
            <figure className="group">
              {/* 已接入 Unsplash 免费摄影图（Unsplash License）；IP 场景仍为占位 */}
              {s.kind === "img" ? (
                <div className={`hairline relative overflow-hidden border-2 bg-white dark:bg-stone-950 ${s.aspect}`}>
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="absolute left-5 top-5 bg-white px-3 py-1.5 font-mono text-[13px] font-medium tracking-[0.2em]">
                    {s.ratio}
                  </span>
                </div>
              ) : (
                <div className="relative flex aspect-[3/4] items-center justify-center bg-ink dark:bg-ink">
                  <span className="absolute left-5 top-5 font-mono text-[13px] font-medium tracking-[0.2em] text-white/80">
                    {s.ratio}
                  </span>
                  <span className="font-display text-[1.8rem] font-semibold tracking-[0.08em] text-white md:text-[3rem]">
                    IP 形象
                    <br />
                    待替换
                  </span>
                </div>
              )}
              <figcaption className="mt-4 flex items-baseline justify-between">
                <span className="text-lg font-semibold">{s.note}</span>
                <span className="font-display text-lg font-semibold text-blue">
                  0{i + 1}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
