"use client"

import { useState } from "react"
import { Calendar, Clock, 刷新Cw, Filter } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export function DashboardHeader() {
  const [dateRange, setDateRange] = useState("30d")
  const lastUpdated = new Date().toLocaleString()

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-3xl font-bold">商业仪表盘</CardTitle>
            <CardDescription className="text-base mt-2">
              全面概览您的业务表现与关键指标
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="cursor-pointer">
              <Clock className="h-3 w-3 mr-1" />
              实时数据
            </Badge>
            <Button variant="outline" size="sm" className="cursor-pointer">
              <刷新Cw className="h-4 w-4 mr-2" />
              刷新
            </Button>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">日期范围：</span>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-40 cursor-pointer">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d" className="cursor-pointer">最近7天</SelectItem>
                  <SelectItem value="30d" className="cursor-pointer">最近30天</SelectItem>
                  <SelectItem value="90d" className="cursor-pointer">最近90天</SelectItem>
                  <SelectItem value="1y" className="cursor-pointer">最近一年</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" size="sm" className="cursor-pointer">
              <Filter className="h-4 w-4 mr-2" />
              筛选
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            最后更新： {lastUpdated}
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
