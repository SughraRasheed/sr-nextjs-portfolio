'use client';
import React from 'react'


const About = () => {
  return (
    <div>
        <section
        
        id="About"
        className="bg-[url('/images/bg2.jpg')] bg-cover bg-no repeat h-screen py-56" >
        
            <div className="flex justify-center">
                <div> 
                <h1 className="font-extrabold text-5xl text-sky-950 mx-28 mt-36 ">
                    ABOUT ME
                </h1>
                <p className=" md:h-[800px] w-full md:w-[800px]  md:leading-10 p-8 md:text-xl  mx-20">
                I am an experienced Architect and Interior designer with a 
passion for Unique and creative designs. My goal is to enable 
gain more experience and mature as a designer. My work spans Residential, 
Commercial, Healthcare, Hospitality, Factories, Landscapes, 
etc. where I have successfully blended Architectural integrity with aesthetic innovation to create spaces that are both Function and Beautiful.
                </p>
                </div>

                <div className="  bg-[url('/images/collage.png')]  lg:w-[900px] lg:h-[700px] bg-cover mx-auto ">
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default About