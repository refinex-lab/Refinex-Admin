"use client"

import { addDays } from "date-fns";
import { addHours } from "date-fns";
import { format } from "date-fns";
import { nextSaturday } from "date-fns";
import {
  Archive,
  ArchiveX,
  Clock,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2,
} from "lucide-react";

import { DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { type Mail } from "@/app/mail/data";
import { useState } from "react";

interface MailDisplayProps {
  mail: Mail | null;
}

export function MailDisplay({ mail }: MailDisplayProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" disabled={!mail} title="归档" className="cursor-pointer disabled:cursor-not-allowed">
            <Archive className="size-4" />
            <span className="sr-only">归档</span>
          </Button>
          <Button variant="ghost" size="icon" disabled={!mail} title="移至垃圾邮件" className="cursor-pointer disabled:cursor-not-allowed">
            <ArchiveX className="size-4" />
            <span className="sr-only">移至垃圾邮件</span>
          </Button>
          <Button variant="ghost" size="icon" disabled={!mail} title="移至垃圾箱" className="cursor-pointer disabled:cursor-not-allowed">
            <Trash2 className="size-4" />
            <span className="sr-only">移至垃圾箱</span>
          </Button>
          <Separator orientation="vertical" className="mx-1 h-6" />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!mail} title="稍后提醒" className="cursor-pointer disabled:cursor-not-allowed">
                <Clock className="size-4" />
                <span className="sr-only">稍后提醒</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex w-auto p-0">
              <div className="flex flex-col gap-2 border-r px-2 py-4">
                <div className="px-4 text-sm font-medium">稍后提醒至</div>
                <div className="grid min-w-[250px] gap-1">
                  <Button variant="ghost" className="justify-start font-normal cursor-pointer">
                    今天晚些时候{" "}
                    <span className="text-muted-foreground ml-auto">
                      {format(addHours(selectedDate, 4), "E, h:mm b")}
                    </span>
                  </Button>
                  <Button variant="ghost" className="justify-start font-normal cursor-pointer">
                    明天
                    <span className="text-muted-foreground ml-auto">
                      {format(addDays(selectedDate, 1), "E, h:mm b")}
                    </span>
                  </Button>
                  <Button variant="ghost" className="justify-start font-normal cursor-pointer">
                    本周末
                    <span className="text-muted-foreground ml-auto">
                      {format(nextSaturday(selectedDate), "E, h:mm b")}
                    </span>
                  </Button>
                  <Button variant="ghost" className="justify-start font-normal cursor-pointer">
                    下周
                    <span className="text-muted-foreground ml-auto">
                      {format(addDays(selectedDate, 7), "E, h:mm b")}
                    </span>
                  </Button>
                </div>
              </div>
              <div className="p-2">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  classNames={{ 
                    today: "bg-none",
                    day: "cursor-pointer",
                    day_selected: "cursor-pointer",
                    day_today: "cursor-pointer"
                  }}
                  required
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" disabled={!mail} title="回复" className="cursor-pointer disabled:cursor-not-allowed">
            <Reply className="size-4" />
            <span className="sr-only">回复</span>
          </Button>
          <Button variant="ghost" size="icon" disabled={!mail} title="全部回复" className="cursor-pointer disabled:cursor-not-allowed">
            <ReplyAll className="size-4" />
            <span className="sr-only">全部回复</span>
          </Button>
          <Button variant="ghost" size="icon" disabled={!mail} title="转发" className="cursor-pointer disabled:cursor-not-allowed">
            <Forward className="size-4" />
            <span className="sr-only">转发</span>
          </Button>
        </div>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" disabled={!mail} className="cursor-pointer disabled:cursor-not-allowed">
              <MoreVertical className="size-4" />
              <span className="sr-only">更多</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer">标记为未读</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">收藏邮件</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">添加标签</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">静音邮件</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator />
      {mail ? (
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Avatar className="cursor-pointer">
                <AvatarImage alt={mail.name} />
                <AvatarFallback>
                  {mail.name
                    .split(" ")
                    .map((chunk) => chunk[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{mail.name}</div>
                <div className="line-clamp-1 text-xs">{mail.subject}</div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">回复至：</span> {mail.email}
                </div>
              </div>
            </div>
            {mail.date && (
              <div className="text-muted-foreground ml-auto text-xs">
                {format(new Date(mail.date), "PPpp")}
              </div>
            )}
          </div>
          <Separator />
          <div className="flex-1 p-4 text-sm whitespace-pre-wrap">{mail.text}</div>
          <Separator className="mt-auto" />
          <div className="p-4">
            <form>
              <div className="grid gap-4">
                <Textarea className="p-4 cursor-text" placeholder={`回复 ${mail.name}...`} />
                <div className="flex items-center">
                  <Label htmlFor="mute" className="flex items-center gap-2 text-xs font-normal cursor-pointer">
                    <Switch id="mute" aria-label="Mute thread" /> 静音此邮件
                  </Label>
                  <Button onClick={(e) => e.preventDefault()} size="sm" className="ml-auto cursor-pointer">
                    发送
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="text-muted-foreground p-8 text-center">未选择邮件</div>
      )}
    </div>
  );
}
