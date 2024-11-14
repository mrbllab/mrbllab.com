import React from 'react';

const Contact: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='w-full min-h-screen flex flex-col justify-center gap-24 relative px-5 md:px-0' data-aos="zoom-in">
            <div className='text-6xl font-bold w-full relative'>
                <p>Contact us</p>
                <div className='w-full h-1 bg-main rounded-full absolute -bottom-3' />
            </div>
            <p>For all inquiries, please reach out to us at <a href="mailto:klemen@mrbllab.com" className='underline'>klemen@mrbllab.com</a><br /> or through telegram <a href='https://t.me/jovianbtc' target='_blank' rel="noopener noreferrer" className='underline'>@jovianbtc</a>.</p>
            <div className='text-4xl flex items-center gap-7'>
                <a href='https://x.com/mrbllab' target='_blank' rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href='https://t.me/jovianbtc' target='_blank' rel="noopener noreferrer">
                    <i className="fa-brands fa-telegram"></i>
                </a>
            </div>
            <div className='absolute bottom-5 text-center w-full'>
                <p className='font-medium text-sm'>Copyright © {currentYear} Marble Lab</p>
            </div>
        </div>
    );
}

export default Contact;
