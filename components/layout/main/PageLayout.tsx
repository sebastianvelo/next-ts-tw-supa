import PageHeader from "@/components/layout/main/header/PageHeader";
import LayoutDTO from "@/presentation/view/models/main/layout";
import PageTabs from "./tabs/PageTabs";

interface PageLayoutProps extends LayoutDTO, React.PropsWithChildren { }

const PageLayout: React.FC<PageLayoutProps> = ({ header, tabs, children }) => (
  <div>
    <PageHeader {...header} />
    <div className="flex flex-col sm:flex-row">
      {tabs && <PageTabs {...tabs} />}
      {children}
    </div>
  </div>
);

export default PageLayout;