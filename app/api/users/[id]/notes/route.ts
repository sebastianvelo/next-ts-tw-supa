import handleAPIRequest from "@/core/api/handleAPIRequest";
import { APIResponse, ParamsId } from "@/core/api/types";
import UserViewService from "@/lib/user/view";
import UserNotesListViewDTO from "@/lib/user/view/builders/notes/dto";

export async function GET(_req: Request, { params }: ParamsId): APIResponse<UserNotesListViewDTO> {
    const { id } = await params;

    return handleAPIRequest(async () => UserViewService.getNotesListView());
}