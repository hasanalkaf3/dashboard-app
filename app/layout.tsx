import { SpeedInsights } from '@vercel/speed-insights/next'

import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      {/* See https://tailwindcss.com/docs/dark-mode */}
      <body className={`${inter.className} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
