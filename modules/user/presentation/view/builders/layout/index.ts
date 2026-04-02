import User from "@/modules/user/domain/model";
import UserHomeLayoutDTO from "./dto";
import buildUserHeader from "./sections/header";
import buildUserTabs from "./sections/tabs";

type UserHomeLayoutBuilderData = {
    user: User;
}

const buildUserHomeLayout = ({ user }: UserHomeLayoutBuilderData): UserHomeLayoutDTO => ({
    header: buildUserHeader(user),
    tabs: buildUserTabs()
});

export default buildUserHomeLayout;