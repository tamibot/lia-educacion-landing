import React from 'react';

interface PhoneMockupProps {
    children: React.ReactNode;
    className?: string;
    borderColor?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className = "" }) => {
    return (
        // Outer Frame (Titanium Finish)
        <div className={`relative mx-auto rounded-[3rem] h-[520px] w-[260px] shadow-2xl bg-gradient-to-b from-gray-300 via-gray-100 to-gray-300 p-[4px] ${className.replace(/h-\[.*?\]/g, '').replace(/w-\[.*?\]/g, '').replace(/border-\[.*?\]/g, '')}`}>

            {/* Inner Frame (Black Bezel) */}
            <div className="relative h-full w-full bg-gray-900 rounded-[2.8rem] border-[6px] border-gray-900 overflow-hidden">

                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-b-[14px] z-50 flex items-center justify-center gap-2">
                    {/* Camera */}
                    <div className="w-2 h-2 rounded-full bg-[#1a1a1a] shadow-inner"></div>
                    {/* Speaker mesh hint */}
                    <div className="w-8 h-1 rounded-full bg-[#1a1a1a]"></div>
                </div>

                {/* Side Buttons (Positioned relative to Outer Frame) */}
                <div className="h-[40px] w-[3px] bg-gray-300 absolute -left-[10px] top-[100px] rounded-l-md shadow-sm"></div>
                <div className="h-[40px] w-[3px] bg-gray-300 absolute -left-[10px] top-[150px] rounded-l-md shadow-sm"></div>
                <div className="h-[50px] w-[3px] bg-gray-300 absolute -right-[10px] top-[120px] rounded-r-md shadow-sm"></div>

                {/* Screen Content */}
                <div className="rounded-[2.4rem] overflow-hidden w-full h-full bg-white relative z-10">
                    {/* Gloss Effect */}
                    <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none z-40"></div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PhoneMockup;
