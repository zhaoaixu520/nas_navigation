import Image from "next/image"
import { Inter } from "next/font/google"
import { MainContainer } from "@/components/MainContainer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between sm:p-24 p-6 ${inter.className}`}
    >
      <div className='bg-home-bg-img blur-[3px] w-full h-screen absolute left-0 top-0'></div>
      <MainContainer />
    </main>
  )
}
