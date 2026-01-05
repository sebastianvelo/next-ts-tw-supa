import { APIServiceError } from "@/core/errors";
import ErrorCode from "@/errors/codes";

const USER = {
    NOT_FOUND: (userId: string) =>
        new APIServiceError(
            ErrorCode.USER_NOT_FOUND,
            "User not found",
            404,
            { userId }
        ),
    AUTH_NOT_FOUND: (authId: string) =>
        new APIServiceError(
            ErrorCode.USER_NOT_FOUND,
            "User not found",
            404,
            { authId }
        ),
    ALREADY_EXISTS: (email: string) =>
        new APIServiceError(
            ErrorCode.DUPLICATE_ENTRY,
            "User already exists",
            409,
            { email }
        ),
    EMAIL_IN_USE: (email: string) =>
        new APIServiceError(
            ErrorCode.DUPLICATE_ENTRY,
            "Email already in use",
            409,
            { email }
        ),
};

export default USER;
