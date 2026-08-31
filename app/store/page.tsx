import React from 'react'
import ProductItems, { IProductItems, IProductList } from '../comp/ProductItems'
import Link from 'next/link'
import Pagination from '../comp/Pagination';

interface IStoreProos {
  params: Promise<{}> ;
  searchParams: Promise<{page: string; per_page: string;}> ;
}
async function store({searchParams}: IStoreProos) {

  const page = (await searchParams).page ?? "1"
  const per_page = (await searchParams).per_page ?? "5"

  const result = await fetch(`http://localhost:9000/products?_page=${page}&_per_page=${per_page}`)
  const data = await result.json() as IProductList

  return (
    <div>
      <h3 className="py-4 font-bold text-2xl">
        Store Page
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {data.data.map((item) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItems {...item} />
          </Link>
        ))}
      </div>
      <Pagination  pageCount={data.pages}/>
    </div> 
  )
}

export default store