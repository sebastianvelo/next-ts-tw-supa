import CreateDTO from "@/core/service/dto/create";
import UpdateDTO from "../dto/update";

type MutationService<T> = {
    create(data: CreateDTO<T>): Promise<T | null>;
    update(id: string, data: UpdateDTO<T>): Promise<T | null>;
    delete(id: string): Promise<boolean>;
};

export default MutationService;