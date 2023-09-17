import React from 'react'

function Card() {
  return (
   <div className='flex flex-col lg:flex-row justify-evenly py-2 m-2 my-5  font-semibold text-xl text-center '>
     <div className='box-shadow border border-black  mt-10 bg-[#7FBC8C] p-10'>
        <span className='border-b-2 border-black p-5'>Mobile Design</span>
    </div>
    <div className='box-shadow border border-black  mt-10 bg-[#7FBC8C] p-10'>
        <span className='border-b-2 border-black p-5'>Web Design</span>
    </div>
    <div className='box-shadow border border-black  mt-10 bg-[#7FBC8C] p-10'>
        <span className='border-b-2 border-black p-5'>UI/UX Design</span>
    </div>
    
   </div>
  )
}

export default Card