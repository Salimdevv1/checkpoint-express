import React from 'react'

export default function Services() {
  return (
    <div className='flex justify-center items-center flex-wrap'>
    <section className='flex flex-wrap justify-center items-center gap-4 mt-10'>
        <div className='flex flex-col justify-start items-start gap-6 p-6 border-2 border-[#6AEBD2] md:lg:w-[400Px] w-[90%] rounded-lg'>
            <div className='flex flex-col gap-4 w-full'>
                <h2 className='font-bold text-2xl'>Basic</h2>
                <p className='text-lg '>FOR INDIVIDUALS & SMALL BUSINESSES</p>
                <p className='text-gray-500'>Everything you need to create your store, ship products, and process payments</p>
                <p><span className='text-3xl font-bold'>100</span> TND</p>
                <div className='bg-[#EFFBF7] w-full p-4 ' style={{borderTop : "2px solid #6AEBD2" , borderBottom :"2px solid #6AEBD2" }}>
                    <p className='w-full'>Get your first 3 months for $1/mo</p>
                </div>
            </div>
            <div>
                <h2 className='font-semibold text-xl'>What's included on Basic</h2>
                <div className='mt-2'>
                    <p className='flex gap-4 items-center '><i class="fa-solid fa-check text-green-500"></i> Basic reports </p>
                    <p className='flex gap-4 items-center '><i class="fa-solid fa-check text-green-500"></i> Up to 1,000 inventory locations </p>
                    <p className='flex gap-4 items-center '><i class="fa-solid fa-check text-green-500"></i> 2 staff accounts </p>
                </div>
            </div>
            <div className='w-full'>
                <button className='bg-black text-white w-full p-4'>Try for free</button>
            </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-6 p-6 border-2 border-[#6AEBD2] md:lg:w-[400Px] w-[90%] rounded-lg'>
            <div className='flex flex-col gap-4 w-full'>
                <h2 className='font-bold text-2xl'>Shopify</h2>
                <p className='text-lg '>FOR INDIVIDUALS & SMALL BUSINESSES</p>
                <p className='text-gray-500'>Everything you need to create your store, ship products, and process payments</p>
                <p><span className='text-3xl font-bold'>92</span> TND</p>
                <div className='bg-[#EFFBF7] w-full p-4 ' style={{borderTop : "2px solid #6AEBD2" , borderBottom :"2px solid #6AEBD2" }}>
                    <p className='w-full'>Get your first 3 months for $1/mo</p>
                </div>
            </div>
            <div>
                <h2 className='font-semibold text-xl'>What's included on Basic</h2>
                <div className='mt-2'>
                    <p className='flex gap-4 items-center '><i class="fa-solid fa-check text-green-500"></i> Basic reports </p>
                    <p className='flex gap-4 items-center '><i class="fa-solid fa-check text-green-500"></i> Up to 1,000 inventory locations </p>
                    <p className='flex gap-4 items-center '><i class="fa-solid fa-check text-green-500"></i> 2 staff accounts </p>
                </div>
            </div>
            <div className='w-full'>
                <button className='bg-black text-white w-full p-4'>Try for free</button>
            </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-6 p-6 border-2 border-[#6AEBD2] md:lg:w-[400Px] w-[90%] rounded-lg'>
            <div className='flex flex-col gap-4 w-full'>
                <h2 className='font-bold text-2xl'>AdvancedPlan</h2>
                <p className='text-lg '>FOR INDIVIDUALS & SMALL BUSINESSES</p>
                <p className='text-gray-500'>Everything you need to create your store, ship products, and process payments</p>
                <p><span className='text-3xl font-bold'>399</span> TND</p>
                <div className='bg-[#EFFBF7] w-full p-4 ' style={{borderTop : "2px solid #6AEBD2" , borderBottom :"2px solid #6AEBD2" }}>
                    <p className='w-full'>Get your first 3 months for $1/mo</p>
                </div>
            </div>
            <div>
                <h2 className='font-semibold text-xl'>What's included on Basic</h2>
                <div className='mt-2'>
                    <p className='flex gap-4 items-center '><i class="fa-solid fa-check text-green-500"></i> Basic reports </p>
                    <p className='flex gap-4 items-center '><i class="fa-solid fa-check text-green-500"></i> Up to 1,000 inventory locations </p>
                    <p className='flex gap-4 items-center '><i class="fa-solid fa-check text-green-500"></i> 2 staff accounts </p>
                </div>
            </div>
            <div className='w-full'>
                <button className='bg-black text-white w-full p-4'>Try for free</button>
            </div>
        </div>
    </section>
    </div>
  )
}
