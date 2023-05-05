import Image from 'next/image'
import { Inter } from 'next/font/google'
import ResponsiveDrawer from '@/components/sidbar'
// import Layout from '@/components/layout'
import Search from '@/components/search'

const inter = Inter({ subsets: ['latin'] })
const handleSearch = (searchTerm: string) => {
  console.log(`Searching for ${searchTerm}...`);
  // Do something with the search term...
};
export default function Home() {
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
      
    // </main>
    // <ResponsiveDrawer/>
    <ResponsiveDrawer>
       <Search onSearch={handleSearch}/>
    </ResponsiveDrawer>
  )
}
