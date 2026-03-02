"use client"

import {
  BarChart3,
  Zap,
  Users,
  ArrowRight,
  Database,
  Package,
  Crown,
  Layout,
  Palette
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Image3D } from '@/components/image-3d'

const mainFeatures = [
  {
    icon: Package,
    title: '精选组件库',
    description: '精心挑选的组件块和模板，质量可靠、性能稳定。'
  },
  {
    icon: Crown,
    title: '免费与高级版本',
    description: '从免费版开始，按需升级到高级合集。'
  },
  {
    icon: Layout,
    title: '即用模板',
    description: '复制即用，开箱即可运行的组件。'
  },
  {
    icon: Zap,
    title: '定期更新',
    description: '每周新增组件块和模板，持续保持最新。'
  }
]

const secondaryFeatures = [
  {
    icon: BarChart3,
    title: '多框架支持',
    description: '兼容 React、Next.js 和 Vite，灵活开发。'
  },
  {
    icon: Palette,
    title: '现代技术栈',
    description: '基于 shadcn/ui、Tailwind CSS 和 TypeScript 构建。'
  },
  {
    icon: Users,
    title: '响应式设计',
    description: '移动端优先，适配所有屏幕尺寸和设备。'
  },
  {
    icon: Database,
    title: '开发者友好',
    description: '代码简洁、文档完善，易于集成和自定义。'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">市场功能</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            构建出色网络应用所需的一切
          </h2>
          <p className="text-lg text-muted-foreground">
            我们的市场提供精选的组件块、模板、落地页和管理后台，帮助您比以往更快地构建专业应用。
          </p>
        </div>

        {/* First Feature Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-24">
          {/* Left Image */}
          <Image3D
            lightSrc="feature-1-light.png"
            darkSrc="feature-1-dark.png"
            alt="分析仪表板"
            direction="left"
          />
          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                加速开发的组件
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                我们的精选市场提供优质的组件块和模板，旨在节省时间并确保管理项目的一致性。
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {mainFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer">
                <a href="https://shadcnstore.com/templates" className='flex items-center'>
                  浏览模板
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                <a href="https://shadcnstore.com/blocks">
                  查看组件
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Second Feature Section - Flipped Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                为现代开发工作流构建
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                每个组件都遵循最佳实践，采用 TypeScript、响应式设计和简洁的代码架构，可无缝集成到您的项目中。
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {secondaryFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer">
                <a href="#" className='flex items-center'>
                  查看文档
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                <a href="https://github.com/silicondeck/shadcn-dashboard-landing-template" target="_blank" rel="noopener noreferrer">
                  GitHub 仓库
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <Image3D
            lightSrc="feature-2-light.png"
            darkSrc="feature-2-dark.png"
            alt="性能仪表板"
            direction="right"
            className="order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  )
}
