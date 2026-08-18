import { IProductItems } from '@/app/comp/ProductItems'
import React from 'react'

async function product() {
const result = await fetch ("http://localhost:9000/products/1")
const data = (await result.json()) as IProductItems
    return (
        <div className='grid grid-cols-12 mt-4 shadow-md'>
            <div className='col-span-3 '>
                <img src={data.image} />
            </div>
            <div className='col-span-9 p-4'>
                <h2 className='font-bold'>{data.title}</h2>
                <p>{data.description}</p>
                <p className='font-bold'>price: <span>{data.price}</span>$</p>
                <div className='pt-5'>
                   <button className='bg-amber-300 rounded px-2'>+</button> 
                   <span className='px-2'>23</span>
                   <button className='bg-amber-300 rounded px-2'>-</button> 
                </div>
            </div>
        </div>
    )
}

export default product