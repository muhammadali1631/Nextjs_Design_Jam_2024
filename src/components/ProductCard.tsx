import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa6'

const ProductCard = ({product, from}: {product: any, from?: string}) => {
  return (
    <div className='group'>
      <Link href={`/shop/${product.slug}`}>
        <div className={` sm:w-[295px] sm:h-[298px] bg-[#F2F0F1] rounded-3xl flex justify-center items-center ${from === 'casual'? "w-[150px] h-[150px]" :"w-[200px] h-[200px]"}`}>
        <Image src={urlFor(product.images[0].image[0]).url()} alt='Product' height={200} width={200} className='mix-blend-multiply w-full h-full object-cover rounded-3xl p-5 group-hover:p-0 duration-300'/>
        </div>
        <h3 className={` font-bold line-clamp-2 mt-4 ml-2 ${from === 'casual'? 'text-lg w-[130px] sm:w-[85%]': 'text-xl w-[85%]' }`}>{product.name}</h3>
        <div className='space-y-1 flex items-center gap-1 ml-2 '>
            <div className='flex gap-1'>{Array(Number(product.rating?.toString().charAt(0))).fill(FaStar).map((Icon:any, index:number) => (<Icon key={index} className='text-yellow-500'/>))} {product.rating?.toString().charAt(2) !== '0' && (<FaStarHalf className='text-yellow-500'/>)}</div>
            <p>{product.rating}<span className='text-gray-500 mx-[1px]'>/5</span></p>
        </div>
        <div className={`flex gap-2 ml-2 ${from === 'casual' &&' sm:gap-[1px] sm:ml-0'}`}>
        <h3 className={` ${from === 'casual'? 'text-lg': 'text-xl font-bold' }`}>${product.price - (product.price *product.discountPercent) /100 }</h3>
        {product.discountPercent && <h3 className={` line-through text-gray-500 ${from === 'casual'? 'text-lg': 'text-xl font-bold' }`}>{product.price}</h3>}
        {product.discountPercent && <p className='pt-[2.5px] px-2 rounded-full text-red-600 bg-red-200'>-{product.discountPercent}%</p>}
        
        </div>
        </Link>
    </div>
  )
}
export default ProductCard