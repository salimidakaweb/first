"use client"

import React, { createContext, useState } from "react";
 interface ShopingCartContextProviderProps {
    children: React.ReactNode
 }
 type CartItems = {
    id: Number;
    gty: Number;
 };

const ShopingCartContext = createContext({}) 

export default function ShopingCartContextProvider({children}:ShopingCartContextProviderProps ) {



    const [CartItems , setCartItems] = useState<CartItems[]>([]);
  return (
   <ShopingCartContext.Provider value={{}}>
    {children}
   </ShopingCartContext.Provider>
  );
}
