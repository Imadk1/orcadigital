import React, {useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
import logo from '../Assets/logo.svg';


export const Nav = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);      
  return (
     <>
      <nav className="relative top-0 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              src={logo}
              className="text-sm w-1/3 lg:w-1/2 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
            </img>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon className="text-zinc-800" icon={navbarOpen ? faClose : faBars}></FontAwesomeIcon>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mt-1">
              <li className="nav-item px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-zinc-800 hover:text-zinc-500 cursor-pointer">
                Home
              </li>
              <li className="nav-item px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-zinc-800 hover:text-zinc-500 cursor-pointer">
                What we do
              </li>
              <li className="nav-item px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-zinc-800 hover:text-zinc-500 cursor-pointer">
                Showcase
              </li>
              <li className="nav-item px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-zinc-800 hover:text-zinc-500 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
