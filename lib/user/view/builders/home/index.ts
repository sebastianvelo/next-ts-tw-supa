import User from "@/lib/user/model";
import UserHomeViewDTO from "./dto";

type UserHomeViewBuilderData = {
    user: User;
}

const buildUserHomeView = ({ user }: UserHomeViewBuilderData): UserHomeViewDTO => ({
    title: "¡Bienvenido!",
    items: []
});

export default buildUserHomeView;
