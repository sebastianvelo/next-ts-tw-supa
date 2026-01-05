import { APIResponse, ParamsId } from "@/core/api/types";
import handleAPIRequest from "@/core/api/handleAPIRequest";
import CourseMembershipService from "@/lib/course-membership/service";
import CourseMembership from "@/lib/course-membership/model";

export async function GET(_req: Request, { params }: ParamsId): APIResponse<CourseMembership[]> {
    const { id } = await params;

    return handleAPIRequest(
        async () => CourseMembershipService.getByUserId(id)
    );
}