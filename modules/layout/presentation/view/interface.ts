import SidebarDTO from "@/presentation/view/dto/organisms/sidebar";

interface ILayoutViewService {
    getMenu(): Promise<SidebarDTO>;
}

export default ILayoutViewService;