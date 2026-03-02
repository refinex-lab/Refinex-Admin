"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"

export function ForgotPasswordForm3({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex justify-center mb-2">
                <a href="/" className="flex items-center gap-2 font-medium">
                  <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
                    <Logo size={24} />
                  </div>
                  <span className="text-xl">ShadcnStore</span>
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">忘记密码？</h1>
                <p className="text-muted-foreground text-balance">
                  请输入邮箱以重置您的 ShadcnStore 账号密码
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">邮箱</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full cursor-pointer">
                发送重置链接
              </Button>
              <div className="text-center text-sm">
                想起密码了？{" "}
                <a href="/templates/dashboard/shadcn-dashboard-landing-template/auth/sign-in-3" className="underline underline-offset-4">
                  返回登录
                </a>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.95] dark:invert"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        点击继续，即表示您同意我们的 <a href="#">服务条款</a>{" "}
        和 <a href="#">隐私政策</a>。
      </div>
    </div>
  )
}
