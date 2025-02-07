"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from "@hookform/resolvers/yup";
import { client } from "@/sanity/lib/client";
import { useUser } from "@clerk/nextjs";

type OrderFormValues = {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
};

const OrderForm = () => {
  const { user } = useUser();
  const uniqueId = uuidv4();
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Full Name must be at least 3 characters")
      .required("Full Name is required"),
    phone: Yup.string()
      .matches(/^\+?[0-9]{7,15}$/, "Invalid phone number")
      .required("Phone number is required"),
    address: Yup.string()
      .min(10, "Address must be at least 10 characters")
      .required("Address is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    zipCode: Yup.string()
      .matches(/^[0-9]{5,10}$/, "Invalid ZIP Code")
      .required("ZIP Code is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<OrderFormValues>({
    resolver: yupResolver(validationSchema),
  });
  const sentOrder = (data:OrderFormValues)=>{
    const cartData = localStorage.getItem('cartItem');
    const products = cartData ? JSON.parse(cartData) : [];
    if(cartData){
    const newDocument = {
      _type: 'order', 
      userId: user?.id,
      orderId: uniqueId,
      details: data,
      products: products,
      status: 'proccessing',
    };
    
    client
      .create(newDocument)
    localStorage.setItem("cartItem", JSON.stringify([]))
    alert("Order submitted successfully!");
    }else{
    alert("Your cart is empty!");

    }
  }

  const onSubmit: SubmitHandler<OrderFormValues> = (data) => {
    
    sentOrder(data)
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Order Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              {...register("fullName")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block font-medium">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              {...register("phone")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block font-medium">
              Address
            </label>
            <textarea
              id="address"
              {...register("address")}
              rows={3}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="block font-medium">
              City
            </label>
            <input
              id="city"
              type="text"
              {...register("city")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="country" className="block font-medium">
              Country
            </label>
            <input
              id="country"
              type="text"
              {...register("country")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="zipCode" className="block font-medium">
              ZIP Code
            </label>
            <input
              id="zipCode"
              type="text"
              {...register("zipCode")}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.zipCode && (
              <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-xl"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
