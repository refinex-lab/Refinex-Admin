"use client"

import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const blogs = [
    {
      id: 1,
      image: 'https://ui.shadcn.com/placeholder.svg',
      category: '技术',
      title: 'AI开发催化剂',
      description:
        '探索 AI 驱动工具如何改变软件开发工作流程并加速创新。',
    },
    {
      id: 2,
      image: 'https://ui.shadcn.com/placeholder.svg',
      category: '生活方式',
      title: '极简生活指南',
      description:
        '极简生活方式可以帮助减轻压力，创造更有意义的日常体验。',
    },
    {
      id: 3,
      image: 'https://ui.shadcn.com/placeholder.svg',
      category: '设计',
      title: '无障碍 UI 趋势',
      description:
        '现代 UI 趋势如何在保持简洁直观用户体验的同时拥抱无障碍设计。',
    },
  ]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">最新洞察</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            来自我们的博客
          </h2>
          <p className="text-lg text-muted-foreground">
            紧跟最新趋势、最佳实践，以及我们专家团队的洞察见解。
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {blogs.map(blog => (
            <Card key={blog.id} className="overflow-hidden py-0">
              <CardContent className="px-0">
                <div className="aspect-video">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="size-full object-cover dark:invert dark:brightness-[0.95]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-muted-foreground text-xs tracking-widest uppercase">
                    {blog.category}
                  </p>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="cursor-pointer"
                  >
                    <h3 className="text-xl font-bold hover:text-primary transition-colors">{blog.title}</h3>
                  </a>
                  <p className="text-muted-foreground">{blog.description}</p>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer"
                  >
                    了解更多
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
