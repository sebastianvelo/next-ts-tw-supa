import handleAPIRequest from "@/core/api/handleAPIRequest";
import AuthorizationService from "@/modules/authorization/application/service";

export async function GET() {
    return handleAPIRequest(async () => AuthorizationService.getCurrentUserOrThrow());
}