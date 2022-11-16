import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import ServiceCard from '../components/ServiceCard'
import { services} from '../data'
const index = () => {
  
  return (
    <div className='flex flex-col px-6 pt-1 flex-grow'>
     <h5 className='my-3 font-medium'>
      I have completed my B.Tech Degree Shri Ramswaroop Memorial Group of Professional Colleges Lucknow , Uttar Pradesh Electronics and Communications Engineering (ECE)
         . Trying to get experience working on websites.
        </h5>

        <div className='p-4 mt-5 bg-gray-400 flex-grow dark:bg-dark-100'
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem '}}>
          <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
          <div className='grid gap-6 lg:grid-cols-2'>
            {services.map(service => (
              <div className='bg-gray-200 rounded-lg md:col-span-1 dark:bg-dark-200'>
              <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
 export default index


 /*export const getServerSideProps =  async (context: GetServerSidePropsContext) => {

    const res = await fetch('http://localhost:3000/api/services')
    const data = await res.json()

   // console.log('SERVER', services)
    return { 
      props: {
        services: data.services },
    }
  }


  export const  getStaticProps =  async (context: GetServerSideProps) => {

    const res = await fetch('http://localhost:3000/api/services')
    const data = await res.json()

   console.log('SERVER', services)
    return { 
      props: {
        services: data.services },
    }
  }*/