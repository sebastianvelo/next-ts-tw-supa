import PageTabsDTO from "@/core/view/DTO/page/tabs";
import { PropsWithChildren } from "react";
import PageTabs from "./PageTabs";

interface PageNavigatorProps {
    tabs?: PageTabsDTO;
}

const PageNavigator: React.FC<PageNavigatorProps & PropsWithChildren> = ({ tabs, children }) => {
    return (
        <div className="flex flex-col sm:flex-row">
            {tabs && <PageTabs {...tabs} />}
            {children}
        </div>
    );
};

export default PageNavigator;