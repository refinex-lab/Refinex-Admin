"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { priorities, statuses, categories } from "../data/data"
import type { Task } from "../data/schema"

// Extended task schema for the form
const taskFormSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "标题不能为空"),
  description: z.string().optional(),
  status: z.string(),
  category: z.string(),
  priority: z.string(),
})

type TaskFormData = z.infer<typeof taskFormSchema>

interface AddTaskModalProps {
  onAddTask?: (task: Task) => void
  trigger?: React.ReactNode
}

export function AddTaskModal({ onAddTask, trigger }: AddTaskModalProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<TaskFormData>({
    id: "",
    title: "",
    description: "",
    status: "todo",
    category: "feature",
    priority: "normal",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Generate unique task ID
  const generateTaskId = () => {
    const prefix = "TASK"
    const number = Math.floor(Math.random() * 9999) + 1000
    return `${prefix}-${number}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Validate form data
      const validatedData = taskFormSchema.parse({
        ...formData,
        id: generateTaskId(),
      })

      // Create the task
      const newTask: Task = {
        id: validatedData.id,
        title: validatedData.title,
        status: validatedData.status,
        category: validatedData.category,
        priority: validatedData.priority,
      }

      onAddTask?.(newTask)

      // Reset form and close modal
      setFormData({
        id: "",
        title: "",
        description: "",
        status: "todo",
        category: "feature",
        priority: "normal",
      })
      setErrors({})
      setOpen(false)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as string] = issue.message
          }
        })
        setErrors(newErrors)
      }
    }
  }

  const handleCancel = () => {
    setFormData({
      id: "",
      title: "",
      description: "",
      status: "todo",
      category: "feature",
      priority: "normal",
    })
    setErrors({})
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="default" size="sm" className="cursor-pointer">
            <Plus className="w-4 h-4" />
            添加任务
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>添加新任务</DialogTitle>
          <DialogDescription>
            创建新任务以跟踪工作进度。请填写以下详细信息。
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Task Title */}
          <div className="space-y-2">
            <Label htmlFor="title">任务标题 *</Label>
            <Input
              id="title"
              placeholder="输入任务标题..."
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          {/* Task Description */}
          <div className="space-y-2">
            <Label htmlFor="description">描述</Label>
            <Textarea
              id="description"
              placeholder="提供任务的更多详细信息..."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
          </div>

          {/* Task Status and Category - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Task Status */}
            <div className="space-y-2">
              <Label htmlFor="status">状态</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="选择状态" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      <div className="flex items-center">
                        {status.icon && (
                          <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                        )}
                        {status.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Task Category */}
            <div className="space-y-2">
              <Label htmlFor="category">分类</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="选择分类" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Task Priority - Half Width on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="priority">优先级</Label>
              <Select
                value={formData.priority}
                onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value }))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="选择优先级" />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map((priority) => (
                    <SelectItem key={priority.value} value={priority.value}>
                      <div className="flex items-center">
                        {priority.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={handleCancel} className="cursor-pointer">
              取消
            </Button>
            <Button type="submit" className="cursor-pointer">
              <Plus className="w-4 h-4 mr-2" />
              创建任务
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
