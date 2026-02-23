import Tab from "@/components/ui/molecules/tabs/Tab";
import { PageTabDTO } from "@/core/view/DTO/page/tabs";
import { usePathname } from "next/navigation";

const baseParent =
  "relative min-w-48 overflow-x-auto whitespace-nowrap gap-x-4 border-b sm:border-r border-secondary-300 dark:border-secondary-800 scrollbar-thin";
const baseParentColor = "from-secondary-100 via-white to-secondary-100 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950";

const nestedClassName =
  "absolute flex flex-row sm:flex-col top-full left-0 sm:relative sm:top-0 sm:left-0 animate-slide-in-left sm:ml-1 border-l border-secondary-300 dark:border-secondary-800 pl-2";

const parentClassName = (horizontal: boolean) => horizontal
  ? `${baseParent} flex flex-row bg-gradient-to-r ${baseParentColor}`
  : `${baseParent} flex flex-row sm:flex-col bg-gradient-to-b ${baseParentColor}`;

interface PageTabsProps {
  tabs: PageTabDTO<any>[];
  nested?: boolean;
  horizontal?: boolean;
}

const PageTabs: React.FC<PageTabsProps> = ({ tabs, nested = false, horizontal = false }) => {
  if (!tabs || tabs.length === 0) return null;

  const pathname = usePathname();

  const isActive = (tab: PageTabDTO<any>) => tab.href === pathname;

  const isActiveOrHasActiveChild = (tab: PageTabDTO<any>): boolean => {
    if (isActive(tab)) return true;

    if (tab.tabs) {
      return tab.tabs.some(subTab => isActiveOrHasActiveChild(subTab));
    }

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
            />
            {isActiveOrHasActiveChild(tab) && !nested && (
              <PageTabs tabs={tab.tabs} nested horizontal={horizontal} />
            )}
          </div>
        ) : (
          <Tab
            id={tab.href || ""}
            key={tab.label}
            {...tab}
            active={isActive(tab)}
            horizontal={horizontal}
          />
        )
      )}
    </div>
  );
};

export default PageTabs;