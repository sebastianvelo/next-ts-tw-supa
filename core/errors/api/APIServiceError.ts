import ErrorCode from "@/errors/codes";
import { ResponseAPIError } from "@/core/errors/client/types";

/**
 * Error usado en el servidor (API routes, services, repositories)
 * Se convierte a ResponseError cuando se envía al cliente
 */
class APIServiceError extends Error {
    public readonly code: ErrorCode;
    public readonly statusCode: number;
    public readonly details?: Record<string, any>;

    constructor(code: ErrorCode, message: string, statusCode: number = 500, details?: Record<string, any>) {
        super(message);
        this.name = "ApiError";
        this.code = code;
        this.statusCode = statusCode;
        this.details = details;

        Error.captureStackTrace(this, this.constructor);
    }

    toJSON(): ResponseAPIError {
        return {
            code: this.code,
            message: this.message,
            ...(this.details && { details: this.details })
        };
    }
}

export default APIServiceError;