import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
//import '../styles/navbar.css'

export default function Navbar({ page, setPage }){
  const [menuActive, setMenuActive] = useState(false)
  const handleClick = () => setMenuActive(!menuActive)

    return (
        <nav id="navbar_container" className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Chet Baloglu
            </div>


          {/* menu */}
          <div id="navbar-default" className="hidden md:flex">
              <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white uppercase">
                <li>
                <Link to="/" className={page =="home" ? "border-b-4" :"border-t-4"} onClick = {()=> setPage('home')}>Home</Link>
                </li>
                <li>
                <Link to="/resume" className={page =="resume" ? "border-b-4" :"border-t-4"} onClick = {()=> setPage('resume')}>Resume</Link>
                </li>
                {/* <li>
                <Link to="/projects" className={page =="projects" ? "border-b-4" :"border-t-4"} 
                onClick = {()=> setPage('projects')}>Projects</Link>
                </li> */}
              </ul>
          </div>

          {/* hamburger */}

          <button onClick={handleClick} className="z-10 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              {
                !menuActive ? 
                <>
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg> 
                </>
              :
              <>
                <span className="sr-only">Close main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l12 12M1 13L13 1"/>
                </svg>
              </>
          }
          </button>

          {/* mobile menu */}
          <ul onClick={handleClick} className={ !menuActive ? "hidden" : "absolute top-0 left-0 md:hidden w-full h-screen bg-teal-50 flex flex-col justify-center items-center uppercase"}>
              <li className="py-6 text-4xl">
              <Link to="/">Home</Link>
              </li>
              <li className="py-6 text-4xl">
              <Link to="/resume">Resume</Link>
              </li>
              {/* <li className="py-6 text-4xl">
              <Link to="/projects">Projects</Link>
              </li> */}

          </ul>
        </div>
      </nav>
    )
}