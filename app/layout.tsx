import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Soham Marathe - Cybersecurity Enthusiast & Full Stack Developer",
  description:
    "Portfolio of Soham Marathe - Cybersecurity Enthusiast, Full Stack Developer, and Innovator. Building secure, efficient, and intelligent digital solutions.",
  keywords: ["Soham", "Cybersecurity", "Full Stack Developer", "Web Development", "Blockchain", "Portfolio"],
  authors: [{ name: "Soham Marathe" }],
  creator: "Soham Marathe",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Soham Marathe - Cybersecurity Enthusiast & Full Stack Developer",
    description: "Building secure, efficient, and intelligent digital solutions",
    siteName: "Soham Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham Marathe- Cybersecurity Enthusiast & Full Stack Developer",
    description: "Building secure, efficient, and intelligent digital solutions",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
