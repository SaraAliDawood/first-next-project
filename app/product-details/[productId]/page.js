'use client';
import React, { useEffect, useState } from 'react';
import { use } from 'react'; // Import `use` for unwrapping params
import ProductApis from '../../_Utils/ProductApis';
import Breadcrumb from '../../_component/Breadcrumb';
import ProductBanner from './_components/ProductBanner';
import ProductInfo from './_components/ProductInfo';
import ProductList from '../../_component/ProductList';
import { usePathname } from 'next/navigation';

function ProductDetails({ params }) {
  // Unwrap params using `use`
  const unwrappedParams = use(params);

  // State to store the product and error
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (unwrappedParams?.productId) { 
      fetchProduct(Number(unwrappedParams.productId)); // Ensure productId is a number
    }
  }, [unwrappedParams?.productId]);

  const fetchProduct = async (productId) => {
    try {
      // Fetch the product using the frontend filtering logic
      const product = await ProductApis.getProductById(productId);
      setProduct(product); // Set the found product to state
      console.log(product,"product");
      getProductListByCategory(product);
      
    } catch (err) {
      setError(err.message); // Handle errors gracefully
    }
  };
 const getProductListByCategory = (product) => {
   ProductApis.getProductsByCategory(product.category).then(res=>{console.log(res.data.data);
     setProductList(res.data.data)
   });
   
 }
 const path = usePathname();
   console.log(path);
  return (
    <div className='px-10 py-8 md:px-28' >
      <Breadcrumb path={path} />
     <div className=' mt-10 grid grid-cols-1 md:grid-cols-2'> 
          <ProductBanner product={product} />
          <ProductInfo product={product} />
         
          </div>
          <hr  className='mt-10'/>
          <h2 className='text-3xl font-bold text-center text-primary mt-9 mb-9'>Similar products</h2>
          <div className='grid grid-cols-1 '>
          <ProductList productsList={productList} />
          </div>
    </div>
  );
}

export default ProductDetails;
