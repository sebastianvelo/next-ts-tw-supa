import { APIServiceError } from "@/core/errors";
import ErrorCode from "@/errors/codes";

const AUTH = {
    UNAUTHENTICATED: new APIServiceError(
        ErrorCode.UNAUTHENTICATED,
        "Authentication required",
        401
    ),
    SESSION_EXPIRED: new APIServiceError(
        ErrorCode.SESSION_EXPIRED,
        "Your session has expired. Please log in again",
        401
    ),
    INVALID_CREDENTIALS: new APIServiceError(
        ErrorCode.INVALID_CREDENTIALS,
        "Invalid email or password",
        401
    ),
};

export default AUTH;