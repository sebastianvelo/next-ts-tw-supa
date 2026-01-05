import CreateDTO from "./create";

type UpdateDTO<T> = Partial<CreateDTO<T>>;

export default UpdateDTO;

