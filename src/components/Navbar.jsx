import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../assets/wildan.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-20'>
            <div>
                <img src={Logo} alt="Logo" style={{ width: '250px' }} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li className='hover:text-pink-600'>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-pink-600'>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='hover:text-pink-600'>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='hover:text-pink-600'>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='hover:text-pink-600'>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 text-3xl'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-br from-sky-600 via-red-200 to-purple-500'>
                        <a rel='noreferrer' className='flex justify-between items-center w-full text-gray-300'
                            href="https://www.instagram.com/willl.h_/" target='_blank'>
                            Instagram<FaInstagram size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://www.linkedin.com/in/moh-wildan-haikhal-094259237/">
                            Linkedin<FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://github.com/WildanJR09">
                            Github<FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="mailto:mwildjrs23@gmail.com">
                            Email<HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar