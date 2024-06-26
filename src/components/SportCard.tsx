import Image from 'next/image'
import React from 'react'


function SportCard({ img, event, sport, name }: any) {
    return (
        <div className='container mx-auto px-4 py-8  transition-all duration-700 ease-in-out hover:scale-105 '>
            <div className="bg-white shadow-lg rounded overflow-hidden max-w-sm inset-x-1 p-2 dark:bg-[#3B3E47] dark:bg-opacity-70 dark:text-white ">
                <div className=''>
                    <Image src={img} width={400} height={400} alt='img' />
                </div>
                <div className='p-2 text-sm font-semibold my-1'>{name}</div>
                <div className=''>
                    <div className='flex items-center bg-[#F7F7F8]  justify-around text-sm p-2 rounded-sm space-x-4 dark:bg-[#292B32] dark:text-white'>
                        <div className='flex flex-col space-y-1'>
                            <p className='text-xs font-thin'>Total Events</p>
                            <p className='font-semibold'>{event} Events</p>
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <p className='text-xs font-thin'>Sport</p>
                            <p className='font-semibold'>{sport}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SportCard