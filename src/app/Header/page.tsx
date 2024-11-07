'use client';

import React from 'react'
import Link from "next/link";
import { useState } from "react";

const Header= () => {
  const [navbar, setNavbar] = useState(false);
  return (
     
        <div>
             <nav className=" bg-sky-950  text-white flex justify-between"> 
            
            <ul className=" bg-[url('/images/logo.png')] lg:w-[120px] lg:h-[80px] bg-cover  mx-16  object-cover">
              
            </ul>
             
            <ul className="px-20 py-7 flex space-x-5 justify-end text-xl"> 
            <li className="px-2 cursor-pointer  hover:text-yellow-400"> Home</li>
            <li className="px-2 cursor-pointer  hover:text-yellow-400">
            <Link href="#About" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link></li>

            <li className="px-2 cursor-pointer  hover:text-yellow-400">
            <Link href="#Contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link></li>
            <li className="px-2 cursor-pointer  hover:text-yellow-400"> Search </li>
            </ul>
          </nav>
</div>
   
  )
}

export default Header