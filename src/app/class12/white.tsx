import React from 'react'
import Image from 'next/image'

const white = () => {
  return (
    <div className='w-[1262px] h-[92px] flex justify space-between left-[1px] py-[16px] px-[220px] bg-[#043873]'>
        <div className=' w-[191px] h-[34px] mt-5 flex justify space-between'>
           
                <Image src="/logo.png" alt="logo" width={80} height={80} className='w-[35px] h-[29px] top-[60px]'/>
            
            <span className='w-[144px] h-[34px] left-[47px] font-inter font-bold size-[28px] leading-[33.89px] text-3xl text-[#FFFFFF]'>whitepace</span>
        </div>
        <div className='w-[126px] h-[80px] gap-[290px]  mt-5 ml-[500px] flex  justify-center'>
          <div className=' flex w-[549px] h-[23px] gap-[32px] text-[#FFFFFF] '>
            <p>Products</p>
            <p>Solutions</p>
            <p>Resources </p>
            <p>Pricing</p>
            <div className='text-[#FFFFFF] px-[40px] py-[16px] rounded-md m w-[100px] h-[50px] mr-[40px]  mb-[80px] gap-[24px] bg-[#FFE492] text-center align-center '>
            <button className='w-[46px] h-[23px] font-inter font-medium size-[18px] mb-[10px]  leading-[23px] tracking-[-2%] text-[#043873] '>login</button>
          </div>
          </div>
          
        </div>
    </div>
  )
}

export default white