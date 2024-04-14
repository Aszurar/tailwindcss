import './globals.css'

import { SideBar } from './components/SideBar'

export const metadata = {
  metadataBase: new URL('https://i.imgur.com'),
  title: 'TailwindCSS App',
  description:
    'Simple Project to test and learn TailwindCSS with Next.js and React, tailwind variants, dark mode, AutoAnimate and more',
  authors: {
    name: 'Lucas de Lima Martins de Souza',
    url: 'https://lucas-de-lima-ms.netlify.app/',
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
        url: '/493yY50.png',
        width: 1200,
        height: 630,
        alt: 'TailwindCSS App',
      },
    ],
    emails: 'lms.souza39@gmail.com',
    siteName: 'TailwindCSS App',
    publishedTime: '2023-12-06T20:00:00.000Z',
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://tailwindcss-app.vercel.app/',
    title: 'TailwindCSS App',
    description:
      'Simple Project to test and learn TailwindCSS with Next.js and React, tailwind variants, dark mode, AutoAnimate and more',
    images: ['/493yY50.png'],
    creator: '@LmsSouza39',
  },
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <meta
        name="google-site-verification"
        content="F9x673ARchuWyB5sbIVmjHUlMVfIQRIIe0wtDtsmafA"
      />

      <body>
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
