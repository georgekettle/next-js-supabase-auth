import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Navbar from '@/components/Navbar'
import SupabaseProvider from './SupabaseProvider'

export const metadata = {
  title: 'Chatterbot',
  description: 'Create and monetise your own chatbot',
}

export default async function RootLayout({ children }) {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider session={session}>
          <Navbar />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  )
}