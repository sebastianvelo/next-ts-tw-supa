import Badge from "@/components/ui/atoms/badge/Badge";
import PageHeaderDTO from "@/core/view/DTO/page/header";

export interface HeaderBadgesProps extends Pick<PageHeaderDTO, "badges"> { }

const HeaderBadges: React.FC<HeaderBadgesProps> = ({ badges }) => (
  badges && badges.length > 0 && (
    <div className="flex flex-wrap items-center gap-2 order-first sm:order-last">
      {badges.map((badge, index) => (
        <Badge
          key={index}
          label={badge.label}
          variant={badge.variant}
          transform="uppercase"
          size="sm"
          rounded="lg"
          className="shadow-sm hover:shadow-md transition-shadow duration-200"
        />
      ))}
    </div>
  )
);

export default HeaderBadges;