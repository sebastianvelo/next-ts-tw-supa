import handleAPIRequest from "@/core/api/handleAPIRequest";
import { APIResponse, ParamsId } from "@/core/api/types";
import UserViewService from "@/lib/user/view";
import UserHomeViewDTO from "@/lib/user/view/builders/home/dto";

export async function GET(_req: Request, { params }: ParamsId): APIResponse<UserHomeViewDTO> {
    const { id } = await params;

    return handleAPIRequest(async () => UserViewService.getHomeView());
}