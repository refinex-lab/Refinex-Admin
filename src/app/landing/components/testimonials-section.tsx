"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Alexandra Mitchell',
    role: '高级前端开发工程师',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-1',
    quote:
      '这个平台彻底改变了我们的开发工作流程。组件系统架构精良，即使是复杂的应用程序也变得简单易建。',
  },
  {
    name: 'James Thompson',
    role: '技术负责人',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-1',
    quote: '尝试了无数框架之后，这是真正让我豁然开朗的那一个。文档质量卓越。',
  },
  {
    name: 'Priya Sharma',
    role: '产品设计师',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-2',
    quote:
      '设计系统美观而统一。我可以快速原型化想法，并自信地交付给开发者，确信实现效果与设计完美匹配。',
  },
  {
    name: 'Robert Kim',
    role: '工程总监',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-2',
    quote:
      '我们仅用两周就完成了整个应用的迁移，性能提升立竿见影。',
  },
  {
    name: 'Maria Santos',
    role: '全栈工程师',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-3',
    quote:
      '无障碍功能一流，构建包容性应用从未如此简便。每个组件都遵循最佳实践，自动化测试套件确保我们在整个开发过程中始终保持高可访问性标准。',
  },
  {
    name: 'Thomas Anderson',
    role: '解决方案架构师',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-3',
    quote: '可扩展性是我们最大的顾虑，但这个平台从容应对企业级复杂性。',
  },
  {
    name: 'Lisa Chang',
    role: '用户体验研究员',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-4',
    quote:
      '自从采用这个平台，用户测试结果始终积极向好。用户体验直观，性能出色。自迁移以来，我们的用户满意度得分提升了40%。',
  },
  {
    name: 'Michael Foster',
    role: 'DevOps 工程师',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-4',
    quote: '部署和维护轻而易举，平台与我们的 CI/CD 流水线无缝集成。',
  },
  {
    name: 'Sophie Laurent',
    role: '创意总监',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-5',
    quote:
      '创意空间无限广阔，任何设计概念都能落地实现，且不牺牲技术质量或用户体验。',
  },
  {
    name: 'Daniel Wilson',
    role: '后端开发工程师',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-5',
    quote: 'API 设计卓越，简洁直观，文档完善。',
  },
  {
    name: 'Natasha Petrov',
    role: '移动应用开发工程师',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-6',
    quote:
      '跨平台开发从未如此高效——一套代码库，多个平台，一致的用户体验。这就是未来。响应式设计系统确保我们的应用在每台设备上都完美呈现。',
  },
  {
    name: 'Carlos Rivera',
    role: '创业公司创始人',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-6',
    quote: '作为非技术背景的创始人，这个平台让我有信心快速构建我们的 MVP。',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container mx-auto px-8 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">用户评价</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            赋能全球创新
          </h2>
          <p className="text-lg text-muted-foreground">
            加入数千名开发者和团队，信赖我们的平台构建卓越的数字体验。
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 md:gap-6 lg:columns-3 lg:gap-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="mb-6 break-inside-avoid shadow-none lg:mb-4">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="bg-muted size-12 shrink-0">
                    <AvatarImage
                      alt={testimonial.name}
                      src={testimonial.image}
                      loading="lazy"
                      width="120"
                      height="120"
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <a href="#" onClick={e => e.preventDefault()} className="cursor-pointer">
                      <h3 className="font-medium hover:text-primary transition-colors">{testimonial.name}</h3>
                    </a>
                    <span className="text-muted-foreground block text-sm tracking-wide">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                <blockquote className="mt-4">
                  <p className="text-sm leading-relaxed text-balance">{testimonial.quote}</p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
