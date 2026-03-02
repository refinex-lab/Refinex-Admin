"use client"

import { 
  Phone, 
  Video, 
  Info, 
  Search, 
  MoreVertical,
  Users,
  Bell,
  BellOff
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip"
import { type Conversation, type User } from "@/app/chat/use-chat"

interface ChatHeaderProps {
  conversation: Conversation | null
  users: User[]
  onToggleMute?: () => void
  onToggleInfo?: () => void
}

export function ChatHeader({ 
  conversation, 
  users, 
  onToggleMute, 
  onToggleInfo 
}: ChatHeaderProps) {
  if (!conversation) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">选择一个会话开始聊天</p>
      </div>
    )
  }

  const getConversationUsers = () => {
    if (conversation.type === "direct") {
      return users.filter(user => conversation.participants.includes(user.id))
    }
    return users.filter(user => conversation.participants.includes(user.id))
  }

  const conversationUsers = getConversationUsers()
  const primaryUser = conversationUsers[0]

  const getStatusText = () => {
    if (conversation.type === "group") {
      const onlineCount = conversationUsers.filter(user => user.status === "online").length
      return `${conversation.participants.length} 位成员，${onlineCount} 人在线`
    } else if (primaryUser) {
      switch (primaryUser.status) {
        case "online":
          return "正在活跃"
        case "away":
          return "离开"
        case "offline":
          return `最后上线：${new Date(primaryUser.lastSeen).toLocaleDateString()}`
        default:
          return ""
      }
    }
    return ""
  }

  const getStatusColor = () => {
    if (conversation.type === "group") return "text-muted-foreground"
    
    switch (primaryUser?.status) {
      case "online":
        return "text-green-600"
      case "away":
        return "text-yellow-600"
      case "offline":
        return "text-muted-foreground"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <div className="flex items-center justify-between h-full">
      {/* Left side - Avatar and info */}
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 cursor-pointer">
          <AvatarImage src={conversation.avatar} alt={conversation.name} />
          <AvatarFallback>
            {conversation.type === "group" ? (
              <Users className="h-5 w-5" />
            ) : (
              conversation.name.split(' ').map(n => n[0]).join('').slice(0, 2)
            )}
          </AvatarFallback>
        </Avatar>
        
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold truncate">{conversation.name}</h2>
            {conversation.isMuted && (
              <BellOff className="h-4 w-4 text-muted-foreground" />
            )}
            {conversation.type === "group" && (
              <Badge variant="secondary" className="text-xs cursor-pointer">
                群组
              </Badge>
            )}
          </div>
          <p className={`text-sm ${getStatusColor()}`}>
            {getStatusText()}
          </p>
        </div>
      </div>

      {/* Right side - Action buttons */}
      <div className="flex items-center gap-1">
        <TooltipProvider>
          {/* Search */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Search className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>在会话中搜索</p>
            </TooltipContent>
          </Tooltip>

          {/* Phone call */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Phone className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>语音通话</p>
            </TooltipContent>
          </Tooltip>

          {/* Video call */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Video className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>视频通话</p>
            </TooltipContent>
          </Tooltip>

          {/* Info */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onToggleInfo}
                className="cursor-pointer"
              >
                <Info className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>会话信息</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* More options */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem 
              onClick={onToggleMute}
              className="cursor-pointer"
            >
              {conversation.isMuted ? (
                <>
                  <Bell className="h-4 w-4 mr-2" />
                  取消静音
                </>
              ) : (
                <>
                  <BellOff className="h-4 w-4 mr-2" />
                  静音会话
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Search className="h-4 w-4 mr-2" />
              搜索消息
            </DropdownMenuItem>
            {conversation.type === "group" && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Users className="h-4 w-4 mr-2" />
                  管理成员
                </DropdownMenuItem>
              </>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-destructive">
              删除会话
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
