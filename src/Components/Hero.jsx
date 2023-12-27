import React from 'react'

export default function Hero() {
  return (
    <div>
        <section className='flex items-center justify-center gap-10 mt-10 flex-wrap'>
            <div style={{maxWidth : "90%" , width : 550}}>
                <h2 className='font-bold text-4xl'>Bring your ideas to life for $1/month</h2>
                <p className='text-lg mt-4'>The future of business is yours to shape. Sign up for a free trial and enjoy 3 months of Shopify for $1/month on select plans.</p>
                <button className='mt-4 bg-black text-white py-3 px-8 text-lg rounded-lg'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div style={{maxWidth : "90%" , width : 550}}>
                <img src="/img/hero-section.svg" alt="" />
            </div>
        </section>
        <section className='flex items-center justify-center gap-6 mt-14 flex-wrap p-2'>
            <div className='flex gap-4 items-center'>
                <div>
                    <img src="/img/custom-template.svg" alt="" />
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold text-xl'>Customizable templates</p>
                    <p className='text-gray-500'>Free website designs to launch your store quickly and easily.</p>
                </div>

            </div>
            <div className='flex gap-4 items-center'>
                <div>
                    <img src="/img/custom-template.svg" alt="" />
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold text-xl'>Customizable templates</p>
                    <p className='text-gray-500'>Free website designs to launch your store quickly and easily.</p>
                </div>

            </div>
            <div className='flex gap-4 items-center'>
                <div>
                    <img src="/img/custom-template.svg" alt="" />
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold text-xl'>Customizable templates</p>
                    <p className='text-gray-500'>Free website designs to launch your store quickly and easily.</p>
                </div>
            </div>
        </section>
        <section className=' gradient gap-4 mb-10  rounded-lg flex flex-col justify-center items-center mt-20 bg-gradient-to-r from-emerald-500 to-lime-600 p-10 h-[60vh] md:lg:h-[40vh]'>
            <h2 className='text-white text-5xl font-bold'>Build your dream business for $1/month</h2>
            <p className='text-white text-lg'>Start your free trial and enjoy 3 months of Shopify for $1/month on select plans.</p>
            <form className='w-full flex justify-center items-center'>
                <input className='md:lg:w-1/2 w-3/4 p-5 focus:outline-none' type="text" placeholder='Enter your email address' />
                <button className='bg-black text-white p-5 text-xl md:lg:w-[10%] '>Start</button>
            </form>
        </section>
    </div>
  )
}
