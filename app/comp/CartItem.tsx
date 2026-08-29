import axios from "axios";
import { useEffect, useState } from "react";
import { IProductItems } from "./ProductItems";
import AddToCard from "./AddToCard";

interface ICartItemProps {
  id: number,
  qty: number
}

export default function CartItem({ id, qty }: ICartItemProps) {

const [data , setData] = useState ({} as IProductItems);

useEffect(()=>{
  axios(`http://localhost:9000/products/${id}`).then (result=>{
    const {data} = result
    setData(data);
    
  })
}, [])

  return (
    <div className=" pb-2 grid grid-cols-12">
      <img className="rounded col-span-2" src={data.image} alt="" />
      <div className="col-span-10 p-4">
        <h3 className="font-bold">{data.title}</h3>
        <p>{data.description}</p>
        <p>number: <span>{qty}</span></p>
        <p className="font-bold">price: <span>{data.price}</span>$</p>
        <div className='pt-5'>
          <AddToCard id={id.toString()} />
        </div>
      </div>
    </div>
  );
}

