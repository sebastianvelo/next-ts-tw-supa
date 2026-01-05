import handleAPIRequest from "@/core/api/handleAPIRequest";
import { APIResponse, ParamsId } from "@/core/api/types";
import UserViewService from "@/lib/user/view";
import UserLayoutViewDTO from "@/lib/user/view/builders/layout/dto";

export async function GET(_req: Request, { params }: ParamsId): APIResponse<UserLayoutViewDTO> {
    const { id } = await params;

    return handleAPIRequest(async () => UserViewService.getLayoutView());
}