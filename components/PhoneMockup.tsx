import React from 'react';

interface PhoneMockupProps {
    children: React.ReactNode;
    className?: string;
    borderColor?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className = "", borderColor = "border-gray-900" }) => {
    // Standardized iPhone 15 Pro Dimensions (Compact Mode)
    // Width: 250px, Height: 520px, Border: 10px (Scaled down slightly)
    return (
        <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[10px] rounded-[2.8rem] h-[520px] w-[250px] shadow-2xl ${className.replace(/h-\[.*?\]/g, '').replace(/w-\[.*?\]/g, '').replace(/border-\[.*?\]/g, '')}`}>
            {/* Notch / Dynamic Island */}
            <div className="w-[75px] h-[20px] bg-gray-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>

            {/* Side Buttons */}
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

            {/* Screen Content */}
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800 relative z-10">
                {/* Gloss Effect */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-30 opacity-50"></div>

                {children}
            </div>
        </div>
    );
};

export default PhoneMockup;
