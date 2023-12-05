import Image from 'next/image'
import Hero from './ui/SunfoxHome/Hero'
import Title from './ui/SunfoxHome/Title'
import GoSolar from './ui/SunfoxHome/GoSolar'
import Subscribe from './ui/SunfoxHome/Subscribe'
import ProudMembers from './ui/SunfoxHome/ProudMembers'

export default function Home() {
  return (
    <main className='px-4'>
      <div className='flex flex-col gap-16 py-8'>
        <Hero />
        <Title />
        <GoSolar />
        <Subscribe />
        <ProudMembers />
      </div>
    </main>
  )
}
