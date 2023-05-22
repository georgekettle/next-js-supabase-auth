import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Chatterbot',
  description: 'Create and monetise your own chatbot',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
