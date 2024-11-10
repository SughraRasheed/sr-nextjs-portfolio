'use client';

import React from 'react'


const Contact = () => {
  return (
        <section
    id="Contact"
    className="bg-[url('/images/bg2.jpg')] bg-cover bg-no repeat h-screen py-11" >
        
        
        <h1 className="text-center font-bold text-4xl md:text-5xl text-yellow-400 shadow-2xl shadow-sky-950 ">
                CONTACT ME
            </h1>
          <div className="flex justify-center"> 
            <div className=" bg-[url('/images/contact.png')] w-[260px] h-[180px]   lg:w-[500px] lg:h-[350px] bg-cover ">
            </div>
            </div> 

            <div className="flex flex-col md:flex-row items-center md:justify-between mx-9 md:mx-28 md:px-11"> 

            <div className=" grid grid-cols-1 md:grid-cols-2 w-[60%] md:w-[80%] md:h-[80%] border-black text-center">
        <div className="m-1 space-y-1 text-black text-sm md:text-md font-serif ">
          <div>
            <label htmlFor="name" className="block p-1">
              Enter Your Name:
            </label>
            <input
              id="name"
              type="text"
              className="w-full py-1 rounded-md border-2 border-black text-sky-950 text-center"
            />
          </div>

          <div>
            <label htmlFor="email" className="block p-1">
              Enter Your Email:
            </label>
            <input
              id="email"
              type="email"
              className="w-full py-1 rounded-md border-2 border-black text-sky-950 text-center"
            />
          </div>

          <div>
            <label htmlFor="Message" className="block p-1">
              Write Message:
            </label>
            <textarea
              id="text"
              rows={20}
              className="w-full p-2 rounded-md border-2 border-black text-sky-950 h-24 md:h-24  text-center"
            />
            
          </div>
          <button className="text-white border-2 border-black p-2  bg-sky-950 hover:font-bold rounded-xl w-full   hover:text-yellow-400">Submit</button>
        </div>
        </div>



            
        <div className="flex flex-col items-center md:items-start" > 
            
            <div  className="flex mt-9 md:mt-2"> 
                 <div className=" bg-[url('/images/email.png')]  my-1 md-my-3 h-[25px]  w-[25px] lg:w-[50px] lg:h-[50px] bg-cover ">

            </div>
            <h2 className="text-md md:text-xl text-sky-950 mt-2 mx-5"> sughrarasheed91@gmail.com</h2>

            </div>
            <div className="flex "> 
            <div className=" bg-[url('/images/tele.png')] my-1 md-my-3  h-[25px] w-[25px] lg:w-[50px] lg:h-[50px] bg-cover ">

            </div>
            <h2 className="text-md md:text-xl text-sky-950 mt-2 mx-5"> 021-34987279</h2>
            </div>

            <div className="flex"> 
            <div className=" bg-[url('/images/mob.png')]  my-1 md-my-3 h-[25px] w-[25px] lg:w-[50px] lg:h-[50px] bg-cover ">

            </div>
            <h2 className="text-md md:text-xl text-sky-950 mt-2 mx-5"> 0340-1234567</h2>
            </div>
        </div>

        </div>
    </section>
    
  )
}

export default Contact
