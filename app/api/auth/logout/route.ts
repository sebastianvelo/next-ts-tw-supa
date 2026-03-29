import handleAPIRequest from "@/core/api/handleAPIRequest";
import AuthService from "@/modules/auth/application/service";

export async function POST() {
    return handleAPIRequest(async () => AuthService.logout());
}