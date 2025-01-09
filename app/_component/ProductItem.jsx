import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



function ProductItem({ product }) {
  const baseUrl = "http://localhost:1337";

  // Construct the full image URL
  const imageUrl = product?.banner?.url
    ? `${baseUrl}${product.banner.url}` // Use the main URL if available
    : `${baseUrl}${product?.banner?.formats?.thumbnail?.url}`; // Fallback to thumbnail

  return (
    <>
    <Link href={`/product-details/${product?.id}`}>
    <div className=' m-1 rounded-md h-full shadow-lg hover:shadow-lg hover:border-primary bg-white'>
      <Image
        src={imageUrl}
        alt={product?.banner?.name || 'Product Image'}
        width={400}
        height={300}
        className='rounded-t-lg h-[170px] object-cover'
      />
       <div className='p-4 '>
        
       <h1 className='text-lg font-extrabold'>{product?.title}</h1>
       <p className='font-semibold'>Category: <span className='text-primary'>"{product?.category}" </span></p>
       <p className='font-semibold'>Price: <span className='text-primary'>  "{product?.price}$"</span></p>
       <p><span className='font-semibold'>Description: </span>  {product?.description[0]?.children[0]?.text}</p>
       </div>
        
    </div>
    </Link>
    
    </>
  );
}

export default ProductItem;
