import Link from 'next/link';
import React, { useState } from 'react'
import HeaderTopInfo from '../headerTopInfo/HeaderTopInfo';

interface NavItems {
    title: string;
}

const Header: React.FC = () => {
    const navItems: NavItems[] = [
        { title: "Home" }, { title: "Sobre" }, { title: "Serviços" },
        { title: "Galeria" }, { title: "Team" }, { title: "Reviews" },
        { title: "Contatos" }
    ];

    return (
        <>
            <header className='flex items-center flex-col'>
                <HeaderTopInfo />
                <nav className='w-full flex items-center justify-between'>
                    <div>
                        <Link rel="stylesheet" href="" >
                            <i className="fas fa-tools spin"></i> Concerto Pro
                        </Link>
                    </div>

                    <div>
                        <ul className={`flex items-center justify-between `}>
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a href={`#${item.title.toLowerCase()}`}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className=" flex md:hidden" >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header