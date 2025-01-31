"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";
import { FaStarHalf } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import CartIcon from "./CartIcon";
import { ProductType } from "@/types/productTypes";
import { IconType } from "react-icons";
// import ProductType from "@/Types/product";
const ProductDetails = ({ product }: {product: ProductType}) => {
  const [color, setColor] = useState(product.images[0].color);
  const [Index, setIndex] = useState(0);
  const [count, setCount] = useState(1);
  const [Size, setSize] = useState(product.sizes[0]);
  const filtered = product.images.filter((item) => item.color === color)[0];
  return (
    <div className="flex justify-around flex-wrap">
      <div className="flex gap-4 flex-col-reverse sm:flex-row">
        <div className="flex sm:block gap-2 justify-around">
          {filtered.image.map((item, index) => (
            <div
            key={index}
              className={`h-[90px] w-[90px]  sm:h-[150px] sm:w-[150px] my-2 bg-[#F2F0F1] rounded-xl cursor-pointer ${index === Index && "border-2 border-blue-500"}`}
              onClick={() => setIndex(index)}
            >
              <Image
                src={urlFor(item).url()}
                height={150}
                width={150}
                alt="image"
                key={index}
                className=" w-full h-full p-4 object-cover mix-blend-multiply "
              />
            </div>
          ))}
        </div>
        <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-[#F2F0F1] rounded-xl">
          <Image
            src={urlFor(filtered.image[Index]).url()}
            width={450}
            height={300}
            alt="image"
            className="h-full w-full p-8 mix-blend-multiply object-cover"
          />
        </div>
      </div>
      <div className="w-[90vw] sm:w-[400px] md:w-[600px]">
        <h1 className="text-4xl font-black my-2">{product.name}</h1>
        <div className="space-y-1 flex items-center gap-1 text-2xl">
          <div className="flex gap-1">
            {Array(Number(product.rating?.toString().charAt(0)))
              .fill(FaStar)
              .map((Icon: IconType, index: number) => (
                <Icon key={index} className="text-yellow-500" />
              ))}{" "}
            {product.rating?.toString().charAt(2) !== "0" && (
              <FaStarHalf className="text-yellow-500" />
            )}
          </div>
          <p>
            {product.rating}
            <span className="text-gray-500">/5</span>
          </p>
        </div>
        <div className="flex gap-2 my-2">
          <h3 className="text-2xl font-bold">
            $
            {product.price * count - (product.price * count * product.discountPercent) /100 }
          </h3>
          {product.discountPercent && (
            <h3 className="text-2xl font-bold line-through text-gray-500">
              {Math.floor(product.price * count * 100) / 100}
            </h3>
          )}
          {product.discountPercent && (
            <p className="pt-[2.5px] px-2 rounded-full text-red-600 bg-red-200">
              -{product.discountPercent}%
            </p>
          )}
        </div>
        <p className="text-lg border-b-2 pb-2">{product.description}</p>
        <h3 className="text-xl font-bold my-2">Select Colors</h3>
        <p>Color: {color}</p>
        <div className="flex gap-3 border-b-2  pb-3">
          {product.images.map((item, index) => (
            <div
            key={index}
              className={`h-[60px] w-[70px] bg-gray-100 rounded-lg cursor-pointer  ${item.color === color && "border-2 border-blue-500"}`}
              onClick={() => setColor(item.color)}
            >
              <Image
                src={urlFor(item.image[0]).url()}
                alt="image"
                height={50}
                width={50}
                className=" h-full w-full object-cover mix-blend-multiply p-1"
              />
            </div>
          ))}
        </div>
        <h3 className="text-xl font-bold my-2">Select Size</h3>
        <div className="flex gap-2">
          {product.sizes.map((item, index) => (
            <button
              onClick={() => setSize(item)}
              key={index}
              className={`py-[5px] px-4  rounded-full ${item == Size ? "bg-black text-white" : "bg-gray-200"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex justify-around my-3 gap-7">
          <div
            className={`flex  text-2xl items-center bg-gray-200 rounded-full py-2 px-6 gap-6`}
          >
            <button onClick={() => setCount(count === 1 ? 1 : count -1  )}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <CartIcon id={product._id} color={color} price={product.discountPercent? product.price - (product.price * product.discountPercent) /100: product.price} quantity={count} add="yes"/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
