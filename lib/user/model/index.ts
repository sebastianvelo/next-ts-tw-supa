import ModelWithTimestamps from "@/core/model/ModelWithTimestamps";

interface User extends ModelWithTimestamps {
    authId: string;
    email: string;
    name: string;
    avatar?: string;
}

export default User;