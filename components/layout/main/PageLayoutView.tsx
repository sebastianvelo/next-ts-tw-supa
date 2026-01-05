import PageHeader from "@/components/layout/main/header/PageHeader";
import LayoutViewDTO from "@/core/view/DTO/page/layout";
import PageNavigator from "./PageNavigator";

interface PageLayoutViewProps extends LayoutViewDTO<any>, React.PropsWithChildren { }

const PageLayoutView: React.FC<PageLayoutViewProps> = ({ header, tabs, children }) => (
  <div className="animate-slide-in-left">
    <PageHeader {...header} />
    <PageNavigator tabs={tabs}>
      {children}
    </PageNavigator>
  </div>
);

export default PageLayoutView;