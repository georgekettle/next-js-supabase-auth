import { createClient } from '@supabase/supabase-js'

import Link from 'next/link'
import Image from 'next/image'

import SearchBar from '@/components/SearchBar'
import Container from '@/components/Container'

function BotCard({bot}) {
  console.log(bot)
  const imageUrl = 'https://images.unsplash.com/photo-1617884638394-d9eef1b0f40e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
  
  return(
    <div
        key={bot.id}
        className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-1 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
      >
        <div className="flex-shrink-0">
          <Image className="h-10 w-10 rounded-full" src={imageUrl} alt={bot.name} height={100} width={100}/>
        </div>
        <div className="min-w-0 flex-1">
          <Link href={`/bots/${bot.id}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-sm font-normal text-gray-900">{bot.name}</p>
            <p className="truncate text-sm text-gray-500 line-clamp-2">{bot.description}</p>
          </Link>
        </div>
      </div>
  )
}

export default async function Home() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

  const { data: bots, error } = await supabase
    .from('bots')
    .select('*')

  console.log(bots)

  return (
    <main>
      {/* Hero */}
      <div className="bg-gradient-to-r from-info-100 to-primary-600 text-white py-24">
        <div className="px-4 space-y-8">
          <div className="text-center space-y-4 max-w-lg mx-auto">
            <h1 className="tracking-tight text-4xl">Get More Done in Less Time</h1>
            <p className="text-normal mb-4 text-white/80">Elevate your business with custom chatbots. Enjoy increased profitability and efficiency with pre-trained solutions.</p>
          </div>
          <div className="max-w-md mx-auto">
            <SearchBar />
          </div>
        </div>
      </div>
      {/* Chatbots */}
      <div className="py-24">
        <Container>
          <div className="pb-8">
            <h3 className="text-base font-normal leading-6 text-gray-900">Chatbots</h3>
            <p className="mt-2 max-w-4xl text-sm text-gray-500">
              Find the right chatbot for your business. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus.
            </p>
          </div>
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {bots.map((bot) => (
                <BotCard bot={bot} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}


