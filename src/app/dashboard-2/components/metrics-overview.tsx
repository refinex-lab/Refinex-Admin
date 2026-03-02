"use client"

import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  ShoppingCart, 
  BarChart3 
} from "lucide-react"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const metrics = [
  {
    title: "总收入",
    value: "$54,230",
    description: "月收入",
    change: "+12%",
    trend: "up",
    icon: DollarSign,
    footer: "本月上升趋势",
    subfooter: "过去6个月收入数据"
  },
  {
    title: "活跃客户",
    value: "2,350",
    description: "总活跃用户数",
    change: "+5.2%", 
    trend: "up",
    icon: Users,
    footer: "用户留存良好",
    subfooter: "参与度超出目标"
  },
  {
    title: "订单总数",
    value: "1,247",
    description: "本月订单",
    change: "-2.1%",
    trend: "down", 
    icon: ShoppingCart,
    footer: "本期下降2%",
    subfooter: "订单量需关注"
  },
  {
    title: "转化率",
    value: "3.24%",
    description: "平均转化率",
    change: "+8.3%",
    trend: "up",
    icon: BarChart3,
    footer: "业绩持续增长",
    subfooter: "符合转化率预期"
  },
]

export function MetricsOverview() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs grid gap-4 sm:grid-cols-2 @5xl:grid-cols-4">
      {metrics.map((metric) => {
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown
        
        return (
          <Card key={metric.title} className=" cursor-pointer">
            <CardHeader>
              <CardDescription>{metric.title}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {metric.value}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <TrendIcon className="h-4 w-4" />
                  {metric.change}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {metric.footer} <TrendIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                {metric.subfooter}
              </div>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
