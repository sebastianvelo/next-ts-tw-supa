"use client";
import React, { useEffect, useState } from "react";
import Tab from "./Tab";

export interface TabItem {
    id: string;
    label: string;
    content: React.ReactNode;
}

export interface TabsProps {
    tabs: TabItem[];
    tabsClassName?: string;
    contentClassName?: string;
    defaultTab?: string;
    horizontal?: boolean;
}

const Tabs: React.FC<TabsProps> = ({ tabs, tabsClassName = "", contentClassName = "", defaultTab, horizontal = true }) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
    const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

    const containerClassName = !horizontal && "flex gap-6";
    const tabsBorderClassName = horizontal ? "border-b border-secondary-200 dark:border-secondary-800" : "border-r border-secondary-200 dark:border-secondary-800 min-w-[200px]";
    const tabsNavClassName = horizontal ? `flex space-x-2 ${tabsClassName}` : `flex flex-col space-y-1 ${tabsClassName}`;

    useEffect(() => {
        setActiveTab((prevActiveTab) => {
            const isTabStillValid = tabs.some(tab => tab.id === prevActiveTab);
            if (isTabStillValid) return prevActiveTab;
            return defaultTab || tabs[0]?.id;
        });
    }, [tabs, defaultTab]);

    return (
        <div className={`w-full ${containerClassName}`}>
            <div className={tabsBorderClassName}>
                <nav className={tabsNavClassName}>
                    {tabs.map(tab => (
                        <Tab
                            id={tab.id}
                            key={tab.id}
                            label={tab.label}
                            active={tab.id === activeTab}
                            onClick={() => setActiveTab(tab.id)}
                            horizontal={horizontal}
                        />
                    ))}
                </nav>
            </div>
            <div className={`${!horizontal && "flex-1"} ${contentClassName}`}>
                {activeContent}
            </div>
        </div>
    );
};

export default Tabs;