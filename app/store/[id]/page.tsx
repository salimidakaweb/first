import { IProductItems } from '@/app/comp/ProductItems'
import React from 'react'
interface Iparams {
params: Promise<{id:string}>
SearchParams:Promise<{}>
}


async function product({params}:Iparams ) {
    const {id} = await params;
 
const result = await fetch (`http://localhost:9000/products/${id}`)
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