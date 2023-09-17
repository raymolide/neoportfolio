import React from 'react'

function NavBar() {
    return (
        <nav className=" bg-[#87CEEB] text-black  p-4 flex justify-between items-center shadow-lg drop-shadow-2xl">
            <div className="logo font-extrabold font-sans">
                MOLIDE R.
            </div>
            <ul className="flex space-x-4 font-sans font-bold   ">
                <li><a href="#home" className="hover:text-white hover:bg-primary p-2 border-b border-black border">Home</a></li>
                <li><a href="#about" className="hover:text-white hover:bg-primary p-2 border-b border-black border">About</a></li> 
                <li><a href="#skills" className="hover:text-white hover:bg-primary p-2 border-b border-black border">Skills</a></li>
                <li><a href="#projects" className="hover:text-white hover:bg-primary p-2 border-b border-black border">Projects</a></li>
            </ul>
        </nav>
    )
}

export default NavBar