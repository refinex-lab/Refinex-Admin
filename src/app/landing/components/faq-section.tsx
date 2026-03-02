"use client"

import { CircleHelp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

type FaqItem = {
  value: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    value: 'item-1',
    question: '如何将 ShadcnStore 组件集成到我的项目中？',
    answer:
      '集成非常简单！我们所有的组件都基于 shadcn/ui 构建，兼容 React、Next.js 和 Vite。只需复制组件代码，安装所需依赖项，然后粘贴到您的项目中即可。每个组件都附有详细的安装说明和示例。',
  },
  {
    value: 'item-2',
    question: '免费组件和高级组件有什么区别？',
    answer:
      '免费组件包含基础 UI 元素，如按钮、表单和基本布局。高级组件提供高级功能，如复杂数据表格、分析仪表板、身份验证流程和完整的管理模板。高级版还包括 Figma 文件、优先支持和商业许可证。',
  },
  {
    value: 'item-3',
    question: '我可以在商业项目中使用这些组件吗？',
    answer:
      '当然可以！免费组件采用 MIT 许可证，可无限制使用。高级组件包含商业许可证，允许在客户项目、SaaS 应用程序和商业产品中使用，无需署名要求。',
  },
  {
    value: 'item-4',
    question: '你们提供支持和更新吗？',
    answer:
      '当然！我们通过 Discord 服务器和 GitHub Issues 为免费组件提供社区支持。高级订阅者可获得优先邮件支持、定期组件更新以及新版本抢先体验。我们还保持与最新 shadcn/ui 版本的兼容性。',
  },
  {
    value: 'item-5',
    question: '你们支持哪些框架和工具？',
    answer:
      '我们的组件兼容 React 18+、Next.js 13+ 和 Vite。我们使用 TypeScript、Tailwind CSS，并遵循 shadcn/ui 规范。组件经过 React Hook Form、TanStack Query 和 Zustand 等主流状态管理工具的测试验证。',
  },
  {
    value: 'item-6',
    question: '你们多久发布新组件？',
    answer:
      '我们每周发布新的组件和模板。高级订阅者可抢先体验新版本，而免费组件则会根据社区反馈定期更新。您可以通过我们的 GitHub 仓库跟踪路线图并提出特定组件请求。',
  },
]

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">常见问题</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            常见问题解答
          </h2>
          <p className="text-lg text-muted-foreground">
            关于 ShadcnStore 组件、许可证和集成的一切您需要了解的内容。还有疑问？我们随时为您解答！
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className='bg-transparent'>
            <div className='p-0'>
              <Accordion type='single' collapsible className='space-y-5'>
                {faqItems.map(item => (
                  <AccordionItem key={item.value} value={item.value} className='rounded-md !border bg-transparent'>
                    <AccordionTrigger className='cursor-pointer items-center gap-4 rounded-none bg-transparent py-2 ps-3 pe-4 hover:no-underline data-[state=open]:border-b'>
                      <div className='flex items-center gap-4'>
                        <div className='bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full'>
                          <CircleHelp className='size-5' />
                        </div>
                        <span className='text-start font-semibold'>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='p-4 bg-transparent'>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              还有疑问？我们随时为您解答。
            </p>
            <Button className='cursor-pointer' asChild>
              <a href="#contact">
                联系支持
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FaqSection }
