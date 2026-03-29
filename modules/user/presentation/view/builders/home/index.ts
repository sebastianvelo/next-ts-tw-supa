import User from "@/modules/user/domain/model";
import UserHomeViewDTO from "./dto";

type UserHomeViewBuilderData = {
    user: User;
}

const buildUserHomeView = ({ user }: UserHomeViewBuilderData): UserHomeViewDTO => ({
    title: "¡Bienvenido!",
    items: []
});

export default buildUserHomeView;
