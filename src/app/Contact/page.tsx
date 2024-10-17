'use client';
import React from 'react'


const Contact = () => {
  return (
    <div> 
        
        <section
        
    id="Contact"
    className="bg-[url('/images/bg2.jpg')] bg-cover bg-no repeat h-screen py-14" >
        
        
        <h1 className="text-center font-bold text-6xl text-yellow-400 shadow-2xl shadow-sky-950 ">
                CONTACT ME
            </h1>
          <div className="flex justify-center"> 
            <div className=" bg-[url('/images/contact.png')]  lg:w-[600px] lg:h-[420px] bg-cover ">
            </div>
            </div> 

            <div className="flex justify-center mx-60 px-28"> 

            <div className=" grid grid-cols-1 md:grid-cols-2   w-80  md:w-[80%] md:h-[80%]  border-black text-center">
        <div className="m-1 space-y-1 text-black text-md md:text-xl font-serif ">
          <div>
            <label htmlFor="name" className="block p-1">
              Enter Your Name:
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-2 py-1 rounded-md  border-2 border-black text-sky-950 text-center"
            />
          </div>

          <div>
            <label htmlFor="email" className="block p-1">
              Enter Your Email:
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-1 py-1 rounded-md  border-2 border-black text-sky-950 text-center"
            />
          </div>

          <div>
            <label htmlFor="Message" className="block p-1">
              Write Message:
            </label>
            <textarea
              id="text"
              rows={20}
              className="w-full p-2 rounded-md   border-2  border-black text-sky-950 h-32 md:h-28  text-center"
            />
          </div>
          <button className="text-white border-2 border-black p-2  bg-sky-950 hover:font-bold rounded-xl w-full   hover:text-yellow-400">Submit</button>
        </div>
        </div>



            
        <div className=" flex-col  "> 
            
            <div  className="flex my-11"> 
                 <div className=" bg-[url('/images/email.png')]  lg:w-[50px] lg:h-[50px] bg-cover ">

            </div>
            <h2 className="text-xl text-sky-950 mt-2 mx-5"> sughrarasheed91@gmail.com</h2>

            </div>
            <div className="flex my-11"> 
            <div className=" bg-[url('/images/tele.png')]  lg:w-[50px] lg:h-[50px] bg-cover ">

            </div>
            <h2 className="text-xl text-sky-950 mt-2 mx-5"> 021-34987279</h2>
            </div>

            <div className="flex"> 
            <div className=" bg-[url('/images/mob.png')]  lg:w-[50px] lg:h-[50px] bg-cover ">

            </div>
            <h2 className="text-xl text-sky-950 mt-2 mx-5"> 0340-2782532</h2>
            </div>
        </div>

        </div>


    </section>
    </div>
  )
}

export default Contact