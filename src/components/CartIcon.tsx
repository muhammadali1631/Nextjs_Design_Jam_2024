"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { TbShoppingBagCheck } from "react-icons/tb";

interface Props {
  id: string;
  quantity: number;
  color: string;
  add?: string;
}

interface CartType {
  id: string;
  quantity: number;
  color: string;
}

const CartIcon = ({ id, quantity, color, add }: Props) => {
  const [cart, setCart] = useState<CartType[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  useEffect(() => {
    if (cart.length !== 0) {
    localStorage.setItem("cartItem", JSON.stringify(cart));
    }
  }, [cart]);

  

  const addCart = ({ id, quantity, color }: Props) => {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );

    } else {
      setCart([...cart, { id, quantity, color }]);
    }
  };

  const delCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    if(updatedCart.length === 0){
      localStorage.setItem("cartItem", JSON.stringify([]));
    }
  };

  const isInCart = cart.some((item) => item.id === id);

  return (
    <>
      {add ? (
        <button
          type="button"
          className="w-[80%] px-4 rounded-full py-2 border-[1px] border-black text-white bg-black font-bold hover:text-black hover:bg-white duration-300"
          onClick={() => addCart({ id, quantity, color })}
        >
          Add to cart
        </button>
      ) : (
        <div className="p-2 bg-white rounded-full cursor-pointer">
          {isInCart && (
            <TbShoppingBagCheck
              onClick={() => delCart(id)}
              className="text-2xl text-black"
            />
          )}
        </div>
      )}
    </>
  );
};

export default CartIcon;
