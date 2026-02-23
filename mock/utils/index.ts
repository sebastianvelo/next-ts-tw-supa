import Model from "@/core/model/Model";
import User from "@/lib/user/model";
import { faker } from "@faker-js/faker";
import * as fs from "fs";
import * as path from "path";

export const saveJSON = (filename: string, data: any) => {
    const outputDir = path.join(process.cwd(), "mock", "generated");
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const filePath = path.join(outputDir, `${filename}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    console.log(`✅ Generated: ${filename}.json (${data.length} items)`);
};

export const getID = (prefix: string) => `${prefix}-${faker.string.alphanumeric(3)}`;

export const getTimestamps = (): { createdAt: number, updatedAt: number } => {
    const createdAt = faker.date.past({ years: 5 }).getTime();
    const updatedAt = faker.date.between({
        from: new Date(createdAt),
        to: new Date()
    }).getTime();

    return { createdAt, updatedAt };
};

export function selectUsersWithoutOverlap<T extends string>(availableUsers: User[], ...selections: { quantity: number; role: T }[]): { users: User[]; role: T }[] {
    let remaining = [...availableUsers];
    const results: Array<{ users: User[]; role: T }> = [];

    for (const { quantity, role } of selections) {
        const selected = faker.helpers.arrayElements(remaining, Math.min(quantity, remaining.length));
        results.push({ users: selected, role });
        remaining = remaining.filter(user => !selected.includes(user));
    }

    return results;
}

export const capitalizeFirstLetter = (text: string) => `${text[0].toUpperCase()}${text.slice(1)}`;

export const capitalizeAllWords = (text: string) => text.split(" ").map(capitalizeFirstLetter).join(" ");

export const generate = <T>(size: number, entityBuilder: (parentId: string) => T) => ({
    forEach: <P extends Model>(parents: P[]): T[] =>
        parents.flatMap(p => Array.from({ length: size }, () => entityBuilder(p.id)))
});