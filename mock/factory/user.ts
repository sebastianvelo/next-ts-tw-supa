import User from "@/lib/user/model";
import { getID, getTimestamps } from "@/mock/utils";
import { faker } from "@faker-js/faker";

const variants = ["bottts", "adventurer", "micah"];

const UserMock = (): User => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({
        firstName,
        lastName
    });
    const variant = faker.helpers.arrayElement(variants);

    return {
        id: getID("usr"),
        authId: faker.string.alphanumeric(30),
        name: `${firstName} ${lastName}`,
        avatar: `https://api.dicebear.com/9.x/${variant}/svg?seed=${firstName}${lastName}`,
        email,
        ...getTimestamps()
    }
};

const UsersBuilder = (size: number) => Array.from({ length: size }, () => UserMock());

export default UsersBuilder;