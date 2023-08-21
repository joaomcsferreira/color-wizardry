import Header from "@/components/Header"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"], weight: ["900", "700", "600"] })

export const metadata: Metadata = {
  title: "Color Wizardry",
  description: "Transforming a Single Color into Infinite Hues.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-obsidian text-white`}>
        <div>
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  )
}
