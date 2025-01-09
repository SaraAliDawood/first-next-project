import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productsList }) {
  return (
    <> 
    {/* <h1 className='text-3xl py-6 bg-white text-center font-bold text-primary'>Our Latest Products</h1> */}
    
    <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 bg-white gap-2'>
      
      {productsList.map(product=>(
        <div key={product.id}><ProductItem product={product} />  </div>))}
    </div>
    </>
  )
}

export default ProductList