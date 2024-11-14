import React from 'react';
import img from '../../assets/Images/sec2.jpeg'

const Projects: React.FC = () => {
    return (
        <div className='w-full min-h-screen flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between px-5 md:px-0'>
            <div data-aos="zoom-in" className='space-y-20 w-full md:w-[45%]'>
                <div className='text-5xl md:text-6xl font-bold flex gap-5'>
                    <p>Our</p>
                    <div className='relative w-fit'>
                        <p>projects</p>
                        <div className='w-full h-1 bg-main rounded-full absolute bottom-0' />
                    </div>
                </div>
                <div className='space-y-5 text-pretty'>
                    <div className='relative flex items-center'>
                        <div className='w-3 h-3 rounded-full bg-white absolute -left-5 md:-left-8' />
                        <p className='text-xl font-medium'>Move</p>
                    </div>
                    <p>Move is a Pokémon GO style Telegram mini app that rewards users with $Move tokens for every kilometre they walk or run, using step and location tracking.</p>
                    <p>Currently in development, Move is set to launch in September. As of now, we’re actively seeking collaboration and partnership opportunities. If you're interested, contact us.</p>
                    <div>
                        <a href='https://move.mrbllab.com/' target='_blank' rel="noopener noreferrer" className='bg-main text-black font-medium px-4 py-2 rounded-full'>Check out Move</a>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" className='w-full md:w-[45%] flex justify-center'>
                <img src={img} loading='eager' alt='section_3_img' className='h-full w-auto object-center object-contain' />
            </div>
        </div>
    );
}

export default Projects;
