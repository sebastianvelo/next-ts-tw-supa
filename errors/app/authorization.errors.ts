import { APIServiceError } from "@/core/errors";
import ErrorCode from "@/errors/codes";

const AUTHORIZATION = {
    NOT_AUTHORIZED: new APIServiceError(
        ErrorCode.UNAUTHORIZED,
        "You don't have permission to access this resource",
        403
    ),
    INSUFFICIENT_PERMISSIONS: ({ action, resource, resourceId }: { action: string, resource: string, resourceId: string }) =>
        new APIServiceError(
            ErrorCode.INSUFFICIENT_PERMISSIONS,
            `Insufficient permissions to ${action} @ ${resourceId}`,
            403,
            { action, resource, resourceId }
        ),
    VISIBILITY_RESTRICTION: (resource: string, action: string, visibility: string) =>
        new APIServiceError(
            ErrorCode.VISIBILITY_RESTRICTION,
            `${resource} is ${visibility} and you can't ${action}`,
            403,
            { visibility, resource }
        ),
};

export default AUTHORIZATION;
