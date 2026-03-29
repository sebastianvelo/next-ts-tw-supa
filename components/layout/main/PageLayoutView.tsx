import PageHeader from "@/components/layout/main/header/PageHeader";
import LayoutViewDTO from "@/presentation/view/dto/page/layout";
import PageNavigator from "./navigator/PageNavigator";

interface PageLayoutViewProps extends LayoutViewDTO, React.PropsWithChildren { }

const PageLayoutView: React.FC<PageLayoutViewProps> = ({ header, tabs, children }) => (
  <div className="">
    <PageHeader {...header} />
    <PageNavigator tabs={tabs}>
      {children}
    </PageNavigator>
  </div>
);

export default PageLayoutView;