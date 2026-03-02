"use client"

import { Eye, MoreHorizontal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { assetUrl } from "@/lib/utils"

const transactions = [
  {
    id: "TXN-001",
    customer: {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatar: assetUrl("https://notion-avatars.netlify.app/api/avatar/?preset=female-"),
    },
    amount: "$1,999.00",
    status: "已完成",
    date: "2 hours ago",
  },
  {
    id: "TXN-002",
    customer: {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      avatar: assetUrl("https://notion-avatars.netlify.app/api/avatar/?preset=male-1"),
    },
    amount: "$2,999.00",
    status: "待处理",
    date: "5 hours ago",
  },
  {
    id: "TXN-003",
    customer: {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      avatar: assetUrl("https://notion-avatars.netlify.app/api/avatar/?preset=female-2"),
    },
    amount: "$39.00",
    status: "已完成",
    date: "1 day ago",
  },
  {
    id: "TXN-004",
    customer: {
      name: "William Kim",
      email: "will@email.com",
      avatar: assetUrl("https://notion-avatars.netlify.app/api/avatar/?preset=male-5"),
    },
    amount: "$299.00",
    status: "已失败",
    date: "2 days ago",
  },
  {
    id: "TXN-005",
    customer: {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      avatar: assetUrl("https://notion-avatars.netlify.app/api/avatar/?preset=female-4"),
    },
    amount: "$99.00",
    status: "已完成",
    date: "3 days ago",
  },
]

export function RecentTransactions() {
  return (
    <Card className="cursor-pointer">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle>最近交易</CardTitle>
          <CardDescription>最新客户交易记录</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="cursor-pointer">
          <Eye className="h-4 w-4 mr-2" />
          查看全部
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} >
            <div className="flex p-3 rounded-lg border gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={transaction.customer.avatar} alt={transaction.customer.name} />
                <AvatarFallback>{transaction.customer.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div className="flex flex-1 items-center flex-wrap justify-between gap-1">
                <div className="flex items-center space-x-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate">{transaction.customer.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{transaction.customer.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge
                    variant={
                      transaction.status === "已完成" ? "default" :
                      transaction.status === "待处理" ? "secondary" : "destructive"
                    }
                    className="cursor-pointer"
                  >
                    {transaction.status}
                  </Badge>
                  <div className="text-right">
                    <p className="text-sm font-medium">{transaction.amount}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="cursor-pointer">查看详情</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">下载收据</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">联系客户</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
