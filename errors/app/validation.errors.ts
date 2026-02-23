import { APIServiceError } from "@/core/errors";
import ErrorCode from "@/errors/codes";

const VALIDATION = {
    REQUIRED_FIELDS: (fields: string[]) =>
        new APIServiceError(
            ErrorCode.REQUIRED_FIELDS,
            `Required fields missing: ${fields.join(", ")}`,
            400,
            { missingFields: fields }
        ),
    INVALID_FORMAT: (field: string, expectedFormat: string) =>
        new APIServiceError(
            ErrorCode.INVALID_FORMAT,
            `Invalid format for field "${field}". Expected: ${expectedFormat}`,
            400,
            { field, expectedFormat }
        ),
    DUPLICATE_ENTRY: (field: string, value: string) =>
        new APIServiceError(
            ErrorCode.DUPLICATE_ENTRY,
            `A record with ${field} "${value}" already exists`,
            409,
            { field, value }
        ),
};

export default VALIDATION;