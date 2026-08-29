"use client"

import { useShopingCartContext } from "@/context/ShopingCartContext"

interface IAddToCartProps {
    id: string
}
function AddToCard({ id }: IAddToCartProps) {
    const { CartItems, handleIncreaseProductQty, handleDecreaseProductQty, getProductQty } = useShopingCartContext()
    return (
        <div>
            <button onClick={() => handleIncreaseProductQty(parseInt(id))} className='bg-amber-300 rounded px-2 '>+</button>
            <span className='px-2'>{getProductQty(parseInt(id))}</span>
            <button onClick={() => handleDecreaseProductQty(parseInt(id))} className='bg-amber-300 rounded px-2'>-</button>
        </div>
    )
}

export default AddToCard