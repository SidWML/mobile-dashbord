import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import { useState } from 'react'


export const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <main
      className={`space-y-2 flex  ${inter.className} `}
    >
     <div className=" flex gap-8">
     <div className=" max-w-sm  min-w-sm  bg-[#f5f5f9]">
     {
      loggedIn && <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
     }
        <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} mobile />
     </div>
     <div className=" w-[820px] bg-[#f5f5f9]">
     {
      loggedIn && <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
     }
        <Home setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
     </div>
     </div>
     
    </main>
  )
}
