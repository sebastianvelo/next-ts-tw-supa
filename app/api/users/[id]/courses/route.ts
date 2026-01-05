import handleAPIRequest from "@/core/api/handleAPIRequest";
import { APIResponse, ParamsId } from "@/core/api/types";
import UserViewService from "@/lib/user/view";
import UserCoursesListViewDTO from "@/lib/user/view/builders/courses/dto";

export async function GET(_req: Request, { params }: ParamsId): APIResponse<UserCoursesListViewDTO> {
    const { id } = await params;

    return handleAPIRequest(async () => UserViewService.getCoursesListView());
}