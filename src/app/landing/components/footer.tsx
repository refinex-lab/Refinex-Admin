"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Logo } from '@/components/logo'
import { Github, Twitter, Linkedin, Youtube, Heart } from 'lucide-react'

const newsletterSchema = z.object({
  email: z.string().email({
    message: "请输入有效的邮箱地址。",
  }),
})

const footerLinks = {
  product: [
    { name: '功能', href: '#features' },
    { name: '定价', href: '#pricing' },
    { name: 'API', href: '#api' },
    { name: '文档', href: '#docs' },
  ],
  company: [
    { name: '关于', href: '#about' },
    { name: '博客', href: '#blog' },
    { name: '招聘', href: '#careers' },
    { name: '媒体', href: '#press' },
  ],
  resources: [
    { name: '帮助中心', href: '#help' },
    { name: '社区', href: '#community' },
    { name: '指南', href: '#guides' },
    { name: '网络研讨会', href: '#webinars' },
  ],
  legal: [
    { name: '隐私政策', href: '#privacy' },
    { name: '服务条款', href: '#terms' },
    { name: '安全', href: '#security' },
    { name: '状态', href: '#status' },
  ],
}

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/silicondeck/shadcn-dashboard-landing-template', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export function LandingFooter() {
  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof newsletterSchema>) {
    // Here you would typically send the email to your newsletter service
    console.log(values)
    // Show success message and reset form
    form.reset()
  }

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="mb-16">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">保持更新</h3>
            <p className="text-muted-foreground mb-6">
              每周获取最新动态、文章和资源，直接发送到您的邮箱。
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 max-w-md mx-auto sm:flex-row">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="请输入您的邮箱"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="cursor-pointer">订阅</Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-8 grid-cols-4 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="col-span-4 lg:col-span-2 max-w-2xl">
            <div className="flex items-center space-x-2 mb-4 max-lg:justify-center">
              <a href="https://shadcnstore.com" target='_blank' className="flex items-center space-x-2 cursor-pointer">
                <Logo size={32} />
                <span className="font-bold text-xl">ShadcnStore</span>
              </a>
            </div>
            <p className="text-muted-foreground mb-6 max-lg:text-center max-lg:flex max-lg:justify-center">
              Accelerating web development with curated blocks, templates, landing pages, and admin dashboards designed for modern developers.
            </p>
            <div className="flex space-x-4 max-lg:justify-center">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <a
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className='max-md:col-span-2 lg:col-span-1'>
            <h4 className="font-semibold mb-4">产品</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='max-md:col-span-2 lg:col-span-1'>
            <h4 className="font-semibold mb-4">公司</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='max-md:col-span-2 lg:col-span-1'>
            <h4 className="font-semibold mb-4">资源</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='max-md:col-span-2 lg:col-span-1'>
            <h4 className="font-semibold mb-4">法律</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <span>用</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>心打造，作者</span>
              <a href="https://shadcnstore.com" target='_blank' className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                ShadcnStore
              </a>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>© {new Date().getFullYear()} 为开发者社区</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-foreground transition-colors">
              隐私政策
            </a>
            <a href="#terms" className="hover:text-foreground transition-colors">
              服务条款
            </a>
            <a href="#cookies" className="hover:text-foreground transition-colors">
              Cookie 政策
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
