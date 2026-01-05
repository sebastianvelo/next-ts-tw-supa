import handleAPIRequest from "@/core/api/handleAPIRequest";
import { APIResponse, ParamsId } from "@/core/api/types";
import UserViewService from "@/lib/user/view";
import UserSubmissionsListViewDTO from "@/lib/user/view/builders/submissions/dto";

export async function GET(_req: Request, { params }: ParamsId): APIResponse<UserSubmissionsListViewDTO> {
    const { id } = await params;

    return handleAPIRequest(async () => UserViewService.getSubmissionsListView());
}