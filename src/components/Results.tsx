import { Reveal } from "./Reveal";

const SLOTS = [
  { ratio: "16:9", note: "封面 / 横版成片", tone: "white" },
  { ratio: "9:16", note: "竖版成片", tone: "blue" },
  { ratio: "16:9", note: "信息图场景", tone: "ink" },
  { ratio: "3:4", note: "IP 手绘场景", tone: "white" },
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
          <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)] font-black leading-[1.08] tracking-tight">
            从这条线上下来的成片
          </h2>
          <p className="mt-6 text-lg font-medium leading-relaxed">
            以下为生产线的真实产出示例，将陆续替换为最新成片。
          </p>
        </div>
        <span className="font-display text-5xl font-bold leading-none text-blue md:text-7xl">
          04
          <span className="text-lg font-medium text-ink/40 dark:text-white/40">
            &nbsp;个位置
          </span>
        </span>
      </Reveal>

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        {SLOTS.map((s, i) => (
          <Reveal key={s.note} delay={(i % 2) * 0.1}>
            <figure className="group">
              {/* TODO: 替换为真实成片截图（首帧/封面），占位为规整色块 */}
              <div
                className={
                  s.tone === "blue"
                    ? "relative flex aspect-video items-center justify-center bg-blue"
                    : s.tone === "ink"
                      ? "relative flex aspect-video items-center justify-center bg-ink dark:bg-ink"
                      : "hairline relative flex aspect-video items-center justify-center border-2 bg-white dark:bg-stone-950"
                }
              >
                <span
                  className={`absolute left-5 top-5 font-mono text-[13px] font-medium tracking-[0.2em] ${
                    s.tone === "white" ? "text-ink/60 dark:text-white/60" : "text-white/90"
                  }`}
                >
                  {s.ratio}
                </span>
                <span
                  className={`font-display text-4xl font-bold tracking-[0.08em] md:text-6xl ${
                    s.tone === "white" ? "text-blue" : "text-white"
                  }`}
                >
                  {s.ratio}
                </span>
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <span className="text-lg font-bold">{s.note}</span>
                <span className="font-display text-lg font-bold text-blue">
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
