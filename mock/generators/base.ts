import User from "@/modules/user/domain/model";
import QUANTITY from "../config/quantity";
import usersToLogIn from "../config/users";
import UsersBuilder from "../factory/user";

const generateBaseEntities = () => {
    const users: User[] = [...usersToLogIn, ...UsersBuilder(QUANTITY.USERS)];

    return { users };
};

export default generateBaseEntities;