<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=Refinex-Admin&fontSize=52&fontColor=fff&animation=twinkling&fontAlignY=36&desc=Enterprise%20AI%20Platform%20Admin%20Dashboard%20%C2%B7%20React%20%2B%20Vite%20%2B%20shadcn%2Fui%20v3%20%2B%20Tailwind%20CSS%20v4&descAlignY=58&descSize=16" alt="Refinex-Admin Banner" width="100%"/>

<br/>

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19"/>
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
</p>

<p>
  <img src="https://img.shields.io/badge/shadcn%2Fui-v3-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui v3"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4"/>
  <img src="https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router v7"/>
</p>

<p>
  <img src="https://img.shields.io/github/stars/refinex-lab/Refinex-Admin?style=for-the-badge&color=FFD700&logo=github" alt="Stars"/>
  <img src="https://img.shields.io/github/forks/refinex-lab/Refinex-Admin?style=for-the-badge&color=1E90FF&logo=git&logoColor=white" alt="Forks"/>
  <img src="https://img.shields.io/github/issues/refinex-lab/Refinex-Admin?style=for-the-badge&color=FF6B6B&logo=github&logoColor=white" alt="Issues"/>
  <img src="https://img.shields.io/github/license/refinex-lab/Refinex-Admin?style=for-the-badge&color=4CAF50" alt="License"/>
  <img src="https://img.shields.io/github/last-commit/refinex-lab/Refinex-Admin?style=for-the-badge&color=9C27B0&logo=git&logoColor=white" alt="Last Commit"/>
</p>

<br/>

**Refinex-Admin** 是 Refinex 平台的后台管理前端，基于 **shadcn/ui v3 + Tailwind CSS v4** 构建，深度对接 **Refinex-Cloud** 企业级 AI 微服务后端。覆盖用户权限管理、AI 对话监控、知识库管理、Agent 编排、多媒体任务追踪、系统配置等完整管理场景，致力于提供极致流畅的后台管理体验。

<br/>

[🚀 快速开始](#-快速开始) · [📐 项目结构](#-项目结构) · [✨ 功能模块](#-功能模块) · [🛠 技术栈](#-技术栈) · [🤝 贡献指南](#-贡献指南)

<br/>

</div>

## 🔗 相关项目

本仓库为 Refinex 平台的**后台管理前端**，与后端服务及用户端前端共同构成完整的全栈 AI 平台。

<table>
  <thead>
    <tr>
      <th>项目</th>
      <th>仓库地址</th>
      <th>描述</th>
      <th>核心技术</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>⚙️ Refinex-Cloud</b></td>
      <td><a href="https://github.com/refinex-lab/Refinex-Cloud"><code>refinex-lab/Refinex-Cloud</code></a></td>
      <td>企业级 AI 微服务后端平台，提供 AI 对话、RAG 知识库、Agent 编排、多模态媒体生成等核心能力</td>
      <td>Spring Cloud Alibaba · Spring AI · Java 21</td>
    </tr>
    <tr>
      <td><b>🖥️ Refinex-Agent</b></td>
      <td><a href="https://github.com/refinex-lab/Refinex-Agent"><code>refinex-lab/Refinex-Agent</code></a></td>
      <td>面向 AI Agent 交互场景深度设计的现代化用户端前端，以极致视觉体验驱动对话、知识库管理与多媒体创作</td>
      <td>shadcn/ui · Tailwind CSS v4 · AI Elements</td>
    </tr>
    <tr>
      <td><b>🔧 Refinex-Admin</b></td>
      <td><a href="https://github.com/refinex-lab/Refinex-Admin"><code>refinex-lab/Refinex-Admin</code></a></td>
      <td>本仓库 — 企业级 AI 平台后台管理系统</td>
      <td>React · Vite · shadcn/ui v3 · Tailwind CSS v4</td>
    </tr>
  </tbody>
</table>

> 📖 完整使用文档、部署指南及 API 参考请访问 **[www.refinex.cn](https://www.refinex.cn)**

## ✨ 功能模块

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🔐 权限与用户管理</h3>
      <ul>
        <li>用户列表、角色分配、账号启停管理</li>
        <li>RBAC 角色权限模型，细粒度菜单与数据权限配置</li>
        <li>部门/组织架构管理</li>
        <li>操作日志审计，登录记录追踪</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>🤖 AI 对话管理</h3>
      <ul>
        <li>会话记录查看与管理，支持多模型筛选</li>
        <li>模型提供商配置（OpenAI、通义千问、Ollama 等）</li>
        <li>系统 Prompt 模板管理与角色预设配置</li>
        <li>Token 用量统计与费用分析</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>📚 知识库管理</h3>
      <ul>
        <li>知识库创建、文档上传与解析状态监控</li>
        <li>向量化任务进度追踪</li>
        <li>召回测试与相关度评分可视化</li>
        <li>分块策略配置与文档版本管理</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>🛠 Agent & MCP 管理</h3>
      <ul>
        <li>Agent 列表管理与工作流配置</li>
        <li>工具集注册与 MCP Server 配置</li>
        <li>Agent 执行记录与调用链追踪</li>
        <li>工作流可视化设计与调试</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🎨 多媒体任务管理</h3>
      <ul>
        <li>文生图 / 文生视频任务队列监控</li>
        <li>TTS 语音合成任务管理</li>
        <li>文件存储（MinIO/OSS）资源管理</li>
        <li>异步任务状态实时追踪</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>⚙️ 系统配置</h3>
      <ul>
        <li>字典数据、系统参数配置</li>
        <li>通知公告、定时任务（XXL-Job）管理</li>
        <li>服务健康监控与 JVM 指标看板</li>
        <li>接口限流与 Sentinel 规则配置</li>
      </ul>
    </td>
  </tr>
</table>

## 📐 项目结构

```text
📁 Refinex-Admin/
├── 📁 src/
│   ├── 📁 app/                   # 页面模块（按业务域划分）
│   │   ├── 📁 auth/              # 登录 / 注册 / 找回密码（3 套样式）
│   │   ├── 📁 dashboard/         # 数据总览仪表盘
│   │   ├── 📁 dashboard-2/       # 数据总览仪表盘（备选布局）
│   │   ├── 📁 users/             # 用户管理
│   │   ├── 📁 tasks/             # 任务管理（含高级数据表格）
│   │   ├── 📁 chat/              # 消息 / 会话管理
│   │   ├── 📁 mail/              # 邮件 / 通知管理
│   │   ├── 📁 calendar/          # 日历 / 日程管理
│   │   ├── 📁 settings/          # 系统设置（账号、外观、计费、通知）
│   │   ├── 📁 faqs/              # 帮助与常见问题
│   │   ├── 📁 pricing/           # 套餐与计费页
│   │   ├── 📁 landing/           # 平台落地页
│   │   └── 📁 errors/            # 错误页（401 / 403 / 404 / 500 / 维护中）
│   ├── 📁 components/            # 公共组件
│   │   ├── 📁 ui/                # shadcn/ui v3 基础组件
│   │   ├── 📁 layouts/           # 布局组件
│   │   ├── 📁 landing/           # 落地页专用组件
│   │   └── 📁 theme-customizer/  # 实时主题编辑器
│   ├── 📁 config/                # 路由、主题常量配置
│   ├── 📁 contexts/              # React Context（侧边栏、主题）
│   ├── 📁 hooks/                 # 自定义 Hooks
│   ├── 📁 lib/                   # 工具函数
│   └── 📁 types/                 # TypeScript 类型定义
├── 📁 public/                    # 静态资源
├── 📄 index.html
├── 📄 vite.config.ts
├── 📄 tsconfig.json
└── 📄 package.json
```

## 🛠 技术栈

<table>
  <thead>
    <tr>
      <th>分类</th>
      <th>技术</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>核心框架</b></td>
      <td>React 19 + TypeScript 5.x + Vite 7.x</td>
      <td>并发特性 · 完整类型安全 · 极速构建</td>
    </tr>
    <tr>
      <td><b>UI 组件库</b></td>
      <td>shadcn/ui v3 + Radix UI</td>
      <td>最新版组件 · 可访问性原语</td>
    </tr>
    <tr>
      <td><b>样式</b></td>
      <td>Tailwind CSS v4 + tw-animate-css</td>
      <td>原子化 CSS · 动画扩展</td>
    </tr>
    <tr>
      <td><b>路由</b></td>
      <td>React Router v7</td>
      <td>客户端路由</td>
    </tr>
    <tr>
      <td><b>表单与校验</b></td>
      <td>React Hook Form + Zod v4</td>
      <td>高性能表单 · Schema 校验</td>
    </tr>
    <tr>
      <td><b>数据表格</b></td>
      <td>TanStack Table v8</td>
      <td>排序 · 筛选 · 分页 · 虚拟滚动</td>
    </tr>
    <tr>
      <td><b>图表</b></td>
      <td>Recharts</td>
      <td>可组合式图表库</td>
    </tr>
    <tr>
      <td><b>拖拽</b></td>
      <td>@dnd-kit</td>
      <td>可访问性优先的拖拽方案</td>
    </tr>
    <tr>
      <td><b>状态管理</b></td>
      <td>Zustand v5</td>
      <td>轻量全局状态</td>
    </tr>
    <tr>
      <td><b>主题</b></td>
      <td>next-themes + tweakcn</td>
      <td>暗色模式 · 实时主题定制</td>
    </tr>
    <tr>
      <td><b>图标</b></td>
      <td>Lucide React</td>
      <td>一致性 SVG 图标库</td>
    </tr>
    <tr>
      <td><b>代码规范</b></td>
      <td>ESLint + Prettier + TypeScript</td>
      <td>统一代码风格</td>
    </tr>
  </tbody>
</table>

## 🚀 快速开始

### 环境要求

| 依赖 | 最低版本 |
|------|---------|
| Node.js | 18.x+ |
| pnpm | 8.x+（推荐）|

### 第一步：克隆仓库

```bash
git clone https://github.com/refinex-lab/Refinex-Admin.git
cd Refinex-Admin
```

### 第二步：安装依赖

```bash
pnpm install
```

### 第三步：配置环境变量

```bash
cp .env.example .env
```

根据实际环境修改 `.env` 中的后端接口地址等配置：

```env
VITE_API_BASE_URL=http://localhost:9000
```

### 第四步：启动开发服务器

```bash
pnpm dev
```

启动完成后，访问 `http://localhost:5173` 即可使用。

### 常用命令

```bash
pnpm dev        # 启动开发服务器
pnpm build      # 生产构建
pnpm preview    # 预览生产构建
pnpm lint       # 运行 ESLint
```

> 如需对接 Refinex-Cloud 后端，请参阅 **[后端仓库](https://github.com/refinex-lab/Refinex-Cloud)** 中的快速开始指南完成后端服务的部署。

## 🗺 路线图

<table>
  <tr>
    <td align="center" width="33%"><b>✅ 已完成</b></td>
    <td align="center" width="33%"><b>🚧 进行中</b></td>
    <td align="center" width="33%"><b>📋 规划中</b></td>
  </tr>
  <tr>
    <td valign="top">
      &nbsp;✔&nbsp; 基础仪表盘 & 数据概览<br/>
      &nbsp;✔&nbsp; 登录 / 注册 / 找回密码页面<br/>
      &nbsp;✔&nbsp; 用户管理基础界面<br/>
      &nbsp;✔&nbsp; 系统设置（账号、外观、通知）<br/>
      &nbsp;✔&nbsp; 实时主题定制器<br/>
      &nbsp;✔&nbsp; 暗色模式支持<br/>
      &nbsp;✔&nbsp; 响应式布局
    </td>
    <td valign="top">
      &nbsp;⚙&nbsp; 对接 Refinex-Cloud 认证接口<br/>
      &nbsp;⚙&nbsp; RBAC 权限菜单动态渲染<br/>
      &nbsp;⚙&nbsp; AI 对话会话管理页面<br/>
      &nbsp;⚙&nbsp; 知识库文档管理页面<br/>
      &nbsp;⚙&nbsp; 多媒体任务队列监控<br/>
      &nbsp;⚙&nbsp; 系统日志审计页面
    </td>
    <td valign="top">
      &nbsp;📌&nbsp; Agent 工作流可视化配置<br/>
      &nbsp;📌&nbsp; MCP Server/Client 管理<br/>
      &nbsp;📌&nbsp; AI 用量统计与计费看板<br/>
      &nbsp;📌&nbsp; Sentinel 限流规则可视化<br/>
      &nbsp;📌&nbsp; 多租户管理支持<br/>
      &nbsp;📌&nbsp; 多语言国际化（i18n）
    </td>
  </tr>
</table>

## 🤝 贡献指南

我们热忱欢迎来自社区的任何形式贡献，无论是功能开发、问题修复还是文档完善。

```bash
# 1. Fork 本仓库并克隆到本地
git clone https://github.com/<your-username>/Refinex-Admin.git

# 2. 基于 master 分支创建功能分支
git checkout -b feat/your-feature-name

# 3. 完成开发后提交（遵循 Conventional Commits 规范）
git commit -m "feat(dashboard): add AI usage statistics chart"

# 4. 推送分支并在 GitHub 上创建 Pull Request
git push origin feat/your-feature-name
```

**Commit 类型约定：** `feat` 新功能 · `fix` 缺陷修复 · `docs` 文档变更 · `refactor` 代码重构 · `perf` 性能优化 · `style` 样式调整 · `chore` 构建 / 工具变更

## 📄 许可证

本项目基于 [MIT License](./LICENSE) 开源协议发布，可免费用于个人与商业项目。

本项目基于 [shadcn-dashboard-landing-template](https://github.com/shadcnstore/shadcn-dashboard-landing-template) 进行二次开发，感谢原作者的出色工作。

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%"/>

<br/>

如果 Refinex-Admin 对你有所帮助，欢迎点亮 ⭐ **Star** 支持我们，这是对开源最直接的鼓励。

<br/>

**Made with ❤️ by the [Refinex Team](https://www.refinex.cn)**

</div>
