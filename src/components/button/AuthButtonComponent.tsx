import React from "react";

interface ButtonProps {
    type: "button" | "submit";
    text: string;
    additionalClasses?: string;
    icon?: string;
}

export const AuthButtonComponent: React.FC<ButtonProps> = ({ type, text, additionalClasses = "", icon }) => (
    <button
        type={type}
        className={`w-full flex justify-center items-center py-3 px-6 border border-[1px] border-[#ffffff] rounded-[10px] shadow-lg text-sm font-semibold text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transform transition-all duration-600 ease-in-out ${additionalClasses}`}
    >
        {icon && <img src={icon} className="mx-2 w-5 h-5" alt="icon" />}
        {text}
    </button>
);
