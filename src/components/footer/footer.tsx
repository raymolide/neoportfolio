import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row w-full text-center justify-center lg:justify-evenly lg:mx-auto lg:p-5 bg-[#ff9a02] lg:h-[150px]   ">
            <div className=" ">
                <div className='text-2xl'>
                    <p className='text-4xl font-bold uppercase'>Get in touch</p>
                    <p>raymolide@gmail.com</p>
                    <p>copyright © {new Date().getFullYear()} </p>
                    
                </div>
            </div>
            <div className="lg:relative">
                <div className="  bg-[#A388EE] lg:p-5 lg:w-72 lg:rounded-2xl  p-2  lg:absolute lg:bottom-4     ">
                    <div className=' flex flex-col justify-center text-2xl '>
                       <div className="flex-1">
                       <p className='   '>Follow me on my social media handles</p>
                       </div>
                        <div className="flex justify-center space-x-4">
                            <Link href="https://twitter.com/raymolide" target='_blank'>
                                <Image width={32} height={32} src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/twitter.svg" alt="Twitter" className="w-8 h-8 hover:opacity-80" />
                            </Link>
                            <Link href="https://www.instagram.com/raymolide/" target='_blank'>
                                <Image width={32} height={32} src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/instagram.svg" alt="Instagram" className="w-8 h-8 hover:opacity-80" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/raymolide/" target='_blank'>
                                <Image width={32} height={32} src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 hover:opacity-80" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer