import Bar from "../components/Bar"
import { languages, tools } from "../data"


const resume = () => {
  return (
    <div className='px-6 py-2'>
      <div className=' grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div>
          <h5 className='my-2 text-xl font-bold'>Electronics and Communications Engineering </h5>
          <p className='font-semibold'>Shri Ramswaroop Memorial Group of Professional Colleges Lucknow,Uttar Pradesh(2022)</p>
          <p className='my-3'>I am currently working on web development</p>
        </div>
      </div>
      <div>
          <h5 className='my-3 text-2xl font-bold'>Internship</h5>
          <div>
          <h5 className='my-2 text-xl font-bold'>PNS Automation & IBM </h5>
          <p className='font-semibold'>Duration = 2 Month</p>
          <p className='my-3'>Here I learned basic C/C++ programming language & Nestjs</p>
        </div>
      </div>
      </div>
     
      <div className='grid gap-6 md:grid-cols-2'>
      <div>
        <h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
        <div className='my-2'>

          {

            languages.map(language =>(
            <Bar data ={language} key ={language.name}/>
            ))}
            </div>
          </div>



          <div>
        <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
        <div className='my-2'>

          {

            tools.map(tool =>(
            <Bar data ={tool} key ={tool.name}/>
            ))}
            </div>
          </div>









          </div>
          </div>
  )
}

export default resume