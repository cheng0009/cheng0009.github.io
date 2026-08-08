import { WechatLogo } from "@phosphor-icons/react";
import { CTA_LABEL, WECHAT_HREF } from "../lib/cta";
import { Reveal } from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="hairline border-y bg-stone-100/60 dark:bg-stone-900/30"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="mx-auto max-w-[52ch] text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            想看看你的内容，在这条线上怎么跑
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone-600 dark:text-stone-400">
            添加微信，备注「知二」；我们会用你的选题跑一遍完整管线，发你样片和参数。
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-[520px]">
          <div className="hairline grid grid-cols-2 border bg-stone-50 dark:bg-stone-950">
            {/* TODO: 替换为真实微信二维码图片 */}
            <div className="hairline border-r p-6">
              <div className="flex aspect-square items-center justify-center border border-dashed border-stone-900/20 dark:border-white/20">
                <span className="px-2 text-center font-mono text-[11px] leading-relaxed tracking-[0.2em] text-stone-400 dark:text-stone-500">
                  微信二维码
                  <br />
                  待替换
                </span>
              </div>
              <p className="mt-4 text-center text-sm font-medium">个人微信</p>
              <p className="mt-1 text-center font-mono text-[11px] tracking-[0.16em] text-stone-400 dark:text-stone-500">
                备注「知二」
              </p>
            </div>
            {/* TODO: 替换为真实公众号二维码图片 */}
            <div className="p-6">
              <div className="flex aspect-square items-center justify-center border border-dashed border-stone-900/20 dark:border-white/20">
                <span className="px-2 text-center font-mono text-[11px] leading-relaxed tracking-[0.2em] text-stone-400 dark:text-stone-500">
                  公众号二维码
                  <br />
                  待替换
                </span>
              </div>
              <p className="mt-4 text-center text-sm font-medium">公众号</p>
              <p className="mt-1 text-center font-mono text-[11px] tracking-[0.16em] text-stone-400 dark:text-stone-500">
                内容方法论持续更新
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a href={WECHAT_HREF} className="btn-primary">
              <WechatLogo size={18} weight="bold" />
              {CTA_LABEL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
