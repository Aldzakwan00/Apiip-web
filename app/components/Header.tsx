"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="absolute top-0 left-0 w-full z-20">
            <nav className="flex justify-between items-center bg-transparent p-6 md:p-8">
                <div className="logo text-white text-3xl font-bold ml-6 md:ml-18">
                    <span className="text-[#00fa9a]">ザ</span>クワン
                </div>

                <ul className="hidden md:flex space-x-4 mr-10">
                    <li><Link href="/" className="text-white hover:text-gray-400">Home</Link></li>
                    <li><Link href="/about" className="text-white hover:text-gray-400">About</Link></li>
                    <li><Link href="/myservice" className="text-white hover:text-gray-400">Service</Link></li>
                    <li><Link href="/portofolio" className="text-white hover:text-gray-400">Portofolio</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-400">Education</Link></li>
                    <li><Link href="#" className="text-white hover:text-gray-400">Contact</Link></li>
                </ul>

                <div className="md:hidden mr-6">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </nav>

            <div className={`md:hidden bg-black bg-opacity-90 backdrop-blur-md p-6 transition-all duration-500 ease-in-out absolute w-full top-20 left-0 ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col space-y-4 text-white text-lg font-medium items-center">
                    <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link href="#" onClick={toggleMenu}>Service</Link></li>
                    <li><Link href="#" onClick={toggleMenu}>Portofolio</Link></li>
                    <li><Link href="#" onClick={toggleMenu}>Education</Link></li>
                    <li><Link href="#" onClick={toggleMenu}>Contact</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
