import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function TechBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="tech-badge">
      {icon}
      <span>{label}</span>
    </div>
  )
}

export function ProjectCard({
  title,
  description,
  image,
  color,
}: {
  title: string
  description: string
  image: string
  color: string
}) {
  return (
    <div className="project-card" style={{ borderColor: color }}>
      <div className="project-image">
        <Image src={image || "/placeholder.svg"} alt={title} width={400} height={225} className="project-photo" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  )
}

export function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  )
}

export function SocialLink({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Button variant="outline" className="social-link">
      <div className="social-content">
        {icon}
        <span>{label}</span>
      </div>
      <ExternalLink size={16} />
    </Button>
  )
}
