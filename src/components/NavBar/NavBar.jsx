import React, { useState } from 'react';
import Cart from './cart.svg';

export const Navbar = () => {
    const [isDropdown, setIsDropdown] = useState(false);
    const [isDropdownSub, setIsDropdownSub] = useState(true);

    const toggleDropdown = () => {
        setIsDropdown(!isDropdown);
    };

    const toggleDropdownSub = () => {
        setIsDropdownSub(!isDropdownSub);
    };

    return (
        <nav className="bg-gray-300 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                {/* Logo and text */}
                <div className='flex items-center space-x-4 flex-grow'>
                    <div className=' m-3'>
                        <a href="#target-section" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-8"
                                alt="Flowbite Logo"
                            />
                        </a>
                    </div>

                    <a className="cat-menu flex items-center space-x-2">
                        <div className="cat-dot-icon d-inline-block">
                            {/* SVG path  */}
                        </div>
                        <span className='font-bold'>Category</span>
                    </a>
                </div>

                <img src={Cart} alt='cart icon' className='w-6 h-6'/>

                {/* Search Form */}
                <div className="flex flex-grow justify-center">
                    <form className="max-w-md flex items-center w-full">
                        <label htmlFor="default-search" className="sr-only">Search</label>
                        <div className="relative w-full m-4">
                            <input type="search" id="default-search" className="block w-full pl-8 text-sm border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Courses" required />
                            <button type="submit" className="absolute inset-y-0 right-0 flex items-center px-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Search
                            </button>
                        </div>
                    </form>
                </div>


                {/* Dropdown Button */}
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {/* Menu Items */}
                        <li>
                            <a href="#" className="block py-2 px-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
                                Home
                            </a>
                        </li>
                        <li className="relative">
                            <button
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                onClick={toggleDropdownSub}
                            >
                                Dropdown{" "}
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
                            <div
                                className={`${isDropdownSub ? "hidden" : "block"} absolute z-50 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                            >
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Earnings
                                        </a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        Sign out
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
