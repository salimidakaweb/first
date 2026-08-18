import React from 'react'
import ProductItems, { IProductItems } from '../comp/ProductItems'
import Link from 'next/link'

async function store() {

const result = await fetch("http://localhost:9000/products")
const data = await result.json() as IProductItems[]


  return (
    <div>
      <h3 className="py-4 font-bold text-2xl">
        Store Page
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItems {...item} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default store