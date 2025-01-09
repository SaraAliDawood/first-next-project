'use client'
import React from 'react'
import ProductList from './ProductList'
import ProductApis from '../_Utils/ProductApis'
import { useEffect , useState } from 'react'

function ProductSection() {
    const [productsList, setProductList] = useState([])
   
    const getLatestProducts_=()=>{
        ProductApis.getLatestProducts().then(res=>{console.log(res.data.data)
            setProductList(res.data.data)
        })
    }
    useEffect(() => {
        getLatestProducts_()
    }, [])
  return (
    <>
    
    <ProductList productsList={productsList} />
    
    </>
  )
}

export default ProductSection