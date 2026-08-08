# 知二IP · AI 内容生产线

部署在你电脑上的 AI 视频生产线：选题、脚本、配图、配音、合成、发布，全程自动。版权与数据完全归你。

静态展示站，部署于 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build   # 输出到 dist/
```

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages：

- 仓库名须为 `cheng0009.github.io`（用户主页仓库）
- Settings → Pages → Source 选择 **GitHub Actions**
- 站点地址：https://cheng0009.github.io/

## 待替换素材（搜索 TODO）

- `src/components/Capabilities.tsx`：小黑 IP 形象图（3:4）
- `src/components/Results.tsx`：4 张真实成片截图（16:9 封面、9:16 竖版、16:9 信息图、3:4 IP 场景）
- `src/components/Contact.tsx`：微信二维码、公众号二维码
