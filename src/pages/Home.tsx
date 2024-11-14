import React, { useEffect, useState } from 'react';
import { About, Contact, HeroSection, Projects } from '../components/extra';

const Home: React.FC = () => {
    const [option, setOption] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const homeRef = React.useRef<HTMLDivElement>(null);
    const aboutRef = React.useRef<HTMLDivElement>(null);
    const projectsRef = React.useRef<HTMLDivElement>(null);
    const contactRef = React.useRef<HTMLDivElement>(null);

    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth',
            });
        }
        setOption("")
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollPosition >= windowHeight * 0.6) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (option === "") return
        if (option === "home") scrollToRef(homeRef)
        if (option === "about") scrollToRef(aboutRef)
        if (option === "projects") scrollToRef(projectsRef)
        if (option === "contact") scrollToRef(contactRef)
    }, [option])

    const setScrollOption = (str: string) => {
        setOption(str)
    }

    return (
        <div className='overflow-x-hidden'>
            <button onClick={() => setOption('home')} className={`text-xl fixed z-20 bottom-12 right-8 md:right-16 bg-main h-10 w-10 rounded-full transition-all ${isVisible ? 'opacity-100 cursor-pointer' : 'opacity-0 cursor-default'}`}>
                <i className="fa-solid fa-chevron-up" />
            </button>
            <div ref={homeRef}>
                <HeroSection setScrollOption={setScrollOption} />
            </div>
            <div className='w-full md:w-[75%] 2xl:w-[1100px] md:mx-auto'>
                <div ref={aboutRef}>
                    <About />
                </div>
                <div ref={projectsRef}>
                    <Projects />
                </div>
                <div ref={contactRef}>
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default Home;
