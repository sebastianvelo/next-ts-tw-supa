"use client"
import PageContent from "@/components/layout/main/content/PageContent";
import PageHeader from "@/components/layout/main/header/PageHeader";
import PageTabsView from "@/components/layout/page/tabs/PageTabsView";
import PageHeaderDTO from "@/presentation/view/dto/page/header";
import UIType from "@/presentation/view/registry/types";
import React, { useState } from "react";
import getComponent from "..";
import ViewToggler from "./ViewToggler";

interface MultiSectionViewItem<TContent extends object> {
    id: string;
    label: string;
    icon?: React.ReactNode;
    ui: UIType;
    content: TContent;
    wrapperClassName?: string;
}

interface MultiSectionViewProps {
    header?: PageHeaderDTO;
    items: MultiSectionViewItem<any>[];
    footer?: React.ReactNode;
    defaultTabMode?: boolean;
    className?: string;
}

const MultiSectionView: React.FC<MultiSectionViewProps> = ({ header, items, footer, defaultTabMode = true, className = "", }) => {
    const [isTabMode, setIsTabMode] = useState(defaultTabMode);

    return (
        <PageContent>
            <PageHeader
                {...header}
                buttons={
                    [
                        <ViewToggler key="view-mode" isTabMode={isTabMode} setIsTabMode={setIsTabMode} />
                    ]
                }
            />

            {isTabMode && (
                <PageTabsView tabs={items} />
            )}

            {!isTabMode && (
                <div className={className}>
                    {items.map((item) => {
                        const Component = getComponent(item.ui);
                        return Component && <Component key={item.id} {...item.content} />;
                    })}
                    {footer}
                </div>
            )}
        </PageContent>
    );
};

export default MultiSectionView;