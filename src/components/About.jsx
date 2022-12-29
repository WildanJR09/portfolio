import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4' data-aos="fade-up" data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-anchor-placement="top-bottom">
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600' >About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold' data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-anchor-placement="center-bottom">
                        <p>Hi!</p>
                        <p>I'm WildanJr</p>
                    </div>
                    <div className='' data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-anchor-placement="center-bottom">
                        <p>I am passionate about building excellent software that improves the lives of those around me. I specialize in helping to solve problems and fix issues for clients.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About