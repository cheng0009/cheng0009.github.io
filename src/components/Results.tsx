import { Reveal } from "./Reveal";

const SLOTS = [
  { ratio: "16:9", note: "封面 / 横版成片" },
  { ratio: "9:16", note: "竖版成片" },
  { ratio: "16:9", note: "信息图场景" },
  { ratio: "3:4", note: "IP 手绘场景" },
];

export default function Results() {
  return (
    <section
      id="results"
      className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32"
    >
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[52ch]">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            从这条线上下来的成片
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-800 dark:text-stone-300">
            以下为生产线的真实产出示例，将陆续替换为最新成片。
          </p>
        </div>
        <span className="font-mono text-xs tracking-[0.2em] text-stone-600 dark:text-stone-400">
          04 个位置 · 示例区
        </span>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {SLOTS.map((s, i) => (
          <Reveal key={s.note} delay={(i % 2) * 0.1}>
            <figure className="group">
              {/* TODO: 替换为真实成片截图（首帧/封面），占位为规整色块 */}
              <div className="hairline relative flex aspect-video items-center justify-center overflow-hidden border bg-stone-100 dark:bg-stone-900/50">
                <span className="absolute left-4 top-4 font-mono text-xs tracking-[0.2em] text-stone-600 dark:text-stone-400">
                  {s.ratio}
                </span>
                <span className="font-mono text-xs tracking-[0.24em] text-stone-600 dark:text-stone-400">
                  示例成片 · 待替换
                </span>
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between">
                <span className="text-base font-medium">{s.note}</span>
                <span className="font-mono text-xs tracking-[0.18em] text-stone-600 dark:text-stone-400">
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
