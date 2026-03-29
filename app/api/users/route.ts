import handleAPIRequest from "@/core/api/handleAPIRequest";
import { APIResponse } from "@/core/api/types";
import ERRORS from "@/errors";
import User from "@/modules/user/domain/model";
import UserKeys from "@/modules/user/domain/model/keys";
import upsertFromOAuth from "@/modules/user/application/use-case/upsert-from-oauth";
import UserRegistrationData from "@/modules/user/application/dto/UserRegistrationData";

/**
 * Endpoint para crear usuarios (usado principalmente en el flujo OAuth)
 * 
 * Responsabilidad:
 * - Validar request
 * - Delegar creación al use case
 * - Devolver respuesta HTTP
 */
export async function POST(request: Request): APIResponse<User> {
    return handleAPIRequest(
        async () => {
            const body: UserRegistrationData = await request.json();
            if (!body.id || !body.email) {
                throw ERRORS.VALIDATION.REQUIRED_FIELDS([UserKeys.ID, UserKeys.EMAIL]);
            }
            const user = await upsertFromOAuth(body);

            return user;
        }
    );
}