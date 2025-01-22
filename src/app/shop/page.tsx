'use client'
import ProductCard from '@/components/ProductCard'
import SideBar from './components/SideBar'
// import { products } from '@/data/product'
import React, { useEffect, useState } from 'react'
import { IoIosArrowForward,IoIosArrowDown } from 'react-icons/io'
import { FaArrowLeft, FaArrowRight} from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import { ProductType } from '@/types/productTypes'
import { client } from '@/sanity/lib/client'


const Page = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [filteredProduct, setFilteredProducts] = useState<ProductType[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [open, setOpen] = useState('hidden')
  const [filterTag, setFilterTag] = useState<string[]>([])

  const toggleBtn = () => {
    setOpen(isOpen ? 'hidden' : 'block')
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts: ProductType[] = await client.fetch(`*[_type == 'products']`)
      setProducts(fetchedProducts)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (filterTag.length > 0) {
      const filteredData = products.filter(product =>
        product.tags.some(tag => filterTag.includes(tag))
      )
      setFilteredProducts(filteredData)
    } else {
      setFilteredProducts(products)
    }
  }, [products, filterTag])
  
  return (
    <div className='relative'>
    <h1 className='flex items-center px-2 sm:px-10'>Home <IoIosArrowForward/> Shop</h1>
    <div className='flex justify-around'>
      <div className='hidden lg:block'>

      <SideBar setTag={setFilterTag} />
      </div>
      <div className={`fixed z-30 top-[18vh] lg:hidden ${open}`}>

    <SideBar setTag={setFilterTag} open={open} toggleBtn={toggleBtn}  />
      </div>
    <div className='px-1 sm:px-5  lg:w-[70vw]'>
    <div className='flex justify-between items-center my-3 '>
    <h1 className='text-black font-semibold text-lg sm:text-xl'>Shop</h1>
    <p className='flex items-center text-sm'>Showing 1-10 of 100 Products  <span className='hidden lg:flex text-black items-center font-semibold '> <span className='font-medium'>Sortby:</span> Most Popular <IoIosArrowDown/></span> <VscSettings onClick={toggleBtn} className='  bg-gray-200 h-[27px] w-[27px] p-1 rounded-full lg:hidden ml-1'/> </p>
    </div>
    <div className='flex flex-wrap justify-around gap-2 sm:gap-5 border-b-2 pb-4'>
    {filteredProduct.map((product, index)=>(
        <ProductCard key={index} from='casual' product={product}/>
    ))}
    </div>
    <div className='flex justify-between my-4'>
    <button className='flex items-center gap-1 sm:gap-2 border-2 px-1 sm:px-2 rounded-lg'><FaArrowLeft/> Previous</button>
    <div className='flex items-center'>
    <p className='bg-gray-200 h-8 py-1 sm:py-2 px-2 sm:px-4 rounded-lg'>1</p>
    <p className='h-8 py-1 sm:py-2 px-2 sm:px-4'>2</p>
    <p className='h-8 py-1 sm:py-2 px-2 sm:px-4 hidden sm:block'>3</p>
    <p className='h-8 py-1 sm:py-2 px-2 sm:px-4 '>...</p>
    <p className='h-8 py-1 sm:py-2 px-2 sm:px-4 hidden sm:block'>8</p>
    <p className='h-8 py-1 sm:py-2 px-2 sm:px-4 '>9</p>
    <p className='h-8 py-1 sm:py-2 px-2 sm:px-4'>10</p>
    </div>
    <button className='flex items-center gap-1 sm:gap-2 border-2 px-1 sm:px-2 rounded-lg'> Next<FaArrowRight/></button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Page