import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
        
<footer className="bg-[#043873] text-[#FFFF] body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-[#FFFF]">
       <Image src="/logo.png" alt="logo" width={80} height={80} className='w-[35px] h-[29px] top-[60px]'/>
        <span className="ml-3 text-xl">whitepace</span>
      </a>
      <p className="mt-2 text-sm text-[#FFFF]">
      whitepace was created for the new ways we live and work. We make a better workspace around the world
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-[#FFFF] tracking-widest text-sm mb-3">
          Products
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[#FFFF] hover:text-[#FFE492]">Overview </a>
          </li>
          <li>
            <a className=" text-[#FFFF] hover:text-[#FFE492]">Pricing</a>
          </li>
          <li>
            <a className="text-[#FFFF] hover:text-[#FFE492]">Customer stories</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-[#FFFF] tracking-widest text-sm mb-3">
        Resources
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[#FFFF] hover:text-[#FFE492]">Blog </a>
          </li>
          <li>
            <a className=" text-[#FFFF] hover:text-[#FFE492]">Guides & tutorials</a>
          </li>
          <li>
            <a className="text-[#FFFF] hover:text-[#FFE492]">Help center</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-[#FFFF] tracking-widest text-sm mb-3">
        Company
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[#FFFF] hover:text-[#FFE492]">About us </a>
          </li>
          <li>
            <a className=" text-[#FFFF] hover:text-[#FFE492]">Careers</a>
          </li>
          <li>
            <a className="text-[#FFFF] hover:text-[#FFE492]">Media kit</a>
          </li>
          
        </nav>
      </div>
     
    </div>
  </div>
  <div className="bg-[#043873]">
    <div className="container ml-[480px] py-4 px-5 flex justify-between">
      <p className="text-[#FFFF] text-sm text-center sm:text-left">
      ©2021 Whitepace LLC.</p>
     
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer