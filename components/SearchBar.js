export default function SearchBar() {
    return (
        <form>
            <label htmlFor="default-search" className="mb-2 text-sm font-normal text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-900 focus:ring-0 focus:border-gray-900" placeholder="Search Chatbots..." required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gray-900 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-900 font-normal rounded-md text-sm px-4 py-2">Search</button>
            </div>
        </form>
    )
}