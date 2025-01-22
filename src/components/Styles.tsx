import React from 'react'
import casual from '@/images/casual.png'
import formal from '@/images/formal.png'
import party from '@/images/party.png'
import gym from '@/images/gym.png'
import casual2 from '@/images/casual2.png'
import formal2 from '@/images/formal2.png'
import party2 from '@/images/party2.png'
import gym2 from '@/images/gym2.png'
import Image from 'next/image'
import Link from 'next/link'

const images = [{image: casual2, link: '/category/casual'}, {image: formal2, link:'/category/formal'},{image: party2, link:'/category/party'}, {image:gym2, link: '/category/gym'}]
const Styles = () => {
  return (
    <div className='bg-[#F2F0F1] mx-5 sm:mx-16 py-16 rounded-[30px] space-y-10 px-6'>
        <h1 className='text-center text-5xl font-black'>BROWSE BY DRESS STYLE</h1>
        <div className='hidden md:flex gap-10 justify-center'>
          <Link href={'/category/casual'} className='md:w-[30%] '>
            <Image src={casual} alt='casual style' className=' md:w-full h-full'/>
          </Link>
          <Link href={'/category/formal'} className='md:w-[60%] '>
            <Image src={formal} alt='formal style' className='md:w-full  h-[300px]'/>
          </Link>
        </div>
        <div className='hidden md:flex gap-10 justify-center'>
          <Link href={'/category/party'} className='md:w-[60%] '>
            <Image src={party} alt='casual style'  className='md:w-full h-[300px]'/>
          </Link>
          <Link href={'/category/gym'} className='md:w-[30%]'>
            <Image src={gym} alt='formal style' className='md:w-full h-full'/>
          </Link>
        </div>
        <div className='md:hidden space-y-4'>
          {images.map((item, index)=>(
            <Link  key={index} href={item.link} className='w-full my-4' >
            <Image src={item.image} alt="dress style" className='w-[100%] h-full my-4'/>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Styles