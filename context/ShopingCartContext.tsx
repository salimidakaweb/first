"use client"

import React, { createContext, useContext, useState } from "react";
interface ShopingCartContextProviderProps {
   children: React.ReactNode
}
type CartItems = {
   id: number;
   qty: number;
};
type TShopingCartContextType = {
   CartItems: CartItems[];
   handleIncreaseProductQty: (id: number) => void;
   getProductQty: (id: number) => number;
   cartTotaliQty: number;
   handleDecreaseProductQty: (id: number) => void;
};
const ShopingCartContext = createContext({} as TShopingCartContextType);
export const useShopingCartContext = () => {
   return useContext(ShopingCartContext)
}
export default function ShopingCartContextProvider({ children }: ShopingCartContextProviderProps) {

   const [CartItems, setCartItems] = useState<CartItems[]>([]);

   const cartTotaliQty = CartItems.reduce((totalQty, item) => {
      return totalQty + item.qty
   }, 0)

   const getProductQty = (id: number) => {
      return CartItems.find(item => item.id == id)?.qty || 0
   };

   const handleIncreaseProductQty = (id: number) => {
      setCartItems((currentItems) => {
         let isNotProductExist = currentItems.find((item) => item.id == id) == null;
         if (isNotProductExist) {
            return [...currentItems, { id: id, qty: 1 }]
         } else {
            return currentItems.map((item) => {
               if (item.id == id) {
                  return {
                     ...item,
                     qty: item.qty + 1,
                  };
               } else {
                  return item;
               }
            });
         }

      });
   };

   const handleDecreaseProductQty = (id: number) => {
      setCartItems(currentItems => {
         let isLastOne = currentItems.find(item => item.id == id)?.qty == 1
         if (isLastOne) {
            return currentItems.filter(item => item.id != id)
         } else {
            return currentItems.map(item => {
               if (item.id == id) {
                  return {
                     ...item, qty: item.qty - 1,
                  };
               }
               else {
                  return item;
               }
            });
         }
      });
   };


   return (
      <ShopingCartContext.Provider value={{ CartItems, handleIncreaseProductQty, getProductQty, cartTotaliQty, handleDecreaseProductQty }}>
         {children}
      </ShopingCartContext.Provider>
   );
}
