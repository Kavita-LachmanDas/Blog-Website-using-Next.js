import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export default function Contact() {
  return (
    <div>
        <section className="overflow-x-hidden text-gray-600 body-font relative "style={{ backgroundColor: 'rgb(284 242 240)' }}>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Let me know what&apos;s on your mind</h1>
      {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600"> Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-600  focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border  border-red-600  focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Leave a Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-600  focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          
        <button className="flex mx-auto text-white bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-red-900 rounded text-lg">Submit</button>
    
        </div>
          
    



      </div>
    </div>
  </div>
  <div className=" flex h-[60px] content-center gap-3 justify-center w-[100vw] bg-red-900 text-white text-center font-bold fond-sans">
       <p className='content-center'>kavitaluhana11@gmail.com  </p>
       <BsLinkedin className='mt-[22px]'/> <BsGithub className='mt-[22px]'/>
        </div>
</section>
    </div>
  )
}
