type BaseService<Model> = {
    getAll: () => Promise<Model[]>;
    getById: (id: string) => Promise<Model | null>;
    getByIds: (ids: string[]) => Promise<Model[]>;
    getByIdOrThrow: (id: string) => Promise<Model>;
};

export default BaseService;