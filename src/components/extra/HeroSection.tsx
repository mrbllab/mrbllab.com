import React from 'react';
import img from '../../assets/Images/hero.png'

interface HeroSectionProps {
    setScrollOption: (str: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setScrollOption }) => {
    return (
        <div className="w-full h-screen overflow-hidden relative">
            <img src={img} loading='eager' alt='orb' className='hidden md:block w-auto h-[105dvh] absolute z-10 -top-[19px] -right-52' />
            <div className='w-full h-full px-5 md:p-24 flex flex-col justify-center gap-16'>
                <p className="text-main text-6xl font-bold">marble</p>
                <p>Marble is a Web3 lab specializing in TON development. We bring innovative<br /> blockchain projects to life, with a focus on gamification, user adoption, and <br />seamless integration within the Telegram ecosystem.</p>
            </div>
            <div className='w-fit absolute z-10 left-5 md:left-24 bottom-28 md:bottom-12 flex items-center gap-8 font-medium'>
                <div className='relative w-fit flex justify-center group'>
                    <button onClick={() => setScrollOption('about')}>about us</button>
                    <div className='w-2 h-2 rounded-full bg-white absolute -bottom-3 transition-all opacity-0 group-hover:opacity-100' />
                </div>
                <div className='relative w-fit flex justify-center group'>
                    <button onClick={() => setScrollOption('projects')}>our projects</button>
                    <div className='w-2 h-2 rounded-full bg-white absolute -bottom-3 transition-all opacity-0 group-hover:opacity-100' />
                </div>
                <div className='relative w-fit flex justify-center group'>
                    <button onClick={() => setScrollOption('contact')}>contact us</button>
                    <div className='w-2 h-2 rounded-full bg-white absolute -bottom-3 transition-all opacity-0 group-hover:opacity-100' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
