'use client'
import React, { useState } from 'react'
import { VscSettings } from 'react-icons/vsc'
import { IoIosArrowForward } from "react-icons/io";
import Range from './Range'
import { IoIosArrowUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';


const colors:{name:string, value:string}[] = [{name:'green', value:'#00C12B'},{name:'red', value:'#F50606'}, {name:'blue', value:'#063AF5'}, {name:'white', value:'#FFFFFF'},{name:'black', value:'#000000'}]
const sizes = [{name:'Small', value: 's'} , {name:'Medium', value: 'm'},{name:'Large', value:'l'}, {name:'X-Large', value: 'xl'}, {name:'XX-Large', value: 'xxl'}]
const filter = ['T-shirt', 'Short', 'Shirt', 'Jacket', 'Jeans']
const dresses = [{name:'Casual', link: '/category/casual'}, {name:'Formal', link: '/category/formal'}, {name:'Party', link: '/category/party'}, {name:'Gym', link: '/category/gym'},]

const SideBar = ({open, toggleBtn, setTag}: {open?:string, toggleBtn?:()=>void, setTag: React.Dispatch<React.SetStateAction<string[]>>} ) => {
  const [tags, setTags] = useState<string[]>([])

  const getTags = (item:string)=>{
    if(tags.includes(item)){
      const filterTags = tags.filter(tag=> tag !==item)
      setTags(filterTags)
    }else{
      setTags([...tags, item.toLowerCase()])
    }
    console.log(tags)
  }
  
  return (
    <div className={`${open} bg-white w-[100vw]  lg:w-[300px] border-[1px] rounded-3xl  overflow-y-scroll px-3 h-[80vh] lg:h-[1130px] mt-5 relative z-30`}>
        <div className='flex items-center justify-between py-3 border-b-2  '>
            <h3 className='font-semibold'>Filter</h3>
            <VscSettings className='text-xl  hidden lg:block' />
            <RxCross2 onClick={toggleBtn} className='text-xl fixed right-5 bg-white lg:hidden' />
        </div>
        <ul className='py-3 border-b-2 space-y-2'>
          {filter.map((item, index) =>(

            <li key={index} className={` flex justify-between cursor-pointer items-center ${tags.includes(item.toLowerCase()) ? ' text-black' :' text-gray-400'}`} onClick={()=> getTags(item.toLowerCase())}><span>{item}</span> <IoIosArrowForward/></li>
          ))}
        </ul>
        <div className='py-5 space-y-5 border-b-2 '>
          <div className='flex justify-between items-center'>
          <h3 className='font-semibold'>Price</h3>
          <IoIosArrowUp className='text-xl'/>
          </div>
        <Range/>
        </div>
        <div className='py-3 space-y-4 border-b-2 '>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold'>Color</h3>
          <IoIosArrowUp className='text-xl'/>
          </div>
          <div className='flex flex-wrap gap-2 px-5 justify-center'>
            {colors.map((color, index)=>(
              <div key={index} className={`cursor-pointer p-2 w-[35px] h-[35px] rounded-full  ${tags.includes(color.name) ? ' border-blue-700 border-[3px]' :' border-[1px]'}`} onClick={()=>getTags(color?.name)} style={{backgroundColor: color?.value}}></div>
            ))}
          </div>
        </div>
        <div className='py-3 space-y-4 border-b-2 '>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold'>Color</h3>
          <IoIosArrowUp className='text-xl'/>
          </div>
          <div className='flex flex-wrap gap-2 px-5 '>
            {sizes.map((size, index)=>(
              <button key={index} className={`p-2 px-4 rounded-full border-[1px] ${tags.includes(size.value) ? 'bg-black text-white' :'bg-gray-200' }`} onClick={()=>getTags(size.value)}>{size.name}</button>
            ))}
          </div>
        </div>
        <div className='py-3 space-y-4 flex flex-col '>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold'>Dress Style</h3>
          <IoIosArrowUp className='text-xl'/>
          </div>
        <ul className='py-3 space-y-2'>
          {dresses.map((item, index) =>(
          <Link key={index} href={item.link}>
            <li className='text-gray-400 flex justify-between items-center my-3'><span>{item.name}</span> <IoIosArrowForward/></li>
          </Link>
          ))}
        </ul>
        <button className='px-4 py-3 rounded-full bg-black text-white' onClick={()=> setTag(tags)}>Apply Filter</button>
        </div>
    </div>

  )
}

export default SideBar