'use client'
import { ShoppingCart } from 'lucide-react'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import CartApis from '../../../_Utils/CartApis'
import { CartContext } from '../../../_context/CartContext'
import { useContext } from 'react'
// import react  from 'react'


function ProductInfo({ product }) {
const {user} = useUser();
const router = useRouter();
const {cart, setCart} = useContext(CartContext);
  const handleAddToCart = () => {
   if(!user){
   router.push('/sign-in');
   }else{
    const data = {
      data: {
        username: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        products: [product?.id], // Replace "product?.id" with a valid product ID
      },
    };
   CartApis.addToCart(data).then(res=>{console.log(res.data.data)
    setCart(oldCart => [...oldCart, 
      {
      id: res.data.data.id,
      product}
    ]);
   } ).catch(err=>console.log(err));
   }
  };
  return (
    <div className='p-4 '>
           
          <h1 className='text-lg pb-2 font-extrabold'>{product?.title}</h1>
          <p className='font-semibold pb-2'>Category: <span className='text-primary'>"{product?.category}" </span></p>
          <p className='font-semibold pb-2'>Price: <span className='text-primary'>  "{product?.price}$"</span></p>
          <p><span className='font-semibold pb-2'>Description: </span>  {product?.description[0]?.children[0]?.text}</p>
         
         <button onClick={()=>handleAddToCart()} className=' p-3 mt-4 text-white bg-primary rounded-md hover:bg-primary/75 flex items-center gap-2 '> Add to cart <ShoppingCart /> </button>
        
         
          </div>
  )
}

export default ProductInfo