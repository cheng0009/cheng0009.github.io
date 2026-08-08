import { CTA_LABEL, WECHAT_HREF } from "../lib/cta";

const LINKS = [
  { href: "#pipeline", label: "管线" },
  { href: "#capabilities", label: "能力" },
  { href: "#results", label: "成果" },
  { href: "#contact", label: "联系" },
];

export default function Nav() {
  return (
    <header className="hairline sticky top-0 z-40 border-b-2 bg-white/95 backdrop-blur-sm dark:bg-stone-950/95">
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center bg-ink font-display text-lg font-bold text-white dark:bg-white dark:text-ink">
            2
          </span>
          <span className="text-lg font-black tracking-tight">知二IP</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-semibold transition-colors hover:text-blue"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a href={WECHAT_HREF} className="btn-primary px-5! py-2.5!">
          {CTA_LABEL}
        </a>
      </nav>
    </header>
  );
}
