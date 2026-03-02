"use client"

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState } from 'react'

const plans = [
  {
    name: '免费版',
    description: '适合初学者使用基础组件',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      '访问50+免费组件',
      '基础仪表板模板',
      '社区支持',
      'GitHub仓库访问',
      '文档和指南'
    ],
    cta: '立即开始',
    popular: false
  },
  {
    name: '专业版',
    description: '适合需要高级模板和组件的开发者',
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      '高级模板合集',
      '进阶仪表板布局',
      '优先支持',
      '商业使用许可',
      '抢先体验新版本',
      'Figma设计文件',
      '自定义组件请求',
      '直接联系开发者',
      '专属设计资源'
    ],
    cta: '立即开始',
    popular: true,
    includesPrevious: '包含所有免费版功能，另加'
  },
  {
    name: '终身版',
    description: '一次性付款，终身访问所有内容',
    monthlyPrice: 299,
    yearlyPrice: 299,
    features: [
      '终身更新与支持',
      '私人Discord频道',
      '永无后续费用',
      '未来模板访问权',
      'VIP优先支持',
      '专属测试版功能'
    ],
    cta: '立即开始',
    popular: false,
    includesPrevious: '包含所有专业版功能，另加'
  }
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Badge variant="outline" className="mb-4">定价方案</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            选择您的套餐
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            从免费组件开始构建，或升级到专业版以获取高级模板和进阶功能。
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-2">
            <ToggleGroup
              type="single"
              value={isYearly ? "yearly" : "monthly"}
              onValueChange={(value) => setIsYearly(value === "yearly")}
              className="bg-secondary text-secondary-foreground border-none rounded-full p-1 cursor-pointer shadow-none"
            >
              <ToggleGroupItem
                value="monthly"
                className="data-[state=on]:bg-background data-[state=on]:border-border border-transparent border px-6 !rounded-full data-[state=on]:text-foreground hover:bg-transparent cursor-pointer transition-colors"
              >
                按月
              </ToggleGroupItem>
              <ToggleGroupItem
                value="yearly"
                className="data-[state=on]:bg-background data-[state=on]:border-border border-transparent border px-6 !rounded-full data-[state=on]:text-foreground hover:bg-transparent cursor-pointer transition-colors"
              >
                按年
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">节省20%</span> 按年计费
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border">
            <div className="grid lg:grid-cols-3">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`p-8 grid grid-rows-subgrid row-span-4 gap-6 ${
                    plan.popular
                      ? 'my-2 mx-4 rounded-xl bg-card border-transparent shadow-xl ring-1 ring-foreground/10 backdrop-blur'
                      : ''
                  }`}
                >
                  {/* Plan Header */}
                  <div>
                    <div className="text-lg font-medium tracking-tight mb-2">{plan.name}</div>
                    <div className="text-muted-foreground text-balance text-sm">{plan.description}</div>
                  </div>

                  {/* Pricing */}
                  <div>
                    <div className="text-4xl font-bold mb-1">
                      {plan.name === '终身版' ? (
                        `$${plan.monthlyPrice}`
                      ) : plan.name === '免费版' ? (
                        '$0'
                      ) : (
                        `$${isYearly ? plan.yearlyPrice : plan.monthlyPrice}`
                      )}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {plan.name === '终身版' ? '一次性付款' : '每月'}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div>
                    <Button
                      className={`w-full cursor-pointer my-2 ${
                        plan.popular
                          ? 'shadow-md border-[0.5px] border-white/25 shadow-black/20 bg-primary ring-1 ring-primary/15 text-primary-foreground hover:bg-primary/90'
                          : 'shadow-sm shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 hover:bg-muted/50'
                      }`}
                      variant={plan.popular ? 'default' : 'secondary'}
                    >
                      {plan.cta}
                    </Button>
                  </div>

                  {/* Features */}
                  <div>
                    <ul role="list" className="space-y-3 text-sm">
                      {plan.includesPrevious && (
                        <li className="flex items-center gap-3 font-medium">
                          {plan.includesPrevious}:
                        </li>
                      )}
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            需要自定义组件或有疑问？{' '}
            <Button variant="link" className="p-0 h-auto cursor-pointer" asChild>
              <a href="#contact">
                联系我们的团队
              </a>
            </Button>
          </p>
        </div>
      </div>
    </section>
  )
}
