import { APIServiceError } from "@/core/errors";
import ErrorCode from "@/errors/codes";

const GENERAL = {
    NOT_FOUND: (resource: string, id?: string) =>
        new APIServiceError(
            ErrorCode.RESOURCE_NOT_FOUND,
            `${resource} not found`,
            404,
            id ? { resourceId: id } : undefined
        ),
    INTERNAL_ERROR: (message?: string) =>
        new APIServiceError(
            ErrorCode.INTERNAL_ERROR,
            message || "An unexpected error occurred",
            500
        ),
    DATABASE_ERROR: (operation: string) =>
        new APIServiceError(
            ErrorCode.DATABASE_ERROR,
            `Database error during ${operation}`,
            500,
            { operation }
        ),
    EXTERNAL_SERVICE_ERROR: (service: string) =>
        new APIServiceError(
            ErrorCode.EXTERNAL_SERVICE_ERROR,
            `External service error: ${service}`,
            500,
            { service }
        ),
    INVALID_ROUTE: (route: string) =>
        new APIServiceError(
            ErrorCode.INVALID_ROUTE,
            `Invalid route: ${route}`,
            403,
            { route }
        ),
};

export default GENERAL;
