"use client"

import { 
  Clock,
  Users,
  Plus,
  Settings,
  Download,
  Share,
  Bell
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface QuickActionsProps {
  onNewEvent?: () => void
  onNewMeeting?: () => void
  onNewReminder?: () => void
  onSettings?: () => void
}

export function QuickActions({ 
  onNewEvent, 
  onNewMeeting, 
  onNewReminder, 
  onSettings 
}: QuickActionsProps) {
  const quickStats = [
    { label: "今日事件", value: "3", color: "bg-blue-500" },
    { label: "本周", value: "12", color: "bg-green-500" },
    { label: "待处理", value: "2", color: "bg-orange-500" }
  ]

  return (
    <div className="space-y-4">
      {/* Quick Stats */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">概览</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {quickStats.map((stat, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${stat.color}`} />
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
              <Badge variant="secondary">{stat.value}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">快捷操作</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button 
            variant="outline" 
            className="w-full justify-start cursor-pointer" 
            onClick={onNewEvent}
          >
            <Plus className="w-4 h-4 mr-2" />
            新建事件
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start cursor-pointer" 
            onClick={onNewMeeting}
          >
            <Users className="w-4 h-4 mr-2" />
            安排会议
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start cursor-pointer" 
            onClick={onNewReminder}
          >
            <Bell className="w-4 h-4 mr-2" />
            设置提醒
          </Button>

          <Separator className="my-3" />

          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start cursor-pointer" 
          >
            <Share className="w-4 h-4 mr-2" />
            共享日历
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start cursor-pointer" 
          >
            <Download className="w-4 h-4 mr-2" />
            导出
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start cursor-pointer" 
            onClick={onSettings}
          >
            <Settings className="w-4 h-4 mr-2" />
            设置
          </Button>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Clock className="w-4 h-4" />
            即将发生
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">团队站会</p>
                <p className="text-xs text-muted-foreground">上午 9:00 • 会议室A</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">设计评审</p>
                <p className="text-xs text-muted-foreground">下午 2:00 • 线上</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
