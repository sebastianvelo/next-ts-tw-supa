import KeysOf from "@/core/model/KeysOf";
import User from "@/modules/user/domain/model";

const UserKeys: KeysOf<User> = {
    EMAIL: "email",
    NAME: "name",
    AVATAR: "avatar",
    CREATEDAT: "createdAt",
    UPDATEDAT: "updatedAt",
    ID: "id",
    AUTHID: "authId"
};

export default UserKeys;