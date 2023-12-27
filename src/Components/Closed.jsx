import React from 'react'
import { Link } from 'react-router-dom'
export default function Closed() {
  return (
    <div>
        <section className='flex items-center justify-center gap-20 flex-wrap mt-20'>
            <div className='flex flex-col gap-4' style={{maxWidth : "90%" , width: 500}}>
                <h2 className='font-bold text-4xl'>Sorry, we are only available from Monday to Friday, from 9 to 17</h2>
                <p className='text-lg '>For more details you can contact us </p>
                <Link to="/contact"><button className='bg-black text-white text-lg py-3 px-10 rounded-lg'>Contact</button></Link>
            </div>
            <div style={{maxWidth : "90%" , width: 500}}>
                <img src="/img/no-services.jpg" alt="" />
            </div>
        </section>
    </div>
  )
}
