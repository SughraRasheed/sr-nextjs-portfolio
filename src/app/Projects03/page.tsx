'use client'
import React from 'react'


const Projects03 = () => {
  return (
    <div>
      
      <section
        className=" bg-[url('/images/bg2.jpg')] bg-cover bg-no repeat h-screen py-14 ">
           <h1 className="text-center font-normal text-6xl text-yellow-400 shadow-2xl shadow-sky-950 ">
                MY PROJECTS
            </h1>
      <div className="" >
        <div className="flex justify-between text-sky-950 text-8xl">
          <h1 className="mx-48 pt-12">
            05.
          </h1>
          <h1 className="mx-auto pt-12">
            06.
          </h1>
          
        </div>
        <div className="flex justify-between text-3xl text-sky-950 ">
        <p className="mx-48"> Lounge Interior</p>
        <p className="mx-auto"> Office Interior</p>
        </div>
        <div className="flex justify-between ">
        <div className=" bg-[url('/images/05.png')]  lg:w-[900px] lg:h-[500px] bg-cover mx-20"></div>
        <div className=" bg-[url('/images/06.png')]  lg:w-[900px] lg:h-[500px] bg-cover mx-36"></div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Projects03