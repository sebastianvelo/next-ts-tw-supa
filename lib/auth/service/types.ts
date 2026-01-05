import { User as AuthUser, AuthError } from "@supabase/supabase-js";

export interface AuthUserResponse {
    user: AuthUser | null;
    error: AuthError | null;
}