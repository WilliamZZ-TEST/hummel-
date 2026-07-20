# hummel 品牌重新定位项目 — 交接文档

> **项目名称**：hummel 品牌重新定位与日本市场调研  
> **项目周期**：2026年6月 — 2026年7月  
> **文档版本**：v1.0  
> **最后更新**：2026-07-20  
> **交接对象**：hummel 中国市场营销团队 / 后续运营接手人

---

## 一、项目概述

本项目为 hummel 品牌在中国大陆市场的重新定位提供完整的策略框架和数据支撑。核心目标是在 12 个月内通过小红书、抖音、B站三大平台实现品牌社交媒体增长，并达成 1000 万人民币年销售额，同时制定三年路线图（1000万 → 3000万 → 6000万）。

报告涵盖北欧文化研究、中国市场分析、9 大竞品对标、日本市场深度调研（含 SSK 财务数据与 Top 10 畅销产品）、品牌资产审计、SWOT 分析、产品/视觉/内容/KOL 战略、GMV 拆解、营销日历及三年路线图，共 14 个章节。

---

## 二、当前状态

| 项目 | 状态 | 说明 |
|------|------|------|
| HTML 报告 | 已完成 | 14 章完整版，17 个 ECharts 图表，1 个 Mermaid 甘特图 |
| 日本市场调研 | 已完成 | SSK 2025 财年数据、4 条品牌线、外套/鞋类 Top 10、受众分层 |
| 产品图片 | 已完成 | 130+ 张实拍图，已从 48MB 压缩至 13MB |
| 关键信息摘要 | 已完成 | 15 章节结构化 Markdown 文档 |
| GitHub 仓库 | 已部署 | 4 次提交，代码已推送至 main 分支 |
| GitHub Pages | 已上线 | URL 可正常访问，页面渲染正常 |
| 浏览器验证 | 已通过 | 17/17 图表渲染、0 控制台错误、图片懒加载正常 |

---

## 三、交付物清单

| 文件 | 路径 | 大小 | 说明 |
|------|------|------|------|
| 主报告（HTML） | `index.html` | 112KB | 14 章完整策略报告，含吸顶导航、灯箱放大、滚动监听 |
| 主报告（副本） | `hummel-repositioning.html` | 112KB | 与 index.html 内容相同，保留原始命名 |
| 图表脚本 | `assets/charts.js` | — | 17 个 ECharts 图表实现 |
| 关键信息摘要 | `关键信息摘要.md` | 20KB | 15 章节结构化 Markdown 摘要 |
| 日本产品图片 | `assets/japan-products/` | 13MB | 130+ 张产品/截图/联名图 |
| ECharts 库 | `_shared/js/echarts.min.js` | — | 本地化 ECharts 5.x |
| Mermaid 库 | `_shared/js/mermaid.min.js` | 2.5MB | 本地化 Mermaid |
| 字体文件 | `_shared/fonts/` | — | 6 个字体文件（Bricolage、InstrumentSans、InstrumentSerif、DMMono） |
| Jekyll 禁用 | `.nojekyll` | — | 禁用 GitHub Pages 的 Jekyll 处理 |

---

## 四、GitHub 仓库与部署

### 仓库信息

| 项目 | 值 |
|------|------|
| 仓库地址 | `https://github.com/WilliamZZ-TEST/hummel-` |
| Pages URL | `https://williamzz-test.github.io/hummel-/` |
| 分支 | `main` |
| GitHub 用户名 | `WilliamZZ-TEST` |
| 构建状态 | `built`（legacy 构建模式） |

### 提交历史

| Commit | 说明 |
|--------|------|
| `2b81707` | 添加关键信息摘要 Markdown 文档 |
| `7edba61` | 优化图片：压缩 48MB 至 13MB，提升 Pages 加载速度 |
| `fc113bd` | 修复 GitHub Pages：重命名为 index.html + 添加 .nojekyll |
| `cf601e0` | hummel 品牌重新定位与日本市场调研报告 — 完整版 |

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/WilliamZZ-TEST/hummel-.git

# 本地预览
cd hummel-
python3 -m http.server 8765
# 浏览器打开 http://localhost:8765/

# 推送更新
git add -A
git commit -m "更新说明"
git push origin main
# GitHub Pages 会在 1-2 分钟内自动重新构建
```

---

## 五、技术架构

### 前端技术栈

| 组件 | 技术 | 版本/说明 |
|------|------|----------|
| 图表库 | ECharts | 5.x，本地化引入（`_shared/js/echarts.min.js`） |
| 流程图 | Mermaid | 本地化引入（`_shared/js/mermaid.min.js`） |
| 字体 | Bricolage Grotesque / InstrumentSans / InstrumentSerif / DMMono | 6 个 ttf 文件本地化加载 |
| CSS 变量 | `--accent: #B23A2E` / `--accent2: #2E4754` / `--accent3: #2F6B3F` / `--bg: #F4F1EA` | 北欧美学色板 |

### 页面功能

| 功能 | 实现方式 |
|------|---------|
| 吸顶导航栏 | CSS `position: sticky` + JavaScript scroll-spy |
| 图片点击放大 | CSS overlay + JavaScript 事件委托（lightbox） |
| 图片懒加载 | HTML `loading="lazy"` 属性 |
| 引用系统 | `[N]`（新闻）、`[C]`（竞品）、`[F]`（财务）前缀分类 |

### 图表清单（17 个）

| 图表 ID | 类型 | 位置/主题 |
|---------|------|----------|
| `chart-happiness` | 柱状图 | 北欧幸福指数排名 |
| `chart-cycling` | 柱状图 | 哥本哈根骑行数据 |
| `chart-climate` | 折线图 | 丹麦减排进度 |
| `chart-conversion` | 漏斗图 | 消费者转化路径 |
| `chart-market` | 柱状图 | 中国运动市场规模 |
| `chart-trends` | 折线图 | 四大趋势热度 |
| `chart-xhs` | 柱状图 | 小红书平台数据 |
| `chart-comp-revenue` | 柱状图 | 9 大竞品营收对比 |
| `chart-comp-price` | 散点图 | 竞品价格-增长矩阵 |
| `chart-asset-radar` | 雷达图 | 品牌资产 5 维评分 |
| `chart-blueocean` | 散点图 | 蓝海战略定位图 |
| `chart-platform` | 饼图 | 三平台分工 |
| `chart-budget` | 饼图 | 预算分配 |
| `chart-kol` | 柱状图 | KOL 分层矩阵 |
| `chart-sales` | 柱状图 | GMV 渠道拆解 |
| `chart-funnel` | 漏斗图 | 销售漏斗指标 |
| `chart-roadmap` | 甘特图(Mermaid) | 三年路线图 |

---

## 六、目录结构

```
hummel-repositioning/
├── index.html                          # 主报告（GitHub Pages 入口）
├── hummel-repositioning.html           # 主报告（原始命名副本）
├── 关键信息摘要.md                      # 15 章节关键信息摘要
├── .nojekyll                           # 禁用 Jekyll
├── assets/
│   ├── charts.js                       # 17 个 ECharts 图表实现
│   └── japan-products/                 # 130+ 张日本市场产品/截图
│       ├── hummel-jp-homepage.png      # 日本官网截图
│       ├── hummel-00-collection.png    # HUMMEL 00 系列截图
│       ├── product-HAT2059-01.webp     # Top 10 外套产品图
│       ├── shoe-VM78-CPH-LS-01.jpg     # Top 10 鞋类产品图
│       └── ...                         # 其余产品/联名/渠道截图
└── _shared/
    ├── js/
    │   ├── echarts.min.js              # ECharts 5.x 本地化
    │   └── mermaid.min.js              # Mermaid 本地化
    └── fonts/
        ├── BricolageGrotesque-Bold.ttf
        ├── BricolageGrotesque-Regular.ttf
        ├── InstrumentSans-Bold.ttf
        ├── InstrumentSans-Regular.ttf
        ├── InstrumentSerif-Italic.ttf
        └── DMMono-Regular.ttf
```

---

## 七、关键策略决策摘要

### 品牌定位

> hummel 是丹麦的有品位并且好看的生活方式品牌

差异化主张：**"880 元的北欧叙事，399 元的可及价格"** — 将 PANE 在 880 元价位验证的北欧极简生活方式叙事，降维到 399 元可及价格带。

### 目标人群

25-35 岁都市白领"质感平替追求者" — 认同北欧简约，追求个性/舒适/好看/简约，但不愿为 880 元 PANE 买单。

### 核心爆品

德训鞋 VM78，定价 ¥399，对标鬼塚虎 Tokuten / 美津浓复古，毛利目标 ≥45%。

### GMV 拆解（1000 万目标）

| 渠道 | 占比 | 金额 |
|------|------|------|
| 抖音电商 | 35% | 350 万 |
| 天猫/淘宝 | 30% | 300 万 |
| 线下门店 | 15% | 150 万 |
| 小红书电商/外溢 | 10% | 100 万 |
| 私域/其他 | 10% | 100 万 |

### 健康线指标

千川 ROI ≥ 2.12，退货率 ≤ 25%。

---

## 八、已知问题与注意事项

### 图片资源

- 所有图片已压缩优化（48MB → 13MB），最大单文件 388KB
- 图片使用 `loading="lazy"` 懒加载，首次访问时图片随滚动逐步加载
- 如需更换产品图片，替换 `assets/japan-products/` 下同名文件即可，无需修改 HTML
- 新增图片建议保持在 200KB 以下，最长边 ≤ 1200px

### GitHub Pages

- 仓库名为 `hummel-`（含尾部连字符），URL 为 `https://williamzz-test.github.io/hummel-/`
- 推送代码后 Pages 会在 1-2 分钟内自动重新构建
- `.nojekyll` 文件必须保留，否则 `_shared/` 目录下以下划线开头的文件夹会被 Jekyll 忽略
- Pages 构建模式为 `legacy`（非 Actions），无需配置 CI/CD

### 内容更新

- HTML 报告中所有路径使用 `./` 相对路径，可直接部署到任意子路径下
- 修改图表数据需编辑 `assets/charts.js`，图表 ID 与 HTML 中 `<div id="chart-xxx">` 对应
- 修改文本内容直接编辑 `index.html`（建议同步更新 `hummel-repositioning.html`）

### 数据时效性

- 日本市场数据基于 SSK 2025 财年报告，汇率按 100 日元 = 4.2094 元（2026/7/3）
- 竞品数据截至 2025 财年，PUMA 被安踏收购事件需持续关注后续整合动态
- 中国市场趋势数据（Citywalk、薄底鞋等）可能随时间变化，建议每季度更新

---

## 九、后续建议

### 短期（Q1 2026，7-9 月）

1. 完成三平台账号上线与视觉体系落地
2. 启动 KOC 群狼种草，目标 200+ 篇小红书笔记
3. 德训鞋 VM78 内容素材拍摄与投放测试
4. 建立千川投放数据监测看板，校准 ROI 基准

### 中期（Q2-Q3 2026，10 月-2027 年 3 月）

1. 抖音精选联盟启动，佣金设置 ≥20%
2. 千川投放测款，ROI 目标 ≥2.0
3. 薄底鞋新品开发与中国限定联名落地
4. B站品牌故事长片制作与发布

### 长期（Year 2-3）

1. 薄底鞋中国限定款系列化
2. 建立"hummel 骑行者社区"等主题社群
3. 线下体验店升级
4. 可持续系列成为品牌壁垒

### 报告维护

1. 每季度更新竞品数据和市场趋势
2. 根据实际销售数据校准 GMV 漏斗模型参数
3. 日本市场数据建议每年 SSK 财报发布后更新
4. 如需新增章节，参照现有 ECharts + Markdown 引用模式

---

## 十、核心数据来源

| 数据域 | 来源 |
|--------|------|
| 丹麦文化 | World Happiness Report 2026、Copenhagenize Index、丹麦统计局 |
| 中国市场 | 艾瑞咨询运动鞋服报告、小红书数据中心、天猫运动户外行业报告 |
| 竞品财务 | 各品牌 2025 年报/财报（NB、adidas、PUMA、ASICS、On、Salomon、HOKA、MUJI、迅销） |
| 日本市场 | SSK Holdings 2025 财年有価証券報告書、hummel.co.jp、hummel00.jp、Amazon Japan、日本时尚媒体 |
| 品牌 heritage | hummel 丹麦官网品牌历史页面 |
