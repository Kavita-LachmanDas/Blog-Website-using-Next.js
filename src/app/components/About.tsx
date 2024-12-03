import Image from 'next/image'
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export default function About() {
  return (
    <div>
        <section className="text-gray-600 body-font bg-pink-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
   <Image className='border-r-8' src="/aboutimg.avif" alt='hello' width={800} height={300}></Image>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-700">About Me
        
      </h1>
      <p className="mb-8 leading-relaxed text-gray-600">Welcome to my blog space! I&apos;m <span className='text-pink-700 font-sans text-[25px]'>Kavita</span>, a passionate writer and explorer, sharing my love for uncovering unique experiences and ideas through engaging stories. With a focus on trending topics, personal insights, and creative perspectives, this blog is a platform to inspire and connect with readers like you. <br /> <br />
      From discovering hidden gems during walking tours to diving into the dynamic world of re-commerce, and even setting new year resolutions that stick, my blogs reflect a curiosity for the world and a passion for storytelling. <br /> <br />
      Here, you&apos;ll find content that&apos;s informative, relatable, and full of inspiration—whether you&apos;re a traveler, a dreamer, or someone looking for fresh perspectives on life. <br /> <br />
      Let&apos;s explore, discover, and grow together. Feel free to connect, share your thoughts, or simply enjoy the journey through my words.

      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><BsLinkedin/></button>
        <button className="ml-4 inline-flex text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg "><BsGithub/></button>
      </div>
    </div>
  </div>
</section>
    </div>

  )
}
