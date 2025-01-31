'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { SlArrowRight } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";
import { client } from '@/sanity/lib/client';
import {ProductType} from '@/types/productTypes';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

const Page = () => {
  const [cart, setCart] = useState<{ id: string; quantity: number; color: string, price: number }[]>([]);
  const [Products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem("cartItem", JSON.stringify(cart));
    }else{
      setProducts([])
    }
    const getProduct = async () => {
      const product: ProductType[] = await client.fetch(`*[_type == 'products']`);
      const filteredProducts = product.filter((item) => cart.some((cartItem) => cartItem.id === item._id));
      setProducts(filteredProducts);
    };
    getProduct();
  }, [cart]);

  const delCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    if (updatedCart.length === 0) {
      localStorage.setItem("cartItem", JSON.stringify([]));
      setProducts([]);
    }
  };

  const updateQuantity = (id: string, increment: boolean) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: increment ? item.quantity + 1 : Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const total = Products.reduce((sum, item) => {
    const cartItem = cart.find((cartItem) => cartItem.id === item._id);
    return cartItem ? sum + cartItem.price * cartItem.quantity : sum;
  }, 0);

  return (
    <div className="px-3 sm:px-16">
      <h1 className='flex items-center gap-3 ml-1 mt-8'> Home <SlArrowRight /> Cart </h1>
      <h1 className="text-4xl ml-1 mt-10 font-bold mb-5">Your Cart</h1>

      <div className="flex justify-around flex-wrap gap-5">
        <div className="flex flex-col gap-6 border mb-10 rounded-xl ml-1 w-[700px] sm:p-5 p-2">
         {Products.length > 0 ? Products?.map((item, index) => {
            const cartItem = cart.find((cartItem) => cartItem.id === item._id);
            // const filterImage = item?.images.filter((item) => item.color === cart[index]?.color)[0]
            return (
              <div key={index} className={`flex gap-4 border-b-2 py-2 ${index === Products.length - 1 ? 'border-b-0' : 'border-b-2'}`}>
                <Link href={`shop/${item.slug}`}>
                  <Image src={urlFor(item.images[0].image[0]).url()} height={112} width={112} alt={item.name} className="w-24 sm:w-28 sm:h-28 border rounded object-cover" />
                </Link>
                <div className="flex-1">
                  <h2 className="flex text-md sm:text-lg font-semibold justify-between line-clamp-2">
                    {item.name}
                    <RiDeleteBin6Fill className='text-black text-2xl sm:text-3xl w-10' onClick={() => delCart(item._id)} />
                  </h2>
                  <div className='space-y-2 sm:flex justify-between items-center'>
                    <div>
                    <p className="text-xl font-semibold">Cost: ${((cartItem?.price ?? 0) * (cartItem?.quantity || 1)).toFixed(2)}</p>
                      <p>color: {cart[index]?.color}</p>
                    </div>
                    <div className="flex text-2xl items-center bg-gray-200 rounded-full py-1 px-2 sm:py-2 sm:px-6 gap-2 sm:gap-6 w-[120px] justify-between">
                      <button onClick={() => updateQuantity(item._id, false)}>-</button>
                      <p>{cartItem?.quantity || 1}</p>
                      <button onClick={() => updateQuantity(item._id, true)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }): <h3>Product not found</h3> } 
        </div>

        <div className="p-6 border ml-2 rounded-xl flex flex-col h-[450px] w-[400px]">
          <h2 className="text-xl font-semibold mb-9">Order Summary</h2>
          <div className="flex mb-5 justify-between">
            <p>Subtotal</p>
            <p>${total.toFixed(2)}</p>
          </div>
          
          <div className="flex mb-5 justify-between">
            <p>Delivery Fee</p>
            <p>Free</p>
          </div>
          <hr className="my-4" />
          <div className="flex mb-4 justify-between">
            <p className="font-bold">Total</p>
            <p className="font-bold">${total.toFixed(2)}</p>
          </div>
          <div className="flex gap-2 sm:gap-4 mt-4">
            <input type="text" placeholder="Add promo code" className="border border-gray-300 w-[150px] sm:w-[300px] px-2 rounded-3xl" />
            <button className="bg-black text-white font-bold py-2 sm:px-6 px-3 rounded-3xl">Apply</button>
          </div>
          
          <Link href={Products.length > 0 ? '/submitorder' : '#'} className='w-full'>
           <button className="bg-black w-full text-white font-bold py-2 flex justify-center items-center gap-2 rounded-3xl sm:mt-10 mt-2">
            Go to Checkout <FaArrowRight />
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Page;
