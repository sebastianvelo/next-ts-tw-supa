import { createClient } from "@/core/db/supabase/SupabaseServer";
import LoggingProxy from "@/core/logging/LoggingProxy";
import ERRORS from "@/errors";
import { AuthUserResponse } from "./types";

/**
 * AuthService - Responsable SOLO de:
 * - Interacción con Supabase Auth
 * - Gestión de sesiones (login/logout)
 * - Transformación de datos de autenticación
 */
class AuthService {
    /**
     * Obtiene el usuario autenticado de Supabase
     */
    async getAuthUser(): Promise<AuthUserResponse> {
        const supabase = await createClient();
        const { data: { user }, error } = await supabase.auth.getUser();
        console.info(`👤 [${user?.id}]`);
        return { user, error };
    }

    /**
     * Intercambia el código OAuth por una sesión
     */
    async exchangeCodeForSession(code: string) {
        const supabase = await createClient();
        return await supabase.auth.exchangeCodeForSession(code);
    }

    /**
     * Cierra la sesión del usuario
     */
    async logout() {
        try {
            const supabase = await createClient();
            const { error } = await supabase.auth.signOut();

            if (error) {
                throw ERRORS.EXTERNAL_SERVICE_ERROR;
            }

            return { message: "Signed out successfully" };
        } catch (error) {
            throw ERRORS.EXTERNAL_SERVICE_ERROR;
        }
    }

    /**
     * Construye URL de redirección según el entorno
     */
    buildRedirectUrl(origin: string, forwardedHost: string | null): string {
        const isLocalEnv = process.env.NODE_ENV === "development";

        return isLocalEnv
            ? origin
            : forwardedHost
                ? `https://${forwardedHost}`
                : origin;
    }

}

export default LoggingProxy(AuthService);