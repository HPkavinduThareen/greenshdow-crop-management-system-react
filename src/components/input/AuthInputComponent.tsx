
import React from "react";

interface InputProps {
    id: string;
    type: string;
    placeholder: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AuthInputComponent: React.FC<InputProps> = ({
                                                             id,
                                                             type,
                                                             placeholder,
                                                             label,
                                                             value,
                                                             onChange,
                                                         }) => (
    <div className="mb-6">
        <label
            htmlFor={id}
            className="block text-sm font-semibold text-gray-700 tracking-wide transition-all duration-300 hover:text-blue-600"
        >
            {label}
        </label>
        <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="mt-2 block w-full px-4 py-3 bg-gradient-to-r from-white to-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg hover:ring-1 hover:border-blue-400 placeholder-gray-400"
        />
    </div>
);
