'use client'
import React from 'react'


const Projects03 = () => {
  return (

      <section
        className=" bg-[url('/images/bg2.jpg')] bg-cover bg-no repeat h-screen py-4 md:py-11 ">
           <h1 className="text-center font-normal text-4xl md:text-5xl text-yellow-400 shadow-2xl shadow-sky-950 ">
                MY PROJECTS
            </h1>
      <div className="flex flex-col md:flex-row md:justify-between mx-9 md:mx-24" >

        <div className="flex flex-col  text-sky-950 ">
          <h1 className=" pt-5 md:pt-12 text-4xl md:text-6xl"> 05.</h1>
          <h3 className=" text-2xl md:text-3xl">  Lounge Interior</h3>
          <div className=" bg-[url('/images/05.png')] w-[300px] h-[200px]  lg:w-[500px] lg:h-[330px] bg-cover"></div>
        </div>

        <div className="flex flex-col  text-sky-950 ">
        <h1 className="pt-5 md:pt-12 text-4xl md:text-6xl">   06. </h1>
        <h3 className="text-2xl md:text-3xl">Office Interior</h3>
        <div className="bg-[url('/images/06.png')] w-[300px] h-[200px] lg:w-[500px] lg:h-[330px] bg-cover "></div>
        </div>

      </div>
           {/* <h1 className="text-center font-normal text-5xl text-yellow-400 shadow-2xl shadow-sky-950 ">
                MY PROJECTS
            </h1>
      <div className="" >
        <div className="flex justify-between text-sky-950 text-6xl">
          <h1 className="mx-28 pt-12">
            05.
          </h1>
          <h1 className="mx-auto pt-12">
            06.
          </h1>
          
        </div>
        <div className="flex justify-between text-3xl text-sky-950 ">
        <p className="mx-28"> Lounge Interior</p>
        <p className="mx-auto"> Office Interior</p>
        </div>
        <div className="flex justify-between ">
        <div className=" bg-[url('/images/05.png')]  lg:w-[500px] lg:h-[330px] bg-cover mx-16"></div>
        <div className=" bg-[url('/images/06.png')]  lg:w-[500px] lg:h-[330px] bg-cover mx-12"></div>
        </div>
      </div> */}
      </section>
  )
}

export default Projects03