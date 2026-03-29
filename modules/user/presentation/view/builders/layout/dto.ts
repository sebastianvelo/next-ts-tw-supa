import PageNavigatorDTO from "@/presentation/view/dto/page/tabs";

export interface UserPageHeaderDTO {
    image?: string;
    title?: string;
    subtitle?: string;
}

interface UserLayoutViewDTO extends PageNavigatorDTO {
    header: UserPageHeaderDTO;
}

export default UserLayoutViewDTO;