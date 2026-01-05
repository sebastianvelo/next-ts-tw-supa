import React, { ComponentProps } from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = "", onClick, hover = false }) => {
    const hoverStyles = hover ? "transition-all duration-300 hover:border-secondary-300 dark:border-secondary-800 cursor-pointer hover:bg-white dark:hover:bg-black" : "";

    return (
        <div className={`rounded-lg bg-white/70 dark:bg-secondary-950/60 border border-black/20 dark:border-white/10 transition-all ${hoverStyles} ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;

export const CardHeader: React.FC<ComponentProps<"div">> = ({ children, className = "" }) => {
    return (
        <div className={`p-4 border-b border-black/30 dark:border-white/20 ${className}`}>
            {children}
        </div>
    );
};

export const CardBody: React.FC<ComponentProps<"div">> = ({ children, className = "" }) => {
    return (
        <div className={`p-4 ${className}`}>
            {children}
        </div>
    );
};

export const CardFooter: React.FC<ComponentProps<"div">> = ({ children, className = "" }) => {
    return (
        <div className={`px-6 py-4 border-t border-secondary-300 dark:border-secondary-800 bg-secondary-50 dark:bg-secondary-950 rounded-b-lg ${className}`}>
            {children}
        </div>
    );
};
