'use client'
import { client } from '@/sanity/lib/client'
import { OrderTypes } from '@/types/orderTypes';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react'

const Page = () => {
  const { user } = useUser();
  const [Data, setData] = useState<OrderTypes[]>([])
  const fetchData = async()=>{
    const data:OrderTypes[] = await client.fetch(`*[_type == 'order']`)
    const filterData = data.filter((item)=> item.userId === user?.id)
    setData(filterData)
  }
  fetchData()
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between bg-gray-200 py-3'>
        <p>Order Id</p> 
        <p>Date</p>
        <p>Status</p>
        <p>Items</p>
      </div>
      {Data.map((item)=>(
        <div key={item.orderId} className='flex justify-between'>
          <p className='w-[100px]'>{item.orderId}</p> 
        <p>{item._createdAt}</p>
        <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-fullbg-yellow-100 text-yellow-800`}>
        processing
        </p>
        <p>{Data.length}</p>
        </div>
      ))}
    </div>
  )
}

export default Page