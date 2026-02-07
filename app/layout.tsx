import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kim Eduard Saludes | Full Stack Developer',
  description: 'Professional portfolio of Kim Eduard Saludes - Full Stack Developer & IoT Engineer specializing in scalable systems and automation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white text-gray-900 animate-fade-in">
          {children}
        </div>
      </body>
    </html>
  )
}