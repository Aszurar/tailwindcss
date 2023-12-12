import './globals.css'

import { Inter } from 'next/font/google'

import { SideBar } from './components/SideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TailwindCSS App',
  description:
    'Simple Project to test and learn TailwindCSS with Next.js and React, tailwind variants, dark mode, AutoAnimate and more',
  authors: {
    name: 'Lucas de Lima Martins de Souza',
    url: 'https://github.com/Aszurar',
  },
  keywords: ['TailwindCSS', 'Next.js', 'React'],
  publisher: 'Lucas de Lima Martins de Souza',
  creator: 'Lucas de Lima Martins de Souza',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tailwindcss-app.vercel.app/',
    title: 'TailwindCSS App',
    description:
      'Simple Project to test and learn TailwindCSS with Next.js and React, tailwind variants, dark mode, AutoAnimate and more',
    images: [
      {
        url: 'https://i.imgur.com/493yY50.png',
        width: 1200,
        height: 630,
        alt: 'TailwindCSS App',
      },
    ],
    emails: 'lms.souza39@gmail.com',
    siteName: 'TailwindCSS App',
    publishedTime: '2023-12-06T20:00:00.000Z',
  },
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="  min-h-screen bg-white dark:bg-zinc-900 lg:grid lg:grid-cols-app">
          <SideBar />
          <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
