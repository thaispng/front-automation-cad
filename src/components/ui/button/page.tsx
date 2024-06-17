import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
    children: React.ReactNode;
    backgroundColor: string;
    rounded: string;
    width: string;
    hoverBackgroundColor: string;
    hoverTextColor: string;
    type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, rounded, width, hoverBackgroundColor, hoverTextColor, type }) => {
    return (
        <button
            className={classNames(
                rounded,
                width,
                'text-white',
                'font-normal',
                'p-1',
                'rounded-md',
                `hover:${hoverBackgroundColor}`,
                `hover:${hoverTextColor}`,
                "bg-blue-500",
                "hover:bg-blue-600",
                "transition-all duration-300 ease-in-out",
                "my-3"
                
            )}
        >
            {children}
        </button>
    );
};

export default Button;
