"use client"
import { useShopingCartContext } from "@/context/ShopingCartContext";
import Cont from "../comp/Cont";
import CartItem from "../comp/CartItem";

export default function Cart() {
  const { CartItems } = useShopingCartContext()



  return (
    <Cont>
      <div>
        <h1 className="pb-2">cart item</h1>
        {
          CartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
      </div>
      <div className="border shadow-md p-4">
        <h3>total price: 100$</h3>
        <h3>win: 10$</h3>
        <h3>final price: 90$</h3>
        <div className="mt-2">
          <input className="border" placeholder="trial code" type="number" />
          <button className="bg-amber-300 rounded ml-1 px-1">submit</button>
        </div>
      </div>

    </Cont>
  );
}
