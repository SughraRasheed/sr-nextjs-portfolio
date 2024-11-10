'use client';

import React from 'react'
import Link from 'next/link';
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Wrapper from '../shared/Wrapper';


const Header= () => {
  const [navbar, setNavbar] = useState(false);
  return (
    
    <Wrapper>
        <div>
             <nav className=" bg-sky-950  text-white flex justify-between "> 
            
            <ul className=" bg-[url('/images/logo.png')] w-[120px] h-[90px] lg:w-[120px] lg:h-[80px] bg-cover  mx-16  object-cover ">
              
            </ul>
             {/* HAMBURGER BUTTON FOR MOBILE */}
             <div className="md:hidden">
                <button
                  className=" text-white absolute cursor-pointer top-[1rem] right-[1rem] w-[2rem] h-[1rem]"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <XMarkIcon className="text-xl " />
                  ) : (
                    <Bars3Icon className="text-xl " />
                  )}
                </button>
              </div>
              <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
            <div> 
             
            <ul className="px-20 py-7 flex space-x-5 justify-end text-xl "> 
            <li className="px-2 cursor-pointer  hover:text-yellow-400"> Home</li>
            <li className="px-2 cursor-pointer  hover:text-yellow-400">
            <Link href="#About" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link></li>

            <li className="px-2 cursor-pointer  hover:text-yellow-400">
            <Link href="#Contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link></li>
          
            </ul>
            </div>
            </div>
          </nav>
         
</div>
</Wrapper>
  )
}

export default Header