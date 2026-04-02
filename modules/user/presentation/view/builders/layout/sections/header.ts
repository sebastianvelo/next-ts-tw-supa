import PageHeaderDTO from "@/presentation/view/models/main/header";
import User from "@/modules/user/domain/model";

const buildUserHeader = (user: User): PageHeaderDTO => ({
    title: `¡Hola, ${user.name}!`,
    subtitle: user.email,
    image: user.avatar,
});

export default buildUserHeader;