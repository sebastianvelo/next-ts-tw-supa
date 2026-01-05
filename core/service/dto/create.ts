import ModelWithTimestamps from "@/core/model/ModelWithTimestamps";

type CreateDTO<T, K extends keyof T = never> = Omit<T, K | keyof ModelWithTimestamps>;

export default CreateDTO;
