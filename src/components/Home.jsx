import React, { useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import 'animate.css';
import Typewriter from 'typewriter-effect'

const Home = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div name='home' className='w-full h-screen  bg-[#0a192f] text-gray-300'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600 text-2xl animate__animated animate__fadeInDown '>Hi , my name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] animate__animated animate__fadeInDown '>Moh Wildan Haikhal</h1>
                <h2 className='text-2xl sm:text-5xl font- text-[#8892b0] animate__animated animate__fadeInLeft'>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                "I'm a Software Engineer",
                                "I'm a Student",
                                "I'm a BLINK ❤️",
                                "I Like Jisoo ^.^"
                            ],
                        }} />
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px] animate__animated animate__fadeInUp'>I'm a Software Engineer specializing in developing software and aslo working to solve problems, fix existing issues, and add enchanments for clients api. I'm currently focused learn on machine learning and ai.</p>
                <div className='animate__animated animate__fadeInUp'>
                    <button onClick={handleClick} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        <Link className='flex' to="work" smooth={true} duration={500}>
                            View work
                            <span className='group-hover:rotate-90 duration-300 flex'>
                                <HiArrowNarrowRight className='ml-3 ' />
                            </span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home