"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { Github, Code, Palette, Layout, Crown } from 'lucide-react'

const values = [
  {
    icon: Code,
    title: '开发者优先',
    description: '每个组件都以开发者体验为核心构建，确保代码简洁、集成便捷。'
  },
  {
    icon: Palette,
    title: '卓越设计',
    description: '我们坚守最高设计标准，遵循 shadcn/ui 原则和现代 UI 设计模式。'
  },
  {
    icon: Layout,
    title: '生产就绪',
    description: '经过实际应用验证的组件，在不同环境中具备可靠的性能与稳定性。'
  },
  {
    icon: Crown,
    title: '高级品质',
    description: '精心打造，注重细节与性能优化，确保卓越的用户体验和可访问性。'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            关于 ShadcnStore
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            由开发者为开发者构建
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            我们热衷于为 shadcn/ui 组件和模板打造最佳市场。我们的使命是加速开发，帮助开发者更快地构建美观的管理界面。
          </p>
        </div>

        {/* Modern Values Grid with Enhanced Design */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 mb-12">
          {values.map((value, index) => (
            <Card key={index} className='group shadow-xs py-2'>
              <CardContent className='p-8'>
                <div className='flex flex-col items-center text-center'>
                  <CardDecorator>
                    <value.icon className='h-6 w-6' aria-hidden />
                  </CardDecorator>
                  <h3 className='mt-6 font-medium text-balance'>{value.title}</h3>
                  <p className='text-muted-foreground mt-3 text-sm'>{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-muted-foreground">❤️ 为开发者社区用心打造</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cursor-pointer" asChild>
              <a href="https://github.com/silicondeck/shadcn-dashboard-landing-template" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                在 GitHub 上加星
              </a>
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer" asChild>
              <a href="https://discord.com/invite/XEQhPc9a6p" target="_blank" rel="noopener noreferrer">
                加入 Discord 社区
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
