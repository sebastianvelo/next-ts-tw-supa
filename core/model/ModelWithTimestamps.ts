import Model from "@/core/model/Model";

interface ModelWithTimestamps extends Model {
    createdAt: number;
    updatedAt: number;
}

export default ModelWithTimestamps;