import handleAPIRequest from "@/core/api/handleAPIRequest";
import AuthService from "@/lib/auth/service";

export async function POST() {
    return handleAPIRequest(async () => AuthService.logout());
}