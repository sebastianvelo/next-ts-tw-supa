import User from "@/lib/user/model";
import UserHomeViewDTO from "./dto";
import buildUserDetailsSection from "./sections/details";

type UserHomeViewBuilderData = {
    user: User;
}

const buildUserHomeView = ({ user }: UserHomeViewBuilderData): UserHomeViewDTO => ({
    list: buildUserDetailsSection(),
});

export default buildUserHomeView;
