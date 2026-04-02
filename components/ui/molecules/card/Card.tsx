import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = "", onClick, hover = false }) => {
    const hoverStyles = hover ? "transition-all duration-300 hover:border-secondary-300 dark:border-secondary-800 cursor-pointer hover:bg-white dark:hover:bg-black" : "";

    return (
        <div className={`rounded-md bg-white dark:bg-secondary-900 border border-secondary-950/40 dark:border-white/10 transition-all ${hoverStyles} ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;
