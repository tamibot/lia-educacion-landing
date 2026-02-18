import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScrollProgress(Number(scroll));
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[100]">
            <div
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress * 100}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
