import PageHeaderDTO from "@/core/view/DTO/page/header";
import User from "@/lib/user/model";

const buildUserHeader = (user: User): PageHeaderDTO => ({
    title: `¡Hola, ${user.name}!`,
    subtitle: user.email,
    image: user.avatar,
});

export default buildUserHeader;