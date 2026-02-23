"use client"
import useI18N from "@/hooks/lang/useI18N";
import React from "react";
import getStyle from "./Button.styles";
import { ButtonStyleProps } from "./types";

export interface ButtonProps extends ButtonStyleProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    t?: string;
}

const Button: React.FC<ButtonProps> = ({ t, variant, size, children, className = "", type = "button", ...props }) => {
    const { t: translate } = useI18N();
    const content = t ? translate(t) : children;

    return (
        <button className={`${getStyle({ variant, size })} ${className}`} type={type} {...props}>
            {content}
        </button>
    );
};

export default Button;