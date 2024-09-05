import React, { useState, useEffect } from 'react';
import Cart from './cart.svg';
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isDropdownSub, setIsDropdownSub] = useState(true);
  const [navbarStyle, setNavbarStyle] = useState('bg-transparent text-black');

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const toggleDropdownSub = () => {
    setIsDropdownSub(!isDropdownSub);
  };

  // Handle scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarStyle('bg-white shadow-md text-black'); // White background with shadow on scroll
      } else {
        setNavbarStyle('bg-transparent text-black'); // Transparent background when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${navbarStyle} border-gray-200 dark:bg-gray-900 dark:border-gray-700`}>
      <div className="relative flex items-center justify-between max-w-screen-xl px-4 py-2 mx-auto">
        {/* Logo */}
        <div className='flex items-center'>
        <Link to='/' className="flex items-center space-x-2">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
         </ Link>
        </div>

        {/* Category Button */}
        <div className='items-center hidden md:flex'>
        <Link className="flex items-center px-2 py-1 font-bold text-black bg-transparent text-md" to='/'>
            <span>Thinkory</span>
            
          </ Link>
        </div>

        {/* Search Form */}
        <div className="flex-grow mx-4">
          <form className="relative flex items-center">
            <label htmlFor="default-search" className="sr-only">Search</label>
            <input 
              type="search" 
              id="default-search" 
              className="block w-full py-2 pl-10 pr-4 text-sm transition border border-gray-300 rounded-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search Courses" 
              required 
            />
            <button 
              type="submit" 
              className="absolute inset-y-0 right-0 flex items-center px-3 text-sm font-medium text-white transition bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </form>
        </div>

        {/* Cart Icon */}
        <div className='flex items-center mx-2'>
          <img src={Cart} alt='cart icon' className='w-6 h-6 ml-3'/>
        </div>

        {/* Dropdown Button for Mobile */}
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isDropdown}
          onClick={toggleDropdown}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Main Menu */}
        <div className={`${isDropdown ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="flex flex-col p-4 mt-4 font-medium bg-transparent border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {/* Menu Items */}
            <li className="relative">
              <button
                className="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={toggleDropdownSub}
              >
                Courses{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div className={`${isDropdownSub ? "hidden" : "block"} absolute z-50 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                  <li>
                    <Link to="/courses" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> All courses</Link>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Mobile Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      IT Certifications
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    MY Courses
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="/err"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <Link to="/Pricing" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
