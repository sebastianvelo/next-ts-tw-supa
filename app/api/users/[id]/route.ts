import handleAPIRequest from "@/core/api/handleAPIRequest";
import { APIResponse, ParamsId } from "@/core/api/types";
import UserViewService from "@/modules/user/presentation/view";
import UserHomeLayoutDTO from "@/modules/user/presentation/view/builders/layout/dto";

export async function GET(_req: Request, { params }: ParamsId): APIResponse<UserHomeLayoutDTO> {
    const { id } = await params;

    return handleAPIRequest(async () => UserViewService.getHomeLayout());
}