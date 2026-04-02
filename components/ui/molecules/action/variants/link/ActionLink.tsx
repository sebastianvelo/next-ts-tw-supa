"use client"
import Button from "@/atoms/button/Button";
import { ActionVariant } from "@/presentation/view/dto/molecules/action/dto";
import Link from "next/link";
import React from "react";

interface ActionLinkProps {
    label?: string;
    variant?: ActionVariant;
    href: string;
    external?: boolean;
}

const ActionLink: React.FC<ActionLinkProps> = ({ label, variant, href, external, }) => {
    return external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Button t={label} variant={variant || "primary"} size="sm" />
        </a>
    ) : (
        <Link href={href}>
            <Button t={label} variant={variant || "primary"} size="sm" />
        </Link>
    );
};

export default ActionLink;