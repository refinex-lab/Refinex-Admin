import { Heart } from "lucide-react"
import { Link } from "react-router-dom"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="px-4 py-6 lg:px-6">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>用</span>
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            <span>制作，来自</span>
            <Link
              to="https://shadcnstore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              ShadcnStore Team
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            为现代 Web 应用构建精美、易用的组件块、模板和仪表盘。
          </p>
        </div>
      </div>
    </footer>
  )
}
