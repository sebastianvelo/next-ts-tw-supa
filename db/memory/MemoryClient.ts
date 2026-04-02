import TABLES from "@/db/Tables";
import User from "@/modules/user/domain/model";
import usersMock from "@/mock/generated/users.json";

const MemoryClient = {
    [TABLES.USER]: usersMock as User[],
};

export default MemoryClient;