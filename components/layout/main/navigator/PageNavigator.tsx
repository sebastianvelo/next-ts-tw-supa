import PageNavigatorDTO from "@/presentation/view/dto/page/tabs";
import PageTabs from "./PageTabs";

interface PageNavigatorProps extends PageNavigatorDTO, React.PropsWithChildren { }

const PageNavigator: React.FC<PageNavigatorProps> = ({ tabs, children }) => (
    <div className="flex flex-col sm:flex-row">
        {tabs && <PageTabs tabs={tabs} />}
        {children}
    </div>
);

export default PageNavigator;