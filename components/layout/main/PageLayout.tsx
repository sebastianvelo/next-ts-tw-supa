import PageHeader from "@/components/layout/main/header/PageHeader";
import PageLayoutDTO from "@/presentation/view/dto/main/layout";
import PageTabs from "./navigator/PageTabs";

interface PageLayoutProps extends PageLayoutDTO, React.PropsWithChildren { }

const PageLayout: React.FC<PageLayoutProps> = ({ header, tabs, children }) => (
  <div>
    <PageHeader {...header} />
    <div className="flex flex-col sm:flex-row">
      {tabs && <PageTabs tabs={tabs} horizontal />}
      {children}
    </div>
  </div>
);

export default PageLayout;