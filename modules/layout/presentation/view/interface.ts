import SidebarDTO from "@/presentation/view/models/organisms/sidebar/dto";

interface ILayoutViewService {
    getMenu(): Promise<SidebarDTO>;
}

export default ILayoutViewService;