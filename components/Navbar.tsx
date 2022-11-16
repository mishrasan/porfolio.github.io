import Link from "next/link"
import { useRouter } from "next/router"
import { FunctionComponent, useEffect, useState } from "react"


const NavItem: FunctionComponent<{
    activeItem: string
    setActiveItem: Function
    name: string
    route: string
 }> = ({ activeItem, setActiveItem, name, route }) => {
    return activeItem !== name ? (
       <Link  legacyBehavior href={route}>
          <a>
             <span
                className='mx-2 cursor-pointer hover:border-b-4 hover:text-green'
                onClick={() => setActiveItem(name)}>
                {name}
             </span>
          </a>
       </Link>
    ) : null
 }

const Navbar = () => {

     const [activeItem, setActiveItem] = useState<string>('')

     const { pathname } = useRouter()
     useEffect(()=> {
        if (pathname === '/') setActiveItem('About')
        if (pathname === '/project') setActiveItem('Project')
        if (pathname === '/resume') setActiveItem('Resume')
     })
     return (
        <div className='flex items-center justify-between px-5 py-3 my-3'>
           <span className='text-xl font-bold text-green-600 border-b-4 md:text-2xl border-green'>
              {activeItem}
           </span>
  
           <div className='flex space-x-3 text-lg'>
              <NavItem
                activeItem={activeItem}
                 setActiveItem={setActiveItem}
                 name='About'
                 route='/'
              />
              <NavItem
                 activeItem={activeItem}
                 setActiveItem={setActiveItem}
                 name='Resume'
                 route='/resume'
              />
              <NavItem
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                 name='Project'
                 route='/project'
              />
           </div>
        </div>
     )
  }
  
  export default Navbar