import React from 'react'
export interface IProductItems {
    id: string,
    image: string,
    title: string,
    description: string,
    price: number
}
function ProductItems({image,title,price}:IProductItems) {
    return (
        <div className="shadow-lg p-4 rounded-lg">
            <img src={image} alt="" />
            <div className="p-4">
                <h3>{title}</h3>
                <p>Price: <span>{price}$</span></p>
            </div>
        </div>
    )
}

export default ProductItems
