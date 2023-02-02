import React from 'react'
import Beach1 from "../assets/beach1.jpg"
import Beach2 from "../assets/beach2.jpg"
import Beach3 from "../assets/beach3.jpg"
import Beach4 from "../assets/beach4.jpg"
import Beach5 from "../assets/beach5.jpg"

const Destination = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-inclusive Resorts</h1>
        <p className='py-4'>On the World's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 ' src={Beach1} />
            <img className='w-full h-full object-cover' src={Beach2} />
            <img className='w-full h-full object-cover' src={Beach3} />
            <img className='w-full h-full object-cover' src={Beach4} />
            <img className='w-full h-full object-cover' src={Beach5} />
        </div>
    </div>
  )
}

export default Destination
