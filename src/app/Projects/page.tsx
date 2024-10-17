'use client'
import React from 'react'
import Nav from "../Projects/page";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      
      <section
      id="Projects"
        className=" bg-[url('/images/bg2.jpg')] bg-cover bg-no repeat h-screen py-28 ">
          <h1 className="text-center font-normal text-7xl text-yellow-400 shadow-2xl shadow-sky-950 ">
                MY PROJECTS
            </h1>
      <div className="" >
        <div className="flex justify-between text-sky-950 text-9xl">
          <h1 className="mx-48 pt-28">
            01.
          </h1>
          <h1 className="mx-auto pt-28">
            02.
          </h1>
          
        </div>
        <div className="flex justify-between text-4xl text-sky-950 ">
        <p className="mx-52"> Bahria Town <br/>Residence</p>
        <p className="mx-auto"> MOVENPICK</p>
        </div>
        <div className="flex justify-between ">
        <div className=" bg-[url('/images/01.png')]  lg:w-[1200px] lg:h-[650px] bg-cover mx-20"></div>
        <div className=" bg-[url('/images/02.png')]  lg:w-[1200px] lg:h-[650px] bg-cover mx-36"></div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Projects

