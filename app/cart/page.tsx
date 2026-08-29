"use client"
import { useShopingCartContext } from "@/context/ShopingCartContext";
import Cont from "../comp/Cont";
import CartItem from "../comp/CartItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProductItems } from "../comp/ProductItems";
import { formatNumberWithCommas } from "@/utils/number";

interface IDiscountsData {
  id: number;
  code: string;
  percentage: number
}
export default function Cart() {
  const { CartItems } = useShopingCartContext()

  const [discounts, setDiscounts] = useState("");

  const [data, setData] = useState<IProductItems[]>([]);
  const [finalprice, setFinalprice] = useState(0);
  const [DiscountsPrice, setDiscountsPrice] = useState(0);

  useEffect(() => {
    axios(`http://localhost:9000/products`).then(result => {
      const { data } = result
      setData(data);
    })
  }, [])
  let totalprice = CartItems.reduce((total, item) => {
    let selectedProduct = data.find((product) => product.id == item.id.toString())
    return total + (selectedProduct?.price || 0) * item.qty
  }, 0)
  const handleSubmitDiscount = () => {
    axios(`http://localhost:9000/discounts?code=${discounts}`).then(
      (result) => {
        const data = result.data as IDiscountsData[];
        let DiscountsPrice = totalprice * data[0].percentage / 100;
        let finalprice = totalprice - DiscountsPrice
        setFinalprice(finalprice)
        setDiscountsPrice(DiscountsPrice)

      });
  };
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
        <h3>total price: <span>
          {
            formatNumberWithCommas(totalprice)
          }
        </span>$</h3>
        <h3>win: <span>{formatNumberWithCommas(DiscountsPrice)}</span>$</h3>
        <h3>final price: <span>{formatNumberWithCommas(finalprice)}</span>$</h3>
        <div className="mt-2">
          <input onChange={(e) => setDiscounts(e.target.value)} className="border" placeholder="trial code" type="text" />
          <button onClick={handleSubmitDiscount} className="bg-amber-300 rounded ml-1 px-1">submit</button>
        </div>
      </div>
    </Cont>
  );}