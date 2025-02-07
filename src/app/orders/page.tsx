'use client'
import { client } from '@/sanity/lib/client'
import { OrderTypes } from '@/types/orderTypes';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react'

const Page = () => {
  const { user } = useUser();
  const [Data, setData] = useState<OrderTypes[]>([])
  const fetchData = async()=>{
    const data:OrderTypes[] = await client.fetch(`*[_type == 'order']`, {}, { cache: "no-store" })
    const filterData = data.filter((item)=> item.userId === user?.id)
    setData(filterData)
  }
  fetchData()
  return (
    <div className='container mx-auto my-5 overflow-x-scroll min-h-screen'>
      {Data ? <table className='table-auto w-full border-collapse border border-gray-300'>
        <thead className='bg-gray-200'>
          <tr>
            <th className='border border-gray-300 px-4 py-2 text-left'>Order Id</th>
            <th className='border border-gray-300 px-4 py-2 text-left'>Date</th>
            <th className='border border-gray-300 px-4 py-2 text-left'>Status</th>
            <th className='border border-gray-300 px-4 py-2 text-left'>Items</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item) => (
            <tr key={item.orderId}>
              <td className='border border-gray-300 px-4 py-2'>{item.orderId}</td>
              <td className='border border-gray-300 px-4 py-2'>{item._createdAt}</td>
              <td className='border border-gray-300 px-4 py-2'>
                <span
                  className={`px-2 inline-flex leading-5 font-semibold rounded-full ${item.status === 'proccessing'? 'bg-yellow-100 text-yellow-800': 'bg-green-300 text-green-800'}`}
                >
                  {item.status}
                </span>
              </td>
              <td className='border border-gray-300 px-4 py-2'>{Data.products.length}</td>
            </tr>
          ))}
        </tbody>
      </table> : <h3 className='text-center text-2xl'>No Order Found </h3>}
    </div>
  )
}

export default Page
