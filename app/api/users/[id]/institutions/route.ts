import handleAPIRequest from "@/core/api/handleAPIRequest";
import { APIResponse, ParamsId } from "@/core/api/types";
import UserViewService from "@/lib/user/view";
import UserInstitutionsListViewDTO from "@/lib/user/view/builders/institutions/dto";

export async function GET(_req: Request, { params }: ParamsId): APIResponse<UserInstitutionsListViewDTO> {
    const { id } = await params;

    return handleAPIRequest(async () => UserViewService.getInstitutionsListView());
}