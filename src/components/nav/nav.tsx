import React from 'react'

function NavBar() {
    return (
        <nav className="flex flex-col lg:flex-row justify-center lg:justify-between items-center  bg-[#87CEEB] text-black  p-4 shadow-lg drop-shadow-2xl ">
            <div className="logo font-extrabold font-sans">
                MOLIDE R.
            </div>
            <ul className="flex flex-col lg:flex-row lg:space-x-4 font-sans font-bold text-center gap-5 ">
                <li><a href="#home" className="hover:text-white hover:bg-primary p-2 lg:border-b border-black lg:border">Home</a></li>
                <li><a href="#about" className="hover:text-white hover:bg-primary p-2 lg:border-b border-black lg:border">About</a></li>
                <li><a href="#skills" className="hover:text-white hover:bg-primary p-2 lg:border-b border-black lg:border">Skills</a></li>
                <li><a href="#projects" className="hover:text-white hover:bg-primary p-2 lg:border-b border-black lg:border">Projects</a></li>
            </ul>
        </nav>
    )
}

export default NavBar