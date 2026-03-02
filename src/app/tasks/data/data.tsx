import {
  CheckCircle2,
  Circle,
  Clock,
  PlayCircle,
} from "lucide-react"

export const categories = [
  {
    value: "bug",
    label: "缺陷",
  },
  {
    value: "feature",
    label: "新功能",
  },
  {
    value: "documentation",
    label: "文档",
  },
  {
    value: "improvement",
    label: "改进",
  },
  {
    value: "refactor",
    label: "重构",
  },
]

export const statuses = [
  {
    value: "pending",
    label: "待处理",
    icon: Clock,
  },
  {
    value: "todo",
    label: "待办",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "进行中",
    icon: PlayCircle,
  },
  {
    value: "completed",
    label: "已完成",
    icon: CheckCircle2,
  },
]

export const priorities = [
  {
    label: "轻微",
    value: "minor"
  },
  {
    label: "普通",
    value: "normal"
  },
  {
    label: "重要",
    value: "important"
  },
  {
    label: "紧急",
    value: "critical"
  },
]
