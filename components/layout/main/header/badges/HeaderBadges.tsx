import Badge from "@/atoms/badge/Badge";
import PageHeaderDTO from "@/presentation/view/dto/page/header";

export interface HeaderBadgesProps extends Pick<PageHeaderDTO, "badges"> { }

const HeaderBadges: React.FC<HeaderBadgesProps> = ({ badges }) => (
  badges && badges.length > 0 && (
    <div className="flex flex-wrap items-center gap-2 order-first sm:order-last">
      {badges.map((badge) => (
        <Badge
          key={badge.id}
          label={badge.label}
          variant={badge.variant}
          transform="uppercase"
          size="sm"
          rounded="lg"
        />
      ))}
    </div>
  )
);

export default HeaderBadges;