import PageTabs from "@/components/layout/main/tabs/PageTabs";
import { TabType } from "@/molecules/tabs/tab/types";
import tabs from "./tabs";

interface MenuProps {

}

const Menu: React.FC<MenuProps> = () => (
    <PageTabs horizontal tabs={tabs} tabType={TabType.BORDER} />
);

export default Menu;