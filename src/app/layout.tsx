import './globals.css'
import type { Metadata } from 'next'
import localFont from '@next/font/local'

const F1 = localFont({
  src: [
    {path: '../../public/fonts/Formula1-Regular.otf', weight: 'normal'},
    {path: '../../public/fonts/Formula1-Wide.otf', weight: 'bold'}
  ],
  variable: '--font-f1',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${F1.variable}`}>
      <body>{children}</body>
    </html>
  )
}