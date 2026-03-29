"use client"
import Button from "@/atoms/button/Button";
import { LayoutDashboard, LayoutList } from "lucide-react";
import React from "react";

interface ViewTogglerProps {
    isTabMode: boolean;
    setIsTabMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewToggler: React.FC<ViewTogglerProps> = ({ isTabMode, setIsTabMode }) => (
    <Button key="view-mode" type="button" onClick={() => setIsTabMode((prev) => !prev)} aria-label={isTabMode ? "Ver todo en scroll" : "Ver en pestañas"}>
        {isTabMode ? (
            <LayoutList className="h-4 w-4" />
        ) : (
            <LayoutDashboard className="h-4 w-4" />
        )}
    </Button>
);

export default ViewToggler;