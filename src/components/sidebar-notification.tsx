"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from "./logo"

export function SidebarNotification() {
  const [isVisible, setIsVisible] = React.useState(true)

  if (!isVisible) return null

  return (
    <Card className="mb-3 py-0 border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800">
      <CardContent className="p-4 relative">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 h-6 w-6 p-0 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-3 w-3" />
          <span className="sr-only">关闭通知</span>
        </Button>
        
        <div className="pr-6">
          <h3 className="flex items-center gap-3 font-semibold text-neutral-900 dark:text-neutral-100 mb-2 mt-1">
            <Logo size={42} className="-mt-1" />
            <div>
              欢迎使用{" "}
              <a 
                href="https://shadcnstore.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ShadcnStore
              </a>
            </div>
          </h3>
          <p className="text-sm text-muted-foreground dark:text-neutral-400 leading-relaxed">
            探索我们的精品 Shadcn UI{" "}
            <a 
              href="https://shadcnstore.com/blocks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              组件块
            </a>{" "}
            ，助力您更快地构建下一个项目。
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
