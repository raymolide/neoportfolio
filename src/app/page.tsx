import About from '@/components/about/about'
import Card from '@/components/cards/card'
import Footer from '@/components/footer/footer'
import NavBar from '@/components/nav/nav'
import Resume from '@/components/nav/resume'

export default function Home() {
  return (
    <div className='bg-primary'>
     <div className='fixed w-full top-0 mb-10'>
     <NavBar />
     </div>
      <div id='home' className='box-shadow border border-black  mt-20 bg-white p-5 max-w-screen-xl mx-auto'>
        <Resume />
      </div>

      <div id='about' className='p-5 max-w-screen-xl mx-auto'>
        <About />
      </div>

      <div id='skills' className='box-shadow border border-black  mt-10 bg-[#7FBC8C] p-5 max-w-screen-xl mx-auto'>
        <div>
          <h1 className="text-2xl font-bold text-center"><span className='text-auxiliar'>My</span> Skills</h1>
        </div>

        <div className='flex flex-row justify-evenly'>
          <div className='box-shadow border border-black  mt-10 bg-[#87CEEB] p-5 max-w-screen-xl mx-auto'>
            <div>
              <p className="text-2xl font-bold text-center"><span className='text-auxiliar'>Frontend</span></p>
            </div>
            <div>
              <p>React JS</p>
              <p>Next JS</p>
              <p>Flutter</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>TailwindCSS</p>

            </div>
          </div>

          <div className='box-shadow border border-black  mt-10 bg-[#FFB2EF] p-5 max-w-screen-xl mx-auto'>
            <div>
              <p className="text-2xl font-bold text-center"><span className='text-auxiliar'>Backend</span></p>
            </div>
            <div>
              <p>ASP.NET Core</p>
              <p>Vb.Net</p>
              <p>Firebase</p>
              <p>SQL</p> 
              <p>Java</p>

            </div>
          </div>

          <div className='box-shadow border border-black  mt-10 bg-[#F4D738] p-5 max-w-screen-xl mx-auto'>
            <div>
              <p className="text-2xl font-bold text-center"><span className='text-auxiliar'>DevOps</span></p>
            </div>
            <div>
              <p>Jenkins</p>
              <p>GIT</p>
              <p>AZURE</p>
            </div>
          </div>

          <div className='box-shadow border border-black  mt-10 bg-[#A388EE] p-5 max-w-screen-xl mx-auto'>
            <div>
              <p className="text-2xl font-bold text-center"><span className='text-auxiliar'>UI/UX</span></p>
            </div>
            <div>
              <p>Figma</p>
            </div>
          </div>

        </div>
      </div>

      <div id='projects' className='box-shadow border border-black  my-10 bg-[#FFA07A] p-5 max-w-screen-xl mx-auto'>
        <div>
          <h1 className="text-2xl font-bold text-center"><span className='text-auxiliar'>My</span> Projects</h1>
          <Card/> 
        </div>
      </div>
    <Footer/>
    </div>
  )
}
