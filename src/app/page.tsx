import About from '@/components/about/about'
import Card from '@/components/cards/card'
import Footer from '@/components/footer/footer'
import NavBar from '@/components/nav/nav'
import Resume from '@/components/nav/resume'

export default function Home() {
  return (
    <div className='bg-primary'>
     <div className='lg:fixed w-full top-0 lg:mb-10'>
     <NavBar />
     </div>
      <div id='home' className='box-shadow border border-black mx-2 my-2 lg:mt-20 bg-white lg:p-5 max-w-screen-sm lg:max-w-screen-xl lg:mx-auto'>
        <Resume />
      </div>

      <div id='about' className='lg:p-5 lg:max-w-screen-xl lg:mx-auto'>
        <About />
      </div>

      <div id='skills' className='box-shadow border border-black py-2 m-2 my-5   lg:mt-10 bg-[#7FBC8C] lg:flex-row lg:p-5 max-w-screen-sm lg:max-w-screen-xl lg:mx-auto'>
        <div>
          <h1 className="text-2xl font-bold text-center"><span className='text-auxiliar'>My</span> Skills</h1>
        </div>

        <div className='flex flex-col py-2 lg:flex-row justify-evenly '>
          <div className='  bg-[#87CEEB] box-shadow border border-black py-2 m-2 my-5 lg:mt-10 lg:flex-row lg:p-5 max-w-screen-sm lg:max-w-screen-xl lg:mx-auto'>
            <div>
              <p className="text-2xl font-bold text-center "><span className='text-auxiliar'>Frontend</span></p>
            </div>
            <div className='text-center'>
              <p>React JS</p>
              <p>Next JS</p>
              <p>Flutter</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>TailwindCSS</p>

            </div>
          </div>

          <div className=' bg-[#FFB2EF]  box-shadow border border-black py-2 m-2 my-5 lg:mt-10 lg:flex-row lg:p-5 max-w-screen-sm lg:max-w-screen-xl lg:mx-auto'>
            <div>
              <p className="text-2xl font-bold text-center"><span className='text-auxiliar'>Backend</span></p>
            </div>
            <div className='text-center'>
              <p>ASP.NET Core</p>
              <p>Vb.Net</p>
              <p>Firebase</p>
              <p>SQL</p> 
              <p>Java</p>

            </div>
          </div>

          <div className=' bg-[#F4D738] box-shadow border border-black py-2 m-2 my-5 lg:mt-10 lg:flex-row lg:p-5 max-w-screen-sm lg:max-w-screen-xl lg:mx-auto'>
            <div>
              <p className="text-2xl font-bold text-center"><span className='text-auxiliar'>DevOps</span></p>
            </div>
            <div className='text-center'>
              <p>Jenkins</p>
              <p>GIT</p>
              <p>AZURE</p>
            </div>
          </div>

          <div className=' bg-[#A388EE] box-shadow border border-black py-2 m-2 my-5 lg:mt-10 lg:flex-row lg:p-5 max-w-screen-sm lg:max-w-screen-xl lg:mx-auto'>
            <div>
              <p className="text-2xl font-bold text-center"><span className='text-auxiliar'>UI/UX</span></p>
            </div>
            <div className='text-center'>
              <p>Figma</p>
            </div>
          </div>

        </div>
      </div>

      <div id='projects' className=' bg-[#FFA07A] box-shadow border border-black py-2 m-2 my-5   lg:mt-5 lg:mb-10  lg:flex-row lg:p-5 max-w-screen-sm lg:max-w-screen-xl lg:mx-auto'>
        <div className=''>
          <h1 className="text-2xl font-bold text-center"><span className='text-auxiliar'>My</span> Projects</h1>
          <Card/> 
        </div>
      </div>
    <Footer/>
    </div>
  )
}
