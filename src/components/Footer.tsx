import React from "react";
import Email from "./Email";
import Link from "next/link";
import logo from '@/images/logo.png'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F2F0F1] relative mt-48 md:mt-28">
        <Email/>
       

<div className="bg-white dark:bg-gray-900 pt-40 md:pt-24">
    <div className="">
      <div className="flex justify-evenly gap-10 flex-wrap">
        <div className="w-[220px] space-y-4">
          <Image src={logo} alt="logo"/>
          <p>I successfully completed the Marketplace Hackathon showcasing my expertise in building a dynamic and user-focused e-commerce platform. </p>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Pages</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link href="/shop" className=" hover:underline">Shop</Link>
                </li>
                <li className="mb-4">
                    <Link href="/orders" className="hover:underline">Orders</Link>
                </li>
                <li className="mb-4">
                    <Link href="/cart" className="hover:underline">Cart</Link>
                </li>
                <li className="mb-4">
                    <Link href="/submitorder" className="hover:underline">Submit Order</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Categories</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Discord Server</Link>
                </li>
                <li className="mb-4">
                    <Link href="/category/casual" className="hover:underline">Casual</Link>
                </li>
                <li className="mb-4">
                    <Link href="/category/party" className="hover:underline">Party</Link>
                </li>
                <li className="mb-4">
                    <Link href="/category/gym" className="hover:underline">GYM</Link>
                </li>
                <li className="mb-4">
                    <Link href="/category/formal" className="hover:underline">Formal</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Links</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link href="https://www.linkedin.com/in/ali-shahzad-42aa24234/" className="hover:underline">LinkedIn</Link>
                </li>
                <li className="mb-4">
                    <Link href="https://github.com/muhammadali1631" className="hover:underline">GitHub</Link>
                </li>
                
            </ul>
        </div>
        
    </div>
    <div className="px-4 py-6  dark:bg-gray-700  flex justify-center">
        <span className="text-sm text-gray-500 dark:text-gray-300 text-center">© 2025 <Link href="/">TrueBuy™</Link>. All Rights Reserved.
        </span>
        
      </div>
    </div>
</div>

    </footer>
  );
};

export default Footer;