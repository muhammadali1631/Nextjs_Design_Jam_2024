'use client'
import ProductCard from './ProductCard';
// import { products } from '@/data/product'
import ViewAll from './ViewAll';
import Underline from './Underline';
import { client } from '@/sanity/lib/client';
import { ProductType } from '@/types/productTypes';
import { useState } from 'react';

const ProductCardList = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const fetchData = async() =>{

    const products:ProductType[] = await client.fetch(`*[_type == 'products']`)
    setProducts(products)
  }
  fetchData()
  return (
    <div className=" p-4 px-10 my-16" id='new'>
      <h2 className="text-4xl font-black text-center mb-10">NEW ARRIVALS</h2>
      <div className="flex justify-around gap-3 overflow-x-scroll hide-scrollbar my-6">
        {products.filter(item => item.isNew).map((product, index) => (
          <ProductCard key={index} product={product}/>
        ))}
      </div>
        <ViewAll/>
        <Underline/>
    </div>
  );
};

export default ProductCardList;