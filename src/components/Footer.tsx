export default function Footer() {
  return (
    <footer className="hairline border-t-2">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-4">
          <span className="flex h-9 w-9 items-center justify-center bg-ink font-display text-xl font-bold text-white dark:bg-white dark:text-ink">
            2
          </span>
          <div>
            <p className="text-lg font-black tracking-tight">知二IP</p>
            <p className="font-mono text-[13px] font-medium tracking-[0.18em]">
              AI 内容生产线
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <p className="font-display text-[15px] font-bold tracking-[0.06em]">
            © 2026 知二IP
          </p>
          <p className="font-mono text-[13px] tracking-[0.14em]">
            本地部署 · 版权自有
          </p>
        </div>
      </div>
    </footer>
  );
}
