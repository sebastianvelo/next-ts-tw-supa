import handleAPIRequest from "@/core/api/handleAPIRequest";
import AuthorizationService from "@/lib/authorization/service";

export async function GET() {
    return handleAPIRequest(async () => AuthorizationService.getCurrentUserOrThrow());
}