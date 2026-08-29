"use client"

import { useShopingCartContext } from "@/context/ShopingCartContext"

interface IAddToCartProps {
    id: string
}
function AddToCard({ id }: IAddToCartProps) {
    const { CartItems, handleIncreaseProductQty, handleDecreaseProductQty,handleRemoveProduct, getProductQty } = useShopingCartContext()
    return (
        <div>
            <div>
                <button onClick={() => handleIncreaseProductQty(parseInt(id))} className='bg-amber-300 rounded px-2 cursor-pointer '>+</button>
                <span className='px-2'>{getProductQty(parseInt(id))}</span>
                <button onClick={() => handleDecreaseProductQty(parseInt(id))} className='bg-amber-300 rounded px-2 cursor-pointer'>-</button>
            </div>
            <button onClick={() => handleRemoveProduct(parseInt(id))} className="bg-red-500 rounded px-3 text-white my-2 cursor-pointer">remove</button>
        </div>
    )
}

export default AddToCard