import BadgeDTO from "@/core/view/DTO/common/badge";
import { CardItemDTO } from "@/core/view/DTO/list-section/card-list-section";
import ROUTES from "@/routes/client/routes";
import User from "@/lib/user/model";

const buildUserCard = (user: User): CardItemDTO => ({
    img: user.avatar,
    title: user.name,
    subtitle: user.email,
    badges: [
    ].filter(Boolean) as BadgeDTO[],
    href: "" // TODO: Debería ser ROUTES.USER(user.id)?
});

export default buildUserCard;