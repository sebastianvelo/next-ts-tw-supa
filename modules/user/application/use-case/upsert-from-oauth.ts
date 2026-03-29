import UserService from "@/modules/user/application/service";
import User from "@/modules/user/domain/model";
import UserRegistrationData from "../dto/UserRegistrationData";

const upsertFromOAuth = async (userData: UserRegistrationData): Promise<User> => {
    const existingUser = await UserService.getByEmail(userData.email);

    if (existingUser) {
        return existingUser;
    }

    return UserService.create({
        authId: userData.id,
        email: userData.email,
        name: userData.name,
        avatar: userData.avatar,
    });
};

export default upsertFromOAuth;
