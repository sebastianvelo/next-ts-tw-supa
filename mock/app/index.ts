import generateBaseEntities from "@/mock/generators/base";
import { faker } from "@faker-js/faker";

const seed = Number(process.env.MOCK_SEED || 123);
faker.seed(seed);

const { users, } = generateBaseEntities();

export const mockStats = {
    users: users.length,
};

export {
    users as usersMock
};

