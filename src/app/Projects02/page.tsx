'use client'
import React from 'react'


const Projects02 = () => {
  return (
      <section
        className=" bg-[url('/images/bg2.jpg')] bg-cover bg-no repeat h-screen py-11">
           <h1 className="text-center font-normal text-4xl md:text-5xl text-yellow-400 shadow-2xl shadow-sky-950 ">
                MY PROJECTS
            </h1>
      <div className="flex flex-col md:flex-row md:justify-between mx-9 md:mx-24" >

        <div className="flex flex-col  text-sky-950 ">
          <h1 className=" pt-5 md:pt-12 text-4xl md:text-6xl"> 03.</h1>
          <h3 className=" text-2xl md:text-3xl"> Bahria 7 Wonders city <br/>Mosque</h3>
          <div className=" bg-[url('/images/03.png')] w-[320px] h-[220px]  lg:w-[500px] lg:h-[330px] bg-cover"></div>
        </div>

        <div className="flex flex-col  text-sky-950 ">
        <h1 className="pt-5 md:pt-12 text-4xl md:text-6xl">   04. </h1>
        <h3 className="text-2xl md:text-3xl"> Cafe Qabail</h3>
        <div className="bg-[url('/images/04.png')] w-[320px] h-[220px] lg:w-[500px] lg:h-[330px] bg-cover md:mt-9 "></div>
        </div>

      </div>
          
      </section>
   
  )
}

export default Projects02