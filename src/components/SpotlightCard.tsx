import React from 'react'
import Image from 'next/image'

function SpotlightCard({ img, title, address, btnname }: any) {
    return (

        <div className="bg-white shadow-md rounded overflow-hidden max-w-sm p-3 transition-all duration-700 ease-in-out hover:scale-105 dark:bg-[#3B3E47] dark:bg-opacity-70 dark:text-white">
            <div className='flex justify-center items-center'>
                <Image src={img} width={210} height={210} alt='img' />
            </div>
            <div className="p-2 border-t border-gray-200">
                <div className="flex items-center">
                </div>
            </div>

            <div className=' flex justify-center items-center  flex-col space-y-3 text-sm '>
                <h2 className='font-semibold text-lg'>{title}</h2>
                <p className='uppercase'>oct 15 | sun | 4:30 pm</p>
                <p className='font-light text-xs text-center'>{address}</p>
                <button className='bg-black rounded-sm text-white px-3 py-2 text-sm w-full transition-all duration-300 ease-in-out active:scale-95'>{btnname}</button>
            </div>
        </div>






    )
}

export default SpotlightCard