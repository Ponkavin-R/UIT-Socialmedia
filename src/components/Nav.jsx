import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isBookOpen, setIsBookOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleBookDropdown = () => {
        setIsBookOpen(!isBookOpen);
    };

    return (
        <header className="bg-blue-950 dark:text-white relative z-40 px-1">
            <div className="container flex justify-between items-center xs:p-2 xs:px-2 p-1 mx-auto relative">
                <div className="flex-grow text-left">
                    <Link to="/" aria-label="Back to homepage">
                        DoodleDreams
                    </Link>
                </div>
                <div className="lg:hidden flex-grow text-right">
                    <button onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 dark:text-white"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-md z-10">
                            <ul className="flex flex-col items-start py-4 space-y-4 mx-2">
                                <li>
                                    <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
                                </li>
                                <li className="relative">
                                    <button onClick={toggleBookDropdown} className="flex items-center w-full  text-black justify-between">
                                        Books
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className={`w-6 h-6 ml-1 transition-transform duration-300 transform ${isBookOpen ? "rotate-180" : ""}`}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    {isBookOpen && (
                                        <ul className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-md">
                                            <li>
                                                <Link to="/generalview" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">General Books</Link>
                                            </li>
                                            <li>
                                                <Link to="/premiumbooks" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Premium Books</Link>
                                            </li>
                                            <li>
                                                <Link to="/newbookview" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">New Books</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <Link to="/membership" className="text-gray-800 hover:text-blue-600">Membership</Link>
                                </li>
                                <li>
                                    <Link to="/testimonial" className="text-gray-800 hover:text-blue-600">Reviews</Link>
                                </li>
                                <li>
                                    <Link to="/register/login" className="text-white bg-blue-800 w-[8rem] px-2 py-1 rounded-sm hover:text-white">Login</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="lg:flex items-center hidden">
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link to="/" className="flex items-center px-4 -mb-1">Home</Link>
                        </li>
                        <li className="flex relative">
                            <button onClick={toggleBookDropdown} className="flex items-center px-4 -mb-1 focus:outline-none justify-between">
                                Books
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className={`w-6 h-6 ml-1 transition-transform duration-300 transform ${isBookOpen ? "rotate-180" : ""}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            {isBookOpen && (
                                <ul className="absolute top-full left-0 w-40 bg-white shadow-md rounded-b-md">
                                    <li>
                                        <Link to="/generalview" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">General Books</Link>
                                    </li>
                                    <li>
                                        <Link to="/premiumbooks" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Premium Books</Link>
                                    </li>
                                    <li>
                                        <Link to="/newbookview" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">New Books</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="flex">
                            <Link to="/membership" className="flex items-center px-4 -mb-1">Membership</Link>
                        </li>
                        <li className="flex">
                            <Link to="/testimonial" className="flex items-center px-4 -mb-1 cursor-pointer">Reviews</Link>
                        </li>
                        <li className="flex">
                            <Link to="/register/login">
                                <button className="bg-white border text-black px-4 py-1 rounded-sm hover:bg-blue-400 hover:text-white">Login</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Nav;
