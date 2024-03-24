import React from 'react'
import Image from 'next/image'

function SpotlightCard({ img, title, address, btnname }: any) {
    return (
        <div className=" mx-auto px-4 py-8">
            <div className="bg-white shadow-md rounded overflow-hidden max-w-sm inset-x-1 p-3">
                <div>
                    <Image src={img} width={'auto'} height={'auto'} alt='img' />
                </div>
                <div className="px-2 pt-4 pb-2 border-t border-gray-200">
                    <div className="flex items-center">
                    </div>
                </div>

                <div className=' flex justify-center items-center  flex-col space-y-3 text-sm'>
                    <h2 className='font-semibold text-lg'>{title}</h2>
                    <p className='uppercase'>oct 15 | sun | 4:30 pm</p>
                    <p className='font-light text-xs text-center'>{address}</p>
                    <button className='bg-black rounded-sm text-white px-3 py-2 text-sm w-full'>{btnname}</button>
                </div>
            </div>
        </div>





    )
}

export default SpotlightCard