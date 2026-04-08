import Tab from "@/molecules/tabs/tab/Tab";
import { TabType } from "@/molecules/tabs/tab/types";
import PageTabDTO from "@/presentation/view/models/main/tabs";
import { usePathname } from "next/navigation";
import { nestedClassName, parentClassName } from "./styles";

interface PageTabsProps {
  tabs: PageTabDTO[];
  nested?: boolean;
  horizontal?: boolean;
  tabType?: TabType;
}

const PageTabs: React.FC<PageTabsProps> = ({ tabs, nested = false, horizontal = false, tabType = TabType.GHOST }) => {
  const pathname = usePathname();

  if (!tabs || tabs.length === 0) return null;

  const isActive = (tab: PageTabDTO) => tab.href === pathname;

  const isActiveOrHasActiveChild = (tab: PageTabDTO): boolean => {
    if (isActive(tab)) return true;
    if (tab.tabs) return tab.tabs.some((subTab) => isActiveOrHasActiveChild(subTab));
    return false;
  };

  return (
    <div className={nested ? nestedClassName : parentClassName(horizontal)}>
      {tabs.map((tab) =>
        tab.tabs ? (
          <div key={tab.label} className="flex flex-col">
            <Tab
              id={tab.label}
              href={tab.href}
              label={tab.label}
              active={isActiveOrHasActiveChild(tab)}
              horizontal={horizontal}
              type={tabType}
            />
            {isActiveOrHasActiveChild(tab) && !nested && (
              <PageTabs tabs={tab.tabs} nested horizontal={horizontal} tabType={tabType} />
            )}
          </div>
        ) : (
          <Tab
            id={tab.href || ""}
            key={tab.label}
            {...tab}
            active={isActive(tab)}
            horizontal={horizontal}
            type={tabType}
          />
        )
      )}
    </div>
  );
};

export default PageTabs;