import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from './e-learning-global-community.png';

export const Banner1 = ({ isWhiteBg, name }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isDropdownSub, setIsDropdownSub] = useState(false);

  const toggleDropdown = () => setIsDropdown(prev => !prev);
  const toggleDropdownSub = () => setIsDropdownSub(prev => !prev);

  const bannerImg = "https://www.shutterstock.com/image-photo/students-taking-exam-classroom-education-260nw-1289569291.jpg";
  const navbarStyle = isWhiteBg ? 'bg-white shadow-md text-black' : 'bg-transparent text-black';

  return (
    <div>
      {/* Navbar */}
      <nav className={`top-0 left-0 w-full z-50 ${navbarStyle} border-gray-200 dark:bg-gray-900 dark:border-gray-700`}>
        <div className="relative flex items-center justify-between max-w-screen-xl px-4 py-2 mx-auto">
          {/* Logo */}
          <div className='flex items-center'>
            <Link to='/' className="flex items-center space-x-2">
              <img
                src={logo}
                className="h-12" 
                alt="Logo"
              />
            </Link>
      
            <Link to="/" className="flex items-center px-2 py-1 font-bold text-black bg-transparent text-md">
              <span>Thinkory</span>
            </Link>
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
          <div className={`${isDropdown ? 'block' : 'hidden'} md:flex md:w-auto`}>
          <ul className="absolute right-0 z-50 flex flex-col p-4 mt-2 font-medium bg-white rounded-lg 0 top-16 dark:bg-gray-900 dark:border-gray-700 md:relative md:top-0 md:mt-0 md:space-x-8 md:flex-row md:bg-transparent">
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
                <div className={`${isDropdownSub ? "block" : "hidden"} absolute z-50 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <Link to="/courses" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All courses</Link>
                    </li>
                    <li>
                      <a href="/web-development" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a href="/mobile-development" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Mobile Development
                      </a>
                    </li>
                    <li>
                      <a href="/it-certifications" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        IT Certifications
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="/my-courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      MY Courses
                    </a>
                  </div>
                </div>
              </li>
   
              <li>
                <Link to="/pricing" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
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

      {/* Banner Section */}
      <section 
        className="relative w-full h-[50vh] flex items-center justify-center bg-gray-200"
        style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Text */}
        <h1 className="relative z-10 text-4xl font-bold text-white">{name}</h1>
      </section>
    </div>
  );
};
