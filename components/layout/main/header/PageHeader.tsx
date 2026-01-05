import Breadcrumb from "@/components/ui/molecules/breadcrumb/Breadcrumb";
import PageHeaderDTO from "@/core/view/DTO/page/header";
import HeaderActions from "./actions/HeaderActions";
import HeaderBackButton from "./actions/HeaderBackButton";
import HeaderBadges from "./badges/HeaderBadges";
import HeaderContent from "./content/HeaderContent";

export interface PageHeaderProps extends PageHeaderDTO { }

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, content, badges, breadcrumb, hrefBack, image, actions }) => {
  return (
    <div className="bg-gradient-to-t from-white/30 via-white/50 to-white/40 dark:from-black/70 dark:via-black/60 dark:to-black/70 backdrop-blur-xl border-b border-secondary-200 dark:border-secondary-800 shadow-sm">
      <div className="flex items-center border-b border-secondary-200/50 dark:border-secondary-800/50 h-full">
        <HeaderBackButton hrefBack={hrefBack} />
        {breadcrumb && (
          <Breadcrumb
            className="flex-1 px-4 sm:px-6 py-2"
            {...breadcrumb}
          />
        )}
      </div>
      <div className="px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1 min-w-0 space-y-3">
            <HeaderBadges badges={badges} />
            <HeaderContent
              title={title}
              subtitle={subtitle}
              content={content}
              image={image}
            />
          </div>
          <HeaderActions actions={actions} />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;