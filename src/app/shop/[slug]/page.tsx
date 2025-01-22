import React from "react";
// import {products} from '@/data/product'
import { IoIosArrowForward } from "react-icons/io";
import { client } from "@/sanity/lib/client";
import Tabs from "@/components/Tabs";
import ProductDetails from "@/components/ProductDetalis";
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const product = await client.fetch(
    `*[_type == 'products' && slug == $slug][0]`,
    { slug }
  );
  return (
    <div className="px-3 sm:px-16">
      <h1 className="flex items-center">
        Home <IoIosArrowForward /> Shop <IoIosArrowForward />
        {product.category}
      </h1>

      <ProductDetails product={product} />

      <Tabs />
    </div>
  );
};

export default page;
