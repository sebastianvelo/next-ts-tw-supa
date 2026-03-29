"use client"
import React, { useEffect, useState } from "react";
import Tab from "./tab/Tab";
import { TabItem } from "./types";
import { getContainerClassName, getTabsBorderClassName, getTabsNavClassName } from "./styles";

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

    useEffect(() => {
        setActiveTab((prevActiveTab) => {
            const isTabStillValid = tabs.some(tab => tab.id === prevActiveTab);
            if (isTabStillValid) return prevActiveTab;
            return defaultTab || tabs[0]?.id;
        });
    }, [tabs, defaultTab]);

    return (
        <div className={`w-full ${getContainerClassName(horizontal)}`}>
            <div className={getTabsBorderClassName(horizontal)}>
                <nav className={getTabsNavClassName(horizontal, tabsClassName)}>
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