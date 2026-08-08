import { Reveal } from "./Reveal";

const PLATFORMS = ["抖音", "小红书", "视频号", "快手", "B 站", "YouTube"];

const MODES = ["实拍", "信息图表", "流程插画", "IP 手绘", "叠加"];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32"
    >
      <Reveal className="max-w-[58ch]">
        <p className="eyebrow">
          <span className="mr-3 inline-block h-[10px] w-[10px] bg-blue align-middle" />
          能力
        </p>
        <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)] font-black leading-[1.08] tracking-tight">
          为知识内容而生的整套能力
        </h2>
        <p className="mt-6 text-lg font-medium leading-relaxed">
          不是单点生成工具，而是围绕「知识表达」配置的完整能力集。
        </p>
      </Reveal>

      <div className="mt-16 grid gap-5 md:grid-cols-12">
        {/* A — 4 套脚本模板（大蓝块） */}
        <Reveal className="md:col-span-8">
          <div className="flex h-full flex-col bg-blue p-8 text-white md:p-10">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-3xl font-bold">A</span>
              <span className="font-mono text-[13px] font-medium tracking-[0.2em] text-white/90">
                脚本层
              </span>
            </div>
            <h3 className="mt-10 text-3xl font-black tracking-tight md:text-4xl">
              四套脚本模板
            </h3>
            <p className="mt-4 max-w-[46ch] text-lg font-medium leading-relaxed text-white/95">
              口播、情景演绎、信息图、产品演示，对应不同表达场景；
              台词带中文语境细节，不是翻译腔的堆砌。
            </p>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ["T1", "口播"],
                ["T2", "情景"],
                ["T3", "信息图"],
                ["T4", "演示"],
              ].map(([code, name]) => (
                <div
                  key={code}
                  className="border-2 border-white/40 px-4 py-4"
                >
                  <p className="font-display text-sm font-bold tracking-[0.18em] text-white/80">
                    {code}
                  </p>
                  <p className="mt-1 text-base font-bold">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* B — IP 形象（黑块，图片占位） */}
        <Reveal delay={0.1} className="md:col-span-4">
          <div className="flex h-full flex-col bg-ink p-8 text-white md:p-10 dark:bg-ink dark:text-white">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-3xl font-bold">B</span>
              <span className="font-mono text-[13px] font-medium tracking-[0.2em] text-white/80">
                IP 层
              </span>
            </div>
            <div className="mt-6 flex flex-1 flex-col">
              {/* TODO: 真实「小黑」IP 形象图，比例 3:4 */}
              <div className="flex flex-1 items-center justify-center border-2 border-dashed border-white/40">
                <span className="font-mono text-[13px] font-medium tracking-[0.2em] text-white/80">
                  小黑 · IP 形象
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-black tracking-tight">IP 形象「小黑」</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-white/90">
                  手绘角色贯穿全片，账号辨识度来自一致的形象，不靠撞脸。
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* C — 视觉模式（白块） */}
        <Reveal className="md:col-span-4">
          <div className="hairline h-full border-2 bg-white p-8 md:p-10 dark:bg-stone-950">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-3xl font-bold">C</span>
              <span className="font-mono text-[13px] font-medium tracking-[0.2em]">
                视觉层
              </span>
            </div>
            <h3 className="mt-10 text-3xl font-black tracking-tight">五种视觉模式</h3>
            <p className="mt-4 text-base font-medium leading-relaxed md:text-lg">
              实拍、信息图表、流程插画、IP 手绘、叠加，按内容自动分配，
              一条视频里至少两种视觉，不单调。
            </p>
            <ul className="mt-8 space-y-3">
              {MODES.map((m) => (
                <li key={m} className="flex items-center gap-3 text-base font-bold md:text-lg">
                  <span className="inline-block h-[10px] w-[10px] bg-blue" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* D — 多平台发布（白块） */}
        <Reveal delay={0.1} className="md:col-span-4">
          <div className="hairline h-full border-2 bg-white p-8 md:p-10 dark:bg-stone-950">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-3xl font-bold">D</span>
              <span className="font-mono text-[13px] font-medium tracking-[0.2em]">
                分发层
              </span>
            </div>
            <h3 className="mt-10 text-3xl font-black tracking-tight">一键多平台发布</h3>
            <p className="mt-4 text-base font-medium leading-relaxed md:text-lg">
              一条成片，六个平台同时分发；定时发布，睡觉时内容也在更新。
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {PLATFORMS.map((p) => (
                <span
                  key={p}
                  className="hairline border-2 px-4 py-2 text-base font-bold"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* E — 全本地部署（蓝块） */}
        <Reveal className="md:col-span-6">
          <div className="flex h-full flex-col justify-between bg-blue p-8 text-white md:p-10">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-3xl font-bold">E</span>
              <span className="font-mono text-[13px] font-medium tracking-[0.2em] text-white/90">
                部署层
              </span>
            </div>
            <div className="mt-10">
              <h3 className="text-3xl font-black tracking-tight md:text-4xl">全本地部署</h3>
              <p className="mt-4 max-w-[46ch] text-lg font-medium leading-relaxed text-white/95">
                生成模型跑在你自己电脑上，不依赖云端额度，断网也能生产。
              </p>
            </div>
          </div>
        </Reveal>

        {/* F — 版权自有（黑块） */}
        <Reveal delay={0.1} className="md:col-span-6">
          <div className="flex h-full flex-col justify-between bg-ink p-8 text-white md:p-10 dark:bg-ink dark:text-white">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-3xl font-bold">F</span>
              <span className="font-mono text-[13px] font-medium tracking-[0.2em] text-white/80">
                产权层
              </span>
            </div>
            <div className="mt-10">
              <h3 className="text-3xl font-black tracking-tight md:text-4xl">
                版权与数据归你
              </h3>
              <p className="mt-4 max-w-[46ch] text-lg font-medium leading-relaxed text-white/90">
                素材、脚本、成片全部留在本地；IP 形象、内容资产，从一开始就属于你。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
