import PageContent from "@/components/layout/main/PageContent";
import CardListSection from "@/components/ui/layout/card-section/CardListSection";
import Tabs, { TabItem } from "@/components/ui/molecules/tabs/Tabs";
import TabDTO from "@/core/view/DTO/common/tab";
import { CardListSectionDTO } from "@/core/view/DTO/list-section/card-list-section";
import UserCoursesListViewDTO from "@/lib/user/view/builders/courses/dto";

const getTabProps = (tab: TabDTO<CardListSectionDTO>): TabItem => ({
  ...tab,
  content: <CardListSection key={tab.id} {...tab.content} grid="grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4" />,
});

interface UserCoursesListViewProps extends UserCoursesListViewDTO { }

const UserCoursesListView: React.FC<UserCoursesListViewProps> = ({ tabs }) => (
  <PageContent>
    <Tabs tabs={tabs?.map(getTabProps) || []} horizontal={true} />
  </PageContent>
);

export default UserCoursesListView;