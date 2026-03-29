import User from "@/modules/user/domain/model";
import UserLayoutViewDTO from "./dto";
import buildUserHeader from "./sections/header";
import buildUserTabs from "./sections/tabs";

type UserLayoutViewBuilderData = {
    user: User;
}

const buildUserLayoutView = ({ user }: UserLayoutViewBuilderData): UserLayoutViewDTO => ({
    header: buildUserHeader(user),
    tabs: buildUserTabs()
});

export default buildUserLayoutView;