import Model from "@/core/model/Model";

interface ModelWithTags extends Model {
    tags: string[];
}

export default ModelWithTags;