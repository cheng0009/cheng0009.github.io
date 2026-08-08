export default function Footer() {
  return (
    <footer className="hairline border-t">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-3">
          <img src="./favicon.svg" alt="" width="22" height="22" />
          <span className="text-sm font-medium">知二IP</span>
          <span className="hairline font-mono text-[11px] tracking-[0.18em] text-stone-400 dark:text-stone-500">
            AI 内容生产线
          </span>
        </div>
        <p className="font-mono text-[11px] tracking-[0.14em] text-stone-400 dark:text-stone-500">
          © 2026 知二IP · 本地部署 · 版权自有
        </p>
      </div>
    </footer>
  );
}
