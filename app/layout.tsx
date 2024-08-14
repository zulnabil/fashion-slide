import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.scss"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fashion Slide",
  description: "App to showcase fashion items",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
