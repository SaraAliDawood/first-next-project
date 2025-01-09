'use client';
import  { useEffect , useState , useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCart } from 'lucide-react';

import { CartContext } from '../_context/CartContext';
import CartApis from '../_Utils/CartApis';


function Header()  {
  // console.log("href",window.location.href);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {cart , setCart} = useContext(CartContext);
  useEffect(() => {
    setIsLoggedIn(window.location.href.toString().includes("/sign-in"));
  }, []);

  const  {user} = useUser();
  useEffect(() => {
  user && getCartItems();
  },[user ]);
  const getCartItems = ()=>CartApis.getUserCartItems(user?.primaryEmailAddress.emailAddress)
  .then(res=>{console.log(res.data.data)
    setCart(res.data.data)
  });

  return !isLoggedIn && (
    <header className="bg-white">
  <div className="mx-auto flex h-16  items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
  <Link href="/">
   <Image src="/logo.svg" alt="logo" width={180} height={150}/>
 </Link>
    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link className="text-gray-500 transition hover:text-primary/75" href="/"> Home </Link>
          </li>

          <li>
            <Link className="text-gray-500 transition hover:text-primary/75" href="#"> Explore </Link>
          </li>

          <li>
            <Link className="text-gray-500 transition hover:text-primary/75" href="#"> Projects </Link>
          </li>

          <li>
            <Link className="text-gray-500 transition hover:text-primary/75" href="/aboutUs"> About Us </Link>
          </li>

          <li>
            <Link className="text-gray-500 transition hover:text-primary/75" href="/contactUs"> Contact Us </Link>
          </li>

        
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        {!user ? (
            <div className="sm:flex sm:gap-4">
            <Link
              className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary/75"
              href="/sign-in"
            >
              Login
            </Link>
  
            <Link
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primary/75 sm:block"
              href="#"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4"> 
            <h2 className="text-primary flex items-center gap-1 cursor-pointer transition hover:text-primary/75"><ShoppingCart /> {cart.length} </h2>
            <UserButton />
          </div>
        )}
      

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header