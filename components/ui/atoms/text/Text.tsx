import useI18N from "@/hooks/lang/useI18N";
import React from "react";
import getStyle from "./Text.styles";
import { TextStyleProps } from "./types";

export interface TextProps extends TextStyleProps, React.HTMLAttributes<HTMLElement> {
    as?: "p" | "span" | "div" | "label";
    t?: string;
    htmlFor?: string;
}

const Text: React.FC<TextProps> = ({ height, variant, size, weight, transform, align, as = "p", children, t, className = "", ...props }) => {
    const { t: translate } = useI18N();
    const Component = as;
    const content = t ? translate(t) : children;

    return (
        <Component className={`${getStyle({ height, size, weight, transform, align, variant })} ${className}`} {...props}>
            {content}
        </Component>
    );
};

export default Text;
