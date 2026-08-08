import { CTA_LABEL, WECHAT_HREF } from "../lib/cta";

const LINKS = [
  { href: "#pipeline", label: "管线" },
  { href: "#capabilities", label: "能力" },
  { href: "#results", label: "成果" },
  { href: "#contact", label: "联系" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 hairline border-b bg-stone-50/90 backdrop-blur-sm dark:bg-stone-950/90">
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src="./favicon.svg" alt="" width="28" height="28" />
          <span className="text-[15px] font-semibold tracking-tight">
            知二IP
          </span>
          <span className="hairline hidden font-mono text-[11px] tracking-[0.18em] text-stone-500 sm:inline dark:text-stone-400">
            AI 内容生产线
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-stone-600 transition-colors hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-100"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a href={WECHAT_HREF} className="btn-primary px-5! py-2! text-sm">
          {CTA_LABEL}
        </a>
      </nav>
    </header>
  );
}
