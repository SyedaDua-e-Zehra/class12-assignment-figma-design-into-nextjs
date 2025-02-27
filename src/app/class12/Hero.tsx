import React from 'react'

const Hero = () => {
  return (
    <div><section className=" bg-[#043873]  body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#FFFF]">
        Get More Done with 
          <br className="hidden lg:inline-block" />
          whitepace
        </h1>
        <p className="mb-8 leading-relaxed text-[#FFFF]">
        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
           Try Whitepace free
          </button>
        
        </div>
      </div>
      <div className=" bg-[#C4DEFD] w-[824px] h-[549px] lg:max-w-lg lg:w-full md:w-1/2 ">
        
      </div>
    </div>
  </section>
  </div>
  )
}

export default Hero