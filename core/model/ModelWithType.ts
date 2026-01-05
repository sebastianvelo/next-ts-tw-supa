import Model from "@/core/model/Model";

interface ModelWithType<T> extends Model {
    type: T;
}

export default ModelWithType;