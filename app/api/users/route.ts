import handleAPIRequest from "@/core/api/handleAPIRequest";
import { APIResponse } from "@/core/api/types";
import ERRORS from "@/errors";
import User from "@/lib/user/model";
import UserKeys from "@/lib/user/model/keys";
import UserService from "@/lib/user/service";
import UserDTO from "@/lib/user/view/dto/UserRegistrationData";

/**
 * Endpoint para crear usuarios (usado principalmente en el flujo OAuth)
 * 
 * Responsabilidad:
 * - Validar request
 * - Delegar creación al UserService
 * - Devolver respuesta HTTP
 */
export async function POST(request: Request): APIResponse<User> {
    return handleAPIRequest(
        async () => {
            const body: UserDTO = await request.json();
            if (!body.id || !body.email) {
                throw ERRORS.VALIDATION.REQUIRED_FIELDS([UserKeys.ID, UserKeys.EMAIL]);
            }
            const user = await UserService.upsertFromOAuth(body);

            return user;
        }
    );
}