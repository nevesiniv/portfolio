import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "../styles/main.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vinicius Feitosa - Desenvolvedor Fullstack",
  description: "Portfolio de Vinicius Feitosa, desenvolvedor fullstack com experiência em React, Node.js e mais.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
