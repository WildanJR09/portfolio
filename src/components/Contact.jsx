import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form action="https://getform.io/f/467a3bce-5471-4c44-a8e9-d892d227acd7" method="POST" className='flex flex-col max-w-[700px] w-full'>
                <div className='pb-8' data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-anchor-placement="top-bottom">
                    <p className='text-4xl font-bold inline  border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or reach me with an email - mwildjrs23@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
            </form>
        </div>
    )
}

export default Contact