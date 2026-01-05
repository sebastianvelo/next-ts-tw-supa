import PageTabsDTO from "@/core/view/DTO/page/tabs";

export interface UserPageHeaderDTO {
    image?: string;
    title?: string;
    subtitle?: string;
}

interface UserLayoutViewDTO {
    header: UserPageHeaderDTO;
    tabs: PageTabsDTO;
}

export default UserLayoutViewDTO;