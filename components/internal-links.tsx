import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface InternalLink {
  text: string
  url: string
  description?: string
}

interface InternalLinksProps {
  title?: string
  links: InternalLink[]
  className?: string
}

export function InternalLinks({ title = "Related Content", links, className = "" }: InternalLinksProps) {
  if (links.length === 0) return null

  return (
    <Card className={`bg-green-50 border-green-200 ${className}`}>
      <CardHeader>
        <CardTitle className="text-lg text-green-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="flex items-center gap-2 text-green-700 hover:text-green-900 transition-colors group"
            >
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <div>
                <span className="font-medium">{link.text}</span>
                {link.description && <p className="text-sm text-green-600 mt-1">{link.description}</p>}
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
