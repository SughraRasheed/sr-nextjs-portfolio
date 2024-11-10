'use client';
import React from 'react'


const About = () => {
  return (
        <section 
        id="About"
        className="bg-[url('/images/bg2.jpg')] bg-cover bg-no repeat h-screen" >
            <div className="flex flex-col md:flex-row py-20 md:py-44 ">
                <div className="text-center md:text-left "> 
                  <h1 className="font-extrabold text-4xl md:text-5xl text-sky-950 md:mx-24  ">
                    ABOUT ME
                  </h1>
                  <p className=" md:h-[800px] w-full md:w-[500px]  md:leading-10 p-8 md:text-xl  md:mx-16">
                I am an experienced Architect and Interior designer with a 
passion for Unique and creative designs. My goal is to enable 
gain more experience and mature as a designer. My work spans Residential, 
Commercial, Healthcare, Hospitality, Factories, Landscapes, 
etc. where I have successfully blended Architectural integrity with aesthetic innovation to create spaces that are both Function and Beautiful.
                  </p>
                </div>
                <div className=" bg-[url('/images/collage.png')] w-[350px] h-[260px]  lg:w-[530px] lg:h-[400px] bg-cover mx-auto my-11 ">
                </div> 
            </div>
        </section>
  )
}

export default About