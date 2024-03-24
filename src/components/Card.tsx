import React from 'react'
import img from "../../public/unnamed (1) 1.png"
import Image from 'next/image'

function Card() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className="bg-white shadow-lg rounded overflow-hidden max-w-sm inset-x-1 p-2">
                <div className=' relative'>
                    <Image src={img} width={400} height={400} alt='img' />
                    <div className='bg-black w-10 text-center px-4 py-1 text-xs  absolute top-[1px] right-[1px]'>
                        <span className='text-white  font-bold text-center'>Ad</span>
                    </div>
                </div>
                <div className='p-1 space-y-2 my-1'>
                    <h5 className='font-bold text-left mt-3' >Advertisement Title</h5>
                    <p className='text-start text-xs font-light '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae iusto quia velit magnam. Quod deserunt ratione nam expedita doloribus dignissimos, voluptatem voluptate animi voluptas quos repudiandae iure unde ipsa recusandae reprehenderit eveniet inventore sunt eos.</p>
                </div>
            </div>
        </div >
    )
}

export default Card