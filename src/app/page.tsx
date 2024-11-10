'use client';

import About from "./About/page"
import Projects from "./Projects/page"
import Projects02 from "./Projects02/page"
import Projects03 from "./Projects03/page"
import Contact from "./Contact/page"

import Link from "next/link";
import { useState } from "react";
import Wrapper from "./shared/Wrapper";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
   
      <main>
        <Wrapper>
        <section className="bg-[url('/images/bg2.jpg')] bg-cover bg-no repeat h-screen py-12 md:pt-40 mx-auto ">
         
          <div className="flex flex-col md:flex-row md:items-center text-center md:text-left">
            <div> 
            <h3 className="font-bold text-3xl mx-16 my-5 text-sky-950">
              Hi, I am
              </h3>
              <h1 className="font-extrabold text-5xl md:text-6xl mx-16 text-sky-950  shadow-sky-950 font-serif text-decoration-line: italic underline ">
              Sughra Rasheed!
              </h1> 
            
            <p className="text-2xl text-gray-600 mx-16 my-7 md:my-11" > 
            I am an Architect and Interior designer
            </p>
            <button className="bg-yellow-400 text-sky-950 mx-16 md:my-6 py-1 md:py-2 px-4 rounded-2xl text-xl hover:text-white hover:bg-sky-950 font-bold"> 
            <Link href="#Projects" onClick={() => setNavbar(!navbar)}>
              My Projects 
                  </Link>
               </button>

               <button className="bg-sky-950 text-yellow-400  my-2 md:my-6 py-1 md:py-2 px-4 rounded-2xl text-xl hover:text-white hover:bg-sky-950 font-bold"> 
            <Link href="/pdf/resume.pdf" download target="main">
              Download Resume
                  </Link>
               </button>
          </div>
         
          <div className="rounded-full shadow-xl  border-sky-950 shadow-zinc-600 bg-[url('/images/mypic.png')] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-cover mx-auto my-10 md:my-auto "></div>
       
          
          </div>
        </section>
        
        <About/>
        <Projects/>
        <Projects02/>
        <Projects03/>
        <Contact/>
        </Wrapper>
      </main>
     
  );
}
