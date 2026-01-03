import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  weight: ["400", "500", "700"],
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  display: "swap",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "尾張東剣道連盟 | 公式ウェブサイト",
  description:
    "尾張東剣道連盟の公式ウェブサイトです。連盟のお知らせ、年間行事予定、加盟道場の紹介などを掲載しています。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={`font-serif ${GeistSans.variable} ${GeistMono.variable} ${notoSansJP.variable} ${notoSerifJP.variable}`}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
