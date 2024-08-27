'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import HeaderTopInfo from '../headerTopInfo/HeaderTopInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface NavItems {
    title: string;
}

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems: NavItems[] = [
        { title: "Home" }, { title: "Sobre" }, { title: "Serviços" },
        { title: "Galeria" }, { title: "Team" }, { title: "Reviews" },
        { title: "Contatos" }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <HeaderTopInfo />
            <div className='relative z-10 w-full flex items-center justify-between py-8 px-[10%] bg-white border-b-2'>
                <Link href="/" className='text-4xl text-gray-600 capitalize '>
                    <FontAwesomeIcon icon={faTools} className="text-lightBlue mr-4 spin" />Pro Concerto
                </Link>

                <nav>
                    <div className={`flex-1  ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-between`}>
                        <ul className='flex flex-col justify-around  w-full absolute top-32 left-0 right-0 md:relative md:top-0 md:flex-row md:justify-between'>
                            {navItems.map((item, index) => (
                                <li key={index} className='my-2 md:my-0'>
                                    <Link href={`#${item.title.toLowerCase()}`} className='block text-center py-2  md:py-0 text-2xl md:text-4xl text-gray-600 capitalize md:ml-8'>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <div className="flex md:hidden cursor-pointer" onClick={toggleMenu}>
                    <FontAwesomeIcon
                        icon={isMenuOpen ? faTimes : faBars}
                        className="text-3xl text-gray-600"
                    />
                </div>
                     </div>
            

        </>
    );
}

export default Header;
