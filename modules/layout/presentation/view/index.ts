import LoggingProxy from "@/core/logging/LoggingProxy";
import SidebarDTO from "@/presentation/view/models/organisms/sidebar/dto";
import buildMenu from "./builders/menu";
import ILayoutViewService from "./interface";

class LayoutViewService implements ILayoutViewService {

    async getMenu(): Promise<SidebarDTO> {
        return buildMenu();
    }
}

export default LoggingProxy(LayoutViewService);