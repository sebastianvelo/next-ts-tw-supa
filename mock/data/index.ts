import User from "@/lib/user/model";
import QUANTITY from "@/mock/config/quantity";
import { generate, selectUsersWithoutOverlap } from "@/mock/utils";
import { faker } from "@faker-js/faker";
import usersToLogIn from "../config/users";
import UsersBuilder from "../factory/user";

const seed = Number(process.env.MOCK_SEED);
faker.seed(seed);

// ============================================
// BASE ENTITIES
// ============================================
const usersMock: User[] = [...usersToLogIn, ...UsersBuilder(QUANTITY.USERS)];

// ============================================
// STATS
// ============================================
export const mockStats = {
    users: usersMock.length,
};

// ===== EXPORTS =====
export {
    usersMock
};

