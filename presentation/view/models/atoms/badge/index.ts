import BadgeDTO from "./dto";

export const buildBadges = (badges: (BadgeDTO | undefined | false)[]): BadgeDTO[] =>
    badges.filter(Boolean) as BadgeDTO[];

export const buildBadgesOfOptions = <T>(options: T[], builder: (option: T) => BadgeDTO, active?: T): BadgeDTO[] =>
    buildBadges(options.map((option) => ({
        ...builder(option),
        active: option === active
    })));
