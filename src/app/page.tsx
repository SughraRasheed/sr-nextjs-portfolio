'use client';
import Image from "next/image";
import About from "./About/page"
import Projects from "./Projects/page"
import Projects02 from "./Projects02/page"
import Projects03 from "./Projects03/page"
import Contact from "./Contact/page"


import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
   
      <main >
        <section className="bg-[url('/images/bg2.jpg')] bg-cover bg-no repeat h-screen py-40">
         
          <div className="flex justify-between">
            <div> 
            <h3 className="font-bold text-5xl mx-20 text-sky-950">
              Hi, I am
              </h3>
              <h1 className="font-extrabold text-7xl mx-20 text-sky-950 shadow-sky-950 font-serif ">
              Sughra Rasheed!
              </h1> 
            
            <p className="text-3xl text-gray-600 mx-20 my-11" > 
            I am an Architect and Interior designer
            </p>
            <button className="bg-yellow-400 text-sky-950 mx-20 my-6 py-2 px-4 rounded-2xl text-2xl hover:text-white hover:bg-sky-950 font-bold"> 
            <Link href="#Projects" onClick={() => setNavbar(!navbar)}>
              My Projects 
                  </Link>
               </button>
          </div>
         
          <div className="rounded-full shadow-xl  border-sky-950 shadow-zinc-600 bg-[url('/images/mypic.png')] w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-cover mx-auto my-auto "></div>
       
          
          </div>
        </section>
        
        <About/>
        <Projects/>
        <Projects02/>
        <Projects03/>
        <Contact/>

      </main>
     
  );
}
