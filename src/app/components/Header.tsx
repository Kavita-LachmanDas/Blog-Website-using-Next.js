import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsGithub, BsHeartFill, BsInstagram, BsLinkedin } from 'react-icons/bs'

export default function Header() {
  return (
    <>
    <div>
        <header className=" body-font bg-black text-white">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      
    <BsHeartFill/><span className="ml-3 text-2xl font-serif font-bold ">My Blog</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="https://www.linkedin.com/in/kavita-luhana-0a31842ab/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3BpiR9uMVMSRWFsdutymlLXQ%3D%3D" target='blank' className="mr-5 "><BsLinkedin/></Link>
      <Link href="https://github.com/Kavita-LachmanDas" target='blank' className="mr-5"><BsGithub/></Link>
      <Link href="" className="mr-5 "><BsInstagram/></Link>
      <Link href="" className="mr-5 "><BsFacebook/></Link>
    </nav>
   
  </div>
</header> 
    </div>



{/* ///////////////////////second Navbar /////////////////////////// */}



<div>
        <header className=" body-font  text-black">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
      
    <BsHeartFill/><span className="ml-3 text-2xl font-sans font-bold ">Turning Heads</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 text-[17x] font-bold font-serif hover:text-gray-900">Home</Link>
      <Link href="/routes/blog" className="mr-5 text-[17x] font-bold font-serif hover:text-gray-900">My Blog</Link>
      <Link href="/routes/about" className="mr-5 text-[17x] font-bold font-serif hover:text-gray-900">About</Link>
      <Link href="/routes/contact" className="mr-5 text-[17x] font-bold font-serif hover:text-gray-900">Contact</Link>
    </nav>
   
  </div>
</header> 
    </div>









    </>
  )
}
