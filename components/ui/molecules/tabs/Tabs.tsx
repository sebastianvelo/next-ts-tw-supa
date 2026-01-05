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

const Tabs: React.FC<TabsProps> = ({ tabs, tabsClassName = "", contentClassName = "", defaultTab, horizontal = false }) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
    const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

    useEffect(() => {
        setActiveTab(defaultTab || tabs[0]?.id);
    }, [tabs, defaultTab]);

    return (
        <div className="w-full">
            <div className="border-b border-secondary-200 dark:border-secondary-900">
                <nav className={`flex space-x-4 ${tabsClassName}`}>
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
            <div className={`${contentClassName}`}>
                {activeContent}
            </div>
        </div>
    );
};

export default Tabs;