"use client"

import * as React from "react"
import {
  LayoutPanelLeft,
  LayoutDashboard,
  Mail,
  CheckSquare,
  MessageCircle,
  Calendar,
  Shield,
  AlertTriangle,
  Settings,
  HelpCircle,
  CreditCard,
  LayoutTemplate,
  Users,
} from "lucide-react"
import { Link } from "react-router-dom"
import { Logo } from "@/components/logo"
import { SidebarNotification } from "@/components/sidebar-notification"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "ShadcnStore",
    email: "store@example.com",
    avatar: "",
  },
  navGroups: [
    {
      label: "仪表盘",
      items: [
        {
          title: "仪表盘 1",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "仪表盘 2",
          url: "/dashboard-2",
          icon: LayoutPanelLeft,
        },
      ],
    },
    {
      label: "应用",
      items: [
        {
          title: "邮件",
          url: "/mail",
          icon: Mail,
        },
        {
          title: "任务",
          url: "/tasks",
          icon: CheckSquare,
        },
        {
          title: "消息",
          url: "/chat",
          icon: MessageCircle,
        },
        {
          title: "日历",
          url: "/calendar",
          icon: Calendar,
        },
        {
          title: "用户管理",
          url: "/users",
          icon: Users,
        },
      ],
    },
    {
      label: "页面",
      items: [
        {
          title: "落地页",
          url: "/landing",
          target: "_blank",
          icon: LayoutTemplate,
        },
        {
          title: "认证页面",
          url: "#",
          icon: Shield,
          items: [
            {
              title: "登录 1",
              url: "/auth/sign-in",
            },
            {
              title: "登录 2",
              url: "/auth/sign-in-2",
            },
            {
              title: "登录 3",
              url: "/auth/sign-in-3",
            },
            {
              title: "注册 1",
              url: "/auth/sign-up",
            },
            {
              title: "注册 2",
              url: "/auth/sign-up-2",
            },
            {
              title: "注册 3",
              url: "/auth/sign-up-3",
            },
            {
              title: "忘记密码 1",
              url: "/auth/forgot-password",
            },
            {
              title: "忘记密码 2",
              url: "/auth/forgot-password-2",
            },
            {
              title: "忘记密码 3",
              url: "/auth/forgot-password-3",
            }
          ],
        },
        {
          title: "错误页面",
          url: "#",
          icon: AlertTriangle,
          items: [
            {
              title: "未授权",
              url: "/errors/unauthorized",
            },
            {
              title: "禁止访问",
              url: "/errors/forbidden",
            },
            {
              title: "页面未找到",
              url: "/errors/not-found",
            },
            {
              title: "服务器内部错误",
              url: "/errors/internal-server-error",
            },
            {
              title: "维护中",
              url: "/errors/under-maintenance",
            },
          ],
        },
        {
          title: "设置",
          url: "#",
          icon: Settings,
          items: [
            {
              title: "用户设置",
              url: "/settings/user",
            },
            {
              title: "账号设置",
              url: "/settings/account",
            },
            {
              title: "套餐与账单",
              url: "/settings/billing",
            },
            {
              title: "外观",
              url: "/settings/appearance",
            },
            {
              title: "通知",
              url: "/settings/notifications",
            },
            {
              title: "连接",
              url: "/settings/connections",
            },
          ],
        },
        {
          title: "常见问题",
          url: "/faqs",
          icon: HelpCircle,
        },
        {
          title: "定价",
          url: "/pricing",
          icon: CreditCard,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Logo size={24} className="text-current" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">ShadcnStore</span>
                  <span className="truncate text-xs">管理后台</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {data.navGroups.map((group) => (
          <NavMain key={group.label} label={group.label} items={group.items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarNotification />
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
