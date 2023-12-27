import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <header className='flex justify-around items-center p-4 '>
            <div>
                <Link><img className='md:lg:w-52 w-24' src="/img/shopify.webp" alt="" /></Link>
            </div>
            <div className='md:lg:flex hidden gap-4'>
                <Link to="/"><a href="" className='text-lg'>Home</a></Link>
                <Link to="/services"><a href="" className='text-lg'>Services</a></Link>
                <a href="" className='text-lg'>About</a>
            </div>
            <div>
                <Link to="/contact"><button className='bg-[#83C037] text-white py-3 px-8 text-lg rounded-lg'>Contact-us</button></Link>
            </div>

        </header>
    </div>
  )
}
