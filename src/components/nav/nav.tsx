import React from 'react'

function NavBar() {
    return (
        <nav className="flex  flex-row justify-center lg:justify-between items-center   bg-[#87CEEB] text-black  p-4 shadow-lg drop-shadow-2xl ">
            <div className="logo hidden lg:block font-extrabold font-sans">
                MOLIDE R.
            </div>
            <ul className="flex flex-row  space-x-2 font-sans font-bold text-center gap-1 lg:gap-5 ">
                <li><a href="#home" className="hover:text-white hover:bg-primary p-2 border-b border-black border uppercase">Home</a></li>
                <li><a href="#about" className="hover:text-white hover:bg-primary p-2 border-b border-black border uppercase">About</a></li>
                <li><a href="#skills" className="hover:text-white hover:bg-primary p-2 border-b border-black border uppercase">Skills</a></li>
                <li><a href="#projects" className="hover:text-white hover:bg-primary p-2 border-b border-black border uppercase">Projects</a></li>
            </ul>
        </nav>
    )
}

export default NavBar