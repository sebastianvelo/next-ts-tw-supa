import TABLES from "@/core/app/db/Tables";
import User from "@/lib/user/model";
import usersMock from "@/mock/generated/users.json";

const MemoryClient = {
    [TABLES.USER]: usersMock as User[],
};

export default MemoryClient;