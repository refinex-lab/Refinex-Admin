"use client"

import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function InternalServerError() {
  const navigate = useNavigate()

  return (
    <div className='mx-auto flex min-h-dvh flex-col items-center justify-center gap-8 p-8 md:gap-12 md:p-16'>
      <img
        src='https://ui.shadcn.com/placeholder.svg'
        alt='占位图'
        className='aspect-video w-240 rounded-xl object-cover dark:brightness-[0.95] dark:invert'
      />
      <div className='text-center'>
        <h1 className='mb-4 text-3xl font-bold'>500</h1>
        <h2 className="mb-3 text-2xl font-semibold">服务器内部错误</h2>
        <p>服务器出现错误，我们正在处理。请稍后重试。</p>
        <div className='mt-6 flex items-center justify-center gap-4 md:mt-8'>
          <Button className='cursor-pointer' onClick={() => navigate('/dashboard')}>返回首页</Button>
          <Button variant='outline' className='flex cursor-pointer items-center gap-1' onClick={() => navigate('')}>
            联系我们
          </Button>
        </div>
      </div>
    </div>
  )
}
