import { Reveal } from "./Reveal";

const PLATFORMS = ["抖音", "小红书", "视频号", "快手", "B 站", "YouTube"];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32"
    >
      <Reveal className="max-w-[58ch]">
        <p className="eyebrow text-orange-700 dark:text-orange-400">
          <span className="mr-2 inline-block h-px w-6 translate-y-[-3px] bg-orange-700 dark:bg-orange-400" />
          能力
        </p>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
          为知识内容而生的整套能力
        </h2>
        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-stone-800 dark:text-stone-300">
          不是单点生成工具，而是围绕「知识表达」配置的完整能力集。
        </p>
      </Reveal>

      <div className="mt-16 grid gap-5 md:grid-cols-12">
        {/* A — 4 套脚本模板（宽格，tinted） */}
        <Reveal className="md:col-span-8">
          <div className="hairline h-full border bg-orange-50/70 p-8 md:p-10 dark:bg-orange-950/25">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-base text-orange-700 dark:text-orange-400">
                A
              </span>
              <span className="font-mono text-xs tracking-[0.18em] text-stone-600 dark:text-stone-400">
                脚本层
              </span>
            </div>
            <h3 className="mt-8 text-2xl font-medium tracking-tight">四套脚本模板</h3>
            <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-stone-800 dark:text-stone-300">
              口播、情景演绎、信息图、产品演示，对应不同表达场景；
              台词带中文语境细节，不是翻译腔的堆砌。
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ["T1", "口播"],
                ["T2", "情景"],
                ["T3", "信息图"],
                ["T4", "演示"],
              ].map(([code, name]) => (
                <div
                  key={code}
                  className="hairline border bg-stone-50 px-4 py-4 dark:bg-stone-950/60"
                >
                  <p className="font-mono text-xs tracking-[0.2em] text-orange-700 dark:text-orange-400">
                    {code}
                  </p>
                  <p className="mt-2 text-sm font-medium">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* B — IP 形象（图片占位格） */}
        <Reveal delay={0.1} className="md:col-span-4">
          <div className="hairline hairline flex h-full flex-col border bg-stone-100 p-8 dark:bg-stone-900/40">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-base text-orange-700 dark:text-orange-400">
                B
              </span>
              <span className="font-mono text-xs tracking-[0.18em] text-stone-600 dark:text-stone-400">
                IP 层
              </span>
            </div>
            <div className="mt-6 flex flex-1 flex-col">
              {/* TODO: 真实「小黑」IP 形象图，比例 3:4 */}
              <div className="hairline relative flex flex-1 items-center justify-center border border-dashed bg-stone-50 dark:bg-stone-950/50">
                <span className="font-mono text-xs tracking-[0.2em] text-stone-600 dark:text-stone-400">
                  小黑 · IP 形象
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-medium tracking-tight">IP 形象「小黑」</h3>
                <p className="mt-2 text-base leading-relaxed text-stone-800 dark:text-stone-300">
                  手绘角色贯穿全片，账号辨识度来自一致的形象，不靠撞脸。
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* C — 视觉模式 */}
        <Reveal className="md:col-span-4">
          <div className="hairline h-full border bg-stone-50 p-8 dark:bg-stone-900/40">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-base text-orange-700 dark:text-orange-400">
                C
              </span>
              <span className="font-mono text-xs tracking-[0.18em] text-stone-600 dark:text-stone-400">
                视觉层
              </span>
            </div>
            <h3 className="mt-8 text-2xl font-medium tracking-tight">五种视觉模式</h3>
            <p className="mt-3 text-base leading-relaxed text-stone-800 dark:text-stone-300">
              实拍、信息图表、流程插画、IP 手绘、叠加，按内容自动分配，
              一条视频里至少两种视觉，不单调。
            </p>
            <ul className="mt-6 space-y-2.5">
              {["实拍", "信息图表", "流程插画", "IP 手绘", "叠加"].map((m) => (
                <li key={m} className="flex items-center gap-3 text-base">
                  <span className="inline-block h-px w-4 bg-orange-700 dark:bg-orange-400" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* D — 多平台发布 */}
        <Reveal delay={0.1} className="md:col-span-4">
          <div className="hairline h-full border bg-stone-50 p-8 dark:bg-stone-900/40">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-base text-orange-700 dark:text-orange-400">
                D
              </span>
              <span className="font-mono text-xs tracking-[0.18em] text-stone-600 dark:text-stone-400">
                分发层
              </span>
            </div>
            <h3 className="mt-8 text-2xl font-medium tracking-tight">一键多平台发布</h3>
            <p className="mt-3 text-base leading-relaxed text-stone-800 dark:text-stone-300">
              一条成片，六个平台同时分发；定时发布，睡觉时内容也在更新。
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {PLATFORMS.map((p) => (
                <span
                  key={p}
                  className="hairline border px-3.5 py-1.5 text-sm text-stone-800 dark:text-stone-300"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* E — 全本地部署 + F — 版权自有 */}
        <Reveal className="md:col-span-4">
          <div className="hairline h-full border bg-stone-50 p-8 dark:bg-stone-900/40">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-base text-orange-700 dark:text-orange-400">
                E
              </span>
              <span className="font-mono text-xs tracking-[0.18em] text-stone-600 dark:text-stone-400">
                部署层
              </span>
            </div>
            <h3 className="mt-8 text-2xl font-medium tracking-tight">全本地部署</h3>
            <p className="mt-3 text-base leading-relaxed text-stone-800 dark:text-stone-300">
              生成模型跑在你自己电脑上，不依赖云端额度，断网也能生产。
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-4">
          <div className="hairline h-full border bg-stone-50 p-8 dark:bg-stone-900/40">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-base text-orange-700 dark:text-orange-400">
                F
              </span>
              <span className="font-mono text-xs tracking-[0.18em] text-stone-600 dark:text-stone-400">
                产权层
              </span>
            </div>
            <h3 className="mt-8 text-2xl font-medium tracking-tight">版权与数据归你</h3>
            <p className="mt-3 text-base leading-relaxed text-stone-800 dark:text-stone-300">
              素材、脚本、成片全部留在本地；IP 形象、内容资产，从一开始就属于你。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
