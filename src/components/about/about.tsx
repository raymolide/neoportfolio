import React from 'react'

function About() {
    return (
        <div className="flex flex-col mx-auto ">
            <div>
                <h1 className="text-2xl font-bold text-center"><span className='text-auxiliar'>About</span> Me</h1>
            </div>
            <div className="flex justify-between items-center p-10 text-white box-shadow">

                <div className="hidden lg:block flex-1 text-center">
                    <div className="flex mx-2 items-center justify-center">
                        <div className="   rounded-lg overflow-hidden  bg-[#87CEEB]">
                            <div className='  '>
                                <div className='rounded-ss-full p-3 bg-[#FFA07A]'>
                                    <span className='text-auxiliar font-bold'>Raimundo Molide</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 pl-5">
                    <div className='text-2xl text-justify'>
                        <p>I am <span className='text-auxiliar font-semibold'>Web and Mobile Developer</span>. Passionate about turning concepts into exceptional digital experiences. Always seeking innovation and staying updated with the latest technological trends to deliver high-quality products and enhance the user experience.</p>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About