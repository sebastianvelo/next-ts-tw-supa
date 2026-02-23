import PageNavigatorDTO from "@/core/view/DTO/page/tabs";
import { PropsWithChildren } from "react";
import PageTabs from "./PageTabs";

interface PageNavigatorProps extends PageNavigatorDTO, PropsWithChildren { }

const PageNavigator: React.FC<PageNavigatorProps> = ({ tabs, children }) => (
    <div className="flex flex-col sm:flex-row">
        {tabs && <PageTabs tabs={tabs} />}
        {children}
    </div>
);

export default PageNavigator;