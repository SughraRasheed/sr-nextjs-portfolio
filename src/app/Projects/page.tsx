'use client'
import React from 'react'



const Projects = () => {
  return (
    <div>
      
      <section
      id="Projects"
        className=" bg-[url('/images/bg2.jpg')] bg-cover bg-no repeat h-screen py-11 ">
          <h1 className="text-center font-normal text-5xl text-yellow-400 shadow-2xl shadow-sky-950 ">
                MY PROJECTS
            </h1>
      <div className="" >
        <div className="flex justify-between text-sky-950 text-6xl">
          <h1 className="mx-28 pt-12">
            01.
          </h1>
          <h1 className="mx-auto pt-12">
            02.
          </h1>
          
        </div>
        <div className="flex justify-between text-3xl text-sky-950 ">
        <p className="mx-28"> Bahria Town <br/>Residence</p>
        <p className="mx-auto"> MOVENPICK</p>
        </div>
        <div className="flex justify-between ">
        <div className=" bg-[url('/images/01.png')]  lg:w-[500px] lg:h-[330px] bg-cover mx-16"></div>
        <div className=" bg-[url('/images/02.png')]  lg:w-[500px] lg:h-[330px] bg-cover mx-12"></div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Projects

