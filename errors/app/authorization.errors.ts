import { APIServiceError } from "@/core/errors";
import ErrorCode from "@/errors/codes";

const AUTHORIZATION = {
    NOT_AUTHORIZED: new APIServiceError(
        ErrorCode.UNAUTHORIZED,
        "You don't have permission to access this resource",
        403
    ),
};

export default AUTHORIZATION;
