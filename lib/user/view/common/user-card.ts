import BadgeDTO from "@/core/view/DTO/common/badge";
import { CardItemDTO } from "@/core/view/DTO/list-section/card-list-section";
import buildInstitutionRoleBadge from "@/lib/institution/view/common/badges/role";
import UserWithRole from "@/lib/user/model/with/user-with-role";
import ROUTES from "@/routes/client/routes";

const buildUserCard = (user: UserWithRole): CardItemDTO => ({
    img: user.avatar,
    title: user.name,
    subtitle: user.email,
    badges: [
        user.institutionRole && buildInstitutionRoleBadge(user.institutionRole)
    ].filter(Boolean) as BadgeDTO[],
    href: ROUTES.LESSONS.ROOT(user.id) // TODO: Debería ser ROUTES.USER(user.id)?
});

export default buildUserCard;