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
             <nav className=" bg-sky-950  text-white flex justify-between fit"> 
            
            <ul className=" bg-[url('/images/logo.png')] w-[132px] h-[90px] lg:w-[120px] lg:h-[80px] bg-cover  mx-16  object-cover ">
              
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
              className={`flex-1 justify-self-center pb-3 mt-1 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
            <div> 
             
            <ul className="h-screen md:h-auto  md:mx-16 md:px-20 md:py-7 py-7 flex flex-col md:flex-row space-y-5 md:space-y-1 md:space-x-5 md:justify-end sm:text-xl  text-center sm:text-right "> 
            <li className="md:px-2 cursor-pointer  hover:text-yellow-400"> Home</li>
            <li className="md:px-2 cursor-pointer  hover:text-yellow-400">
            <Link href="#About" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link></li>

            <li className="md:px-2 cursor-pointer  hover:text-yellow-400">
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