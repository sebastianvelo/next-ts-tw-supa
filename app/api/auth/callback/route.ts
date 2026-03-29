import AuthService from "@/modules/auth/application/service";
import UserService from "@/modules/user/application/service";
import upsertFromOAuth from "@/modules/user/application/use-case/upsert-from-oauth";
import ROUTES from "@/routes/client";
import { NextResponse } from "next/server";

/**
 * Callback de OAuth - Se ejecuta después del signin con provider externo
 * 
 * Responsabilidad:
 * - Coordinar el flujo OAuth (no tiene lógica de negocio)
 * - Delegar a servicios correspondientes
 * - Manejar redirects
 */
export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    const next = searchParams.get("next") ?? "/";

    if (!code) {
        return NextResponse.redirect(`${origin}/auth-code-error`);
    }

    try {
        const { data, error } = await AuthService.exchangeCodeForSession(code);

        if (error || !data.user) {
            console.error("Auth exchange error:", error);
            return NextResponse.redirect(`${origin}/auth-code-error`);
        }

        const userData = UserService.prepareUserRegistrationData(data.user);
        await upsertFromOAuth(userData);

        const forwardedHost = request.headers.get("x-forwarded-host");
        const base = await AuthService.buildRedirectUrl(origin, forwardedHost);
        const url = new URL(ROUTES.USER.ROOT + next, base);

        return NextResponse.redirect(url);
    } catch (error) {
        console.error("Auth callback error:", error);
        return NextResponse.redirect(`${origin}/auth-code-error`);
    }
}