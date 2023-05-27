import Image from 'next/image'
import { Inter } from 'next/font/google'
import ResponsiveDrawer from '../components/baseComponents/sidbar'
// import Layout from '@/components/layout'
import CardTaskItem from '@/components/taskComponent/taskItem'
import { defaultTasks } from '@/store/taskSlice'
import { Task } from '@/interfaces';
import Main from '@/components/taskComponent/main'
// import Form1 from '@/components/test/form'
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
      <Main/>
    </ResponsiveDrawer>
    // <Form1/>

    
  )
}
