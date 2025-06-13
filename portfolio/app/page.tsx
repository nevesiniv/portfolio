import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { TechBadge } from "@/components/ui-components"
import { ProjectCard, ServiceCard, SocialLink } from "@/components/ui-components"
import {
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  ReactIcon,
  NodejsIcon,
  GithubIcon,
  MonitorIcon,
  DatabaseIcon,
  InfinityIcon,
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
} from "@/components/icons"

export default function Home() {
  return (
    <main className="portfolio-main">
      {/* Background decorative elements */}
      <div className="background-decoration">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="decoration-line"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 150 + 50}px`,
              backgroundColor: ["#e3646e", "#82bc4f", "#3996db", "#eabd5f", "#bb72e9"][Math.floor(Math.random() * 5)],
              transform: `rotate(${Math.random() * 180}deg)`,
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <section className="hero-section">
        <div className="profile-container">
          <div className="profile-image">
            <Image
              src="/placeholder.svg?height=96&width=96"
              alt="Foto de perfil"
              width={96}
              height={96}
              className="profile-photo"
            />
          </div>
          <div className="status-indicator">
            <div className="status-dot"></div>
          </div>
        </div>

        <p className="intro-text">
          Hello World! Meu nome é <span className="highlight-name">Vinicius Feitosa</span> e sou
        </p>

        <h1 className="main-title">Desenvolvedor Fullstack</h1>

        <p className="description">
          Transformo necessidades em aplicações reais, evolutivas e funcionais. Desenvolvo sistemas através da minha
          paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
        </p>

        <div className="tech-badges">
          <TechBadge icon={<GithubIcon />} label="GitHub" />
          <TechBadge icon={<HtmlIcon />} label="HTML" />
          <TechBadge icon={<CssIcon />} label="CSS" />
          <TechBadge icon={<JavaScriptIcon />} label="JavaScript" />
          <TechBadge icon={<ReactIcon />} label="React" />
          <TechBadge icon={<NodejsIcon />} label="Node.js" />
        </div>

        <button className="scroll-indicator">
          <ChevronDown size={24} />
        </button>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Meu trabalho</p>
            <h2 className="section-title">Veja os projetos em destaque</h2>
          </div>

          <div className="projects-grid">
            <ProjectCard
              title="Travelgram"
              description="Rede social onde as pessoas mostram os registros de suas viagens pelo mundo"
              image="/placeholder.svg?height=200&width=300"
              color="#e3646e"
            />
            <ProjectCard
              title="Tech News"
              description="Homepage de um portal de notícias sobre a área de tecnologia"
              image="/placeholder.svg?height=200&width=300"
              color="#3996db"
            />
            <ProjectCard
              title="Página de receita"
              description="Página com o passo a passo de uma receita para cupcakes"
              image="/placeholder.svg?height=200&width=300"
              color="#eabd5f"
            />
            <ProjectCard
              title="Zingen"
              description="Landing Page completa e responsiva de um aplicativo de Karaokê"
              image="/placeholder.svg?height=200&width=300"
              color="#eabd5f"
            />
            <ProjectCard
              title="Refund"
              description="Um sistema para pedido e acompanhamento de reembolso"
              image="/placeholder.svg?height=200&width=300"
              color="#82bc4f"
            />
            <ProjectCard
              title="Página de turismo"
              description="Página com as principais informações para quem quer viajar para Busan"
              image="/placeholder.svg?height=200&width=300"
              color="#e3646e"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Meus serviços</p>
            <h2 className="section-title">Como posso ajudar o seu negócio</h2>
          </div>

          <div className="services-grid">
            <ServiceCard
              icon={<MonitorIcon />}
              title="Websites e Aplicativos"
              description="Desenvolvimento de interfaces"
            />
            <ServiceCard
              icon={<DatabaseIcon />}
              title="API e banco de dados"
              description="Criação de serviços do sistema"
            />
            <ServiceCard icon={<InfinityIcon />} title="DevOps" description="Gestão e infraestrutura da aplicação" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <p className="section-subtitle">Contato</p>
          <h2 className="section-title">Gostou do meu trabalho?</h2>
          <p className="contact-description">Entre em contato ou acompanhe as minhas redes sociais!</p>

          <div className="social-links">
            <SocialLink icon={<LinkedinIcon />} label="LinkedIn" />
            <SocialLink icon={<InstagramIcon />} label="Instagram" />
            <SocialLink icon={<GithubIcon />} label="Github" />
            <SocialLink icon={<MailIcon />} label="E-mail" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          &copy; {new Date().getFullYear()} Vinicius Feitosa. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  )
}
