import APIService from "@/core/service";
import User from "@/lib/user/model";
import UserKeys from "@/lib/user/model/keys";
import UserDTO from "../view/dto/UserRegistrationData";

type ExcludeKeys =
    typeof UserKeys.EMAIL |
    typeof UserKeys.CREATEDAT |
    typeof UserKeys.UPDATEDAT |
    typeof UserKeys.NAME |
    typeof UserKeys.AVATAR |
    typeof UserKeys.AUTHID;

type UserServiceMethods = {
    getByEmail(email: string): Promise<User | null>;
    exists(email: string): Promise<boolean>;
    upsertFromOAuth(userData: UserDTO): Promise<User>
}

type UserAPIService = APIService<User, ExcludeKeys> & UserServiceMethods;

export default UserAPIService;