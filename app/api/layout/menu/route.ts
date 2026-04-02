import handleAPIRequest from "@/core/api/handleAPIRequest";
import { APIResponse } from "@/core/api/types";
import LayoutViewService from "@/modules/layout/presentation/view";
import SidebarDTO from "@/presentation/view/dto/organisms/sidebar";

export async function GET(_req: Request): APIResponse<SidebarDTO> {
    return handleAPIRequest(async () => LayoutViewService.getMenu());
}