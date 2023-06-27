import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'


export const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <main
      className={`  space-y-2 flex  m-5 ${inter.className} `}
    >
     <div className="max-w-sm min-w-sm bg-[#f5f5f9]">
     <Navbar />
        <Home />
     </div>
     
    </main>
  )
}
