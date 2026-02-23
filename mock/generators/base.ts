import User from "@/lib/user/model";
import QUANTITY from "../config/quantity";
import usersToLogIn from "../config/users";
import UsersBuilder from "../factory/user";

const generateBaseEntities = () => {
    const users: User[] = [...usersToLogIn, ...UsersBuilder(QUANTITY.USERS)];

    return { users };
};

export default generateBaseEntities;