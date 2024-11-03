import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar fixed w-full transition-all py-4 bg-gray-100">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="logo">
                    <h1 className="text-2xl font-bold">Ngoding.</h1>
                </div>

                {/* Menu - hidden on small screens, flex on medium and larger screens */}
                <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
                    <li>
                        <Link to="/home" className="hover:text-gray-900">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-900">About Me</Link>
                    </li>
                    <li>
                        <Link to="/organizational" className="hover:text-gray-900">Organizational</Link>
                    </li>
                    <li>
                        <Link to="/workexperience" className="hover:text-gray-900">Work Experience</Link>
                    </li>
                </ul>

                {/* Social Media Button */}
                <div className="hidden md:block">
                    <Link to="/contact" className="bg-sky-400 text-white px-5 py-2 rounded-full font-bold hover:bg-sky-500 transition-colors">Contact Me</Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none" aria-label="Toggle menu">
                        {/* Icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Only visible when open */}
            {isOpen && (
                <div className="md:hidden bg-sky-400 text-white font-bold rounded-lg shadow-lg mt-2 mx-4 p-4 space-y-4">
                    <Link to="/home" className="block hover:bg-sky-500 p-2 rounded">Home</Link>
                    <Link to="/about" className="block hover:bg-sky-500 p-2 rounded">About Me</Link>
                    <Link to="/organizational" className="block hover:bg-sky-500 p-2 rounded">Organizational</Link>
                    <Link to="//workexperience" className="block hover:bg-sky-500 p-2 rounded">Work Experience</Link>
                    <Link to="/contact" className="block bg-white text-sky-400 font-bold p-2 rounded hover:bg-gray-200 text-center">Contact Me  </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
