import PageTabDTO from "@/presentation/view/models/main/tabs";

export interface UserPageHeaderDTO {
    image?: string;
    title?: string;
    subtitle?: string;
}

interface UserHomeLayoutDTO {
    header: UserPageHeaderDTO;
    tabs?: PageTabDTO[];
}

export default UserHomeLayoutDTO;