import { WechatLogo } from "@phosphor-icons/react";
import { CTA_LABEL, WECHAT_HREF } from "../lib/cta";
import { Reveal } from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="hairline border-t-2 bg-blue text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal>
            <h2 className="text-[clamp(2rem,4.4vw,3.6rem)] font-bold leading-[1.06] tracking-tight">
              想看看你的内容，
              <br />
              在这条线上怎么跑
            </h2>
            <p className="mt-8 max-w-[46ch] text-xl font-medium leading-relaxed text-white/95">
              添加微信，备注「知二」；我们会用你的选题跑一遍完整管线，发你样片和参数。
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={WECHAT_HREF}
                className="inline-flex items-center gap-2 bg-ink px-8 py-4 text-lg font-semibold text-white transition-transform hover:bg-white hover:text-stone-600 dark:bg-white dark:text-stone-600 dark:hover:bg-ink dark:hover:text-white"
              >
                <WechatLogo size={22} weight="bold" />
                {CTA_LABEL}
              </a>
              <p className="font-mono text-[13px] font-medium tracking-[0.2em] text-white/80">
                备注「知二」
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
              <div className="grid grid-cols-2 border-2 border-white/40 bg-blue">
                <div className="border-r-2 border-white/40 p-6">
                  <div className="relative aspect-[2/3] overflow-hidden bg-white">
                    <img
                      src="./images/contact-wechat.webp"
                      alt="个人微信二维码"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                  <p className="mt-4 text-center text-base font-semibold">个人微信</p>
                </div>
                <div className="p-6">
                  <div className="relative aspect-square overflow-hidden bg-white">
                    <img
                      src="./images/contact-gongzhonghao.webp"
                      alt="公众号二维码"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                  <p className="mt-4 text-center text-base font-semibold">公众号</p>
                </div>
              </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
