# Luyao's Space 项目总结文档

## 项目概述

**项目名称：** Luyao's Space — 个人作品集展示网站  
**技术栈：** React 18 + Vite 7 + GSAP  
**部署平台：** Cloudflare Pages（主）、GitHub Pages（备用）  
**域名：** https://luyao-space.com  
**开发者：** Luyao (Codex AI 辅助开发)  
**完成日期：** 2026年7月  

---

## 项目历程

### 第一阶段：初始搭建（Codex 本地开发）
- 创建 Vite + React 项目骨架
- 配置 GSAP 动画库（SplitText、ScrollTrigger）
- 搭建四个核心板块：Growth、Work、Intention、Contact
- 本地预览调试

### 第二阶段：GitHub Pages 部署
- 配置 GitHub Actions 自动部署流程
- 解决子仓库路径问题（base: '/Luyao-space2/'）
- 修复静态资源路径错误（ASSET_BASE 常量）
- 部署地址：https://luyao122.github.io/Luyao-space2/

### 第三阶段：视觉优化
- 字体替换：North Kids → Beuty Rush（全局字体）
- 增加视频懒加载优化首屏性能
- 调整各板块配色与排版

### 第四阶段：Cloudflare Pages 迁移
- 注册 Cloudflare 账号并创建 Pages 项目
- 绑定自定义域名 luyao-space.com
- 配置 DNS 解析（CNAME 记录）
- 域名 DNS 服务器迁移至 Cloudflare
- 实现全球 CDN 加速，优化国内访问

### 第五阶段：内容迭代
- 第三板块内容重构：从 "公司理解" 改为 "自我介绍"
- 更新个人技能描述与项目经历

---

## 技术细节

### 项目结构
`
GTP个人网站/
├── src/
│   ├── main.jsx          # 主入口，包含所有页面组件
│   ├── styles.css        # 全局样式
│   └── components/
│       └── SplitText.jsx # GSAP 文字动画组件
├── public/
│   ├── assets/           # 静态资源（图片、视频、字体）
│   └── _redirects        # 重定向配置
├── vite.config.js        # Vite 构建配置
├── package.json          # 依赖配置
└── .github/workflows/    # GitHub Actions 部署流程
`

### 核心功能
1. **英雄区（Hero）**：全屏视频背景 + 品牌标语
2. **成长与生活（Growth）**：可展开模块，含视频和图片画廊
3. **工作经历（Work）**：便签式卡片，点击展开详细内容
4. **公司介绍（Self-introduction）**：图文混排 + 短视频
5. **联系方式（Contact）**：电话和邮箱

### 性能优化
- 视频懒加载：仅首屏 hero-bg 加载，其余视频按需加载
- 字体异步加载：font-display: swap
- 图片懒加载：loading="lazy"
- 资源路径动态化：import.meta.env.BASE_URL

---

## 资源统计

### 视频文件（约 36 MB）
| 文件名 | 大小 |
|--------|------|
| hero-bg.mp4 | 8.5 MB |
| hometown-video.mp4 | 8.8 MB |
| career-video.mp4 | 4.8 MB |
| intent-motion.mp4 | 4.8 MB |
| work-bg.mp4 | 4.8 MB |
| hobby-video.mp4 | 4.6 MB |

### 图片文件（约 4.4 MB）
| 文件名 | 大小 |
|--------|------|
| my-photo.jpg | 1.1 MB |
| growth-bg-paper.jpg | 954 KB |
| memory-05 至 memory-10 | 1.8 MB |
| contact-bg.jpg | 201 KB |

### 字体文件
| 文件名 | 大小 |
|--------|------|
| BeutyRush.otf | 60 KB |
| NorthKids.ttf（旧） | 77 KB |

---

## 部署信息

### Cloudflare Pages
- **域名：** https://luyao-space.com
- **Pages 域名：** https://luyao-space2.pages.dev
- **自动部署：** 已启用（推送 main 分支自动构建）
- **CDN：** 全球节点加速
- **SSL：** 已启用

### GitHub Pages（备用）
- **仓库：** luyao122/Luyao-space2
- **CI/CD：** GitHub Actions
- **工作流：** .github/workflows/pages.yml

---

## 已知问题与后续优化方向

### 当前限制
1. 视频文件较大（总 36MB），首屏加载仍较慢
2. 未使用 CDN 压缩视频
3. 暂无 ICP 备案，国内访问可能受一定影响

### 优化建议
1. **视频压缩：** 使用 ffmpeg 或 HandBrake 压缩视频至 2MB 以内
2. **WebP 格式：** 图片转换为 WebP 格式减少体积
3. **CDN 加速：** 已使用 Cloudflare，可进一步优化缓存策略
4. **SEO 优化：** 添加 meta 标签、sitemap.xml
5. **移动端适配：** 当前响应式已较完善，可进一步优化触摸交互

---

## 开发工具链

| 工具 | 版本 | 用途 |
|------|------|------|
| React | 18.3.1 | UI 框架 |
| Vite | 7.3.6 | 构建工具 |
| GSAP | 3.12+ | 动画库 |
| @gsap/react | 1.0.0 | React 集成 |
| Node.js | 20 | 运行时 |

---

## Git 提交历史（最近 10 次）

| 提交 | 说明 |
|------|------|
| d8385fd | chore: update section 03 to Self-introduction |
| 8af4e99 | chore: use dynamic BASE_URL for Cloudflare Pages |
| 2b1f5a8 | perf: lazy-load all videos to improve page load speed |
| 12cedfa | feat: replace North Kids font with Beuty Rush globally |
| 535b1bc | Fix: use ASSET_BASE constant for static asset paths |
| 28aa756 | fix: hardcode base path, remove env variable usage |
| ceefae3 | fix: use Vite env variable for base path |
| dd7d548 | fix: hardcode base path to /Luyao-space2/ |
| 3352376 | feat: add _redirects for GitHub Pages SPA routing |
| 4876963 | fix: syntax error in galleryImages array |

---

## 联系方式

- **邮箱：** 1336194812@qq.com
- **电话：** +86 15620174002
- **网站：** https://luyao-space.com

---

*文档生成日期：2026-07-10*
