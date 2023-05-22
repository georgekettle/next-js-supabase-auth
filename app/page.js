import SearchBar from '@/components/SearchBar'

export default function Home() {
  return (
    <main>
      <div class="bg-gradient-to-r from-info-100 to-primary-600 text-white py-24">
        <div class="px-4 space-y-8">
          <div class="text-center space-y-4 max-w-lg mx-auto">
            <h1 class="tracking-tight text-4xl">Get More Done in Less Time</h1>
            <p class="text-normal mb-4 text-white/80">Elevate your business with custom chatbots. Enjoy increased profitability and efficiency with pre-trained solutions.</p>
          </div>
          <div class="max-w-md mx-auto">
            <SearchBar />
          </div>
        </div>
      </div>
    </main>
  )
}
