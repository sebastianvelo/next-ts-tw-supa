import ErrorCode from "@/errors/codes";

/**
 * Error usado en el cliente cuando falla un fetch
 * Contiene información del error HTTP y datos del servidor
 */
class ResponseFetchError extends Error {
    public readonly statusCode: number;
    public readonly errorCode?: ErrorCode;
    public readonly details?: Record<string, any>;

    constructor(statusCode: number, message: string, errorCode?: ErrorCode, details?: Record<string, any>) {
        super(message);
        this.name = "ResponseFetchError";
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.details = details;

        Error.captureStackTrace(this, this.constructor);
    }

    /**
     * Verifica si es un error de autorización
     */
    isUnauthorized(): boolean {
        return this.statusCode === 401;
    }

    /**
     * Verifica si es un error de permisos
     */
    isForbidden(): boolean {
        return this.statusCode === 403;
    }

    /**
     * Verifica si es un error de recurso no encontrado
     */
    isNotFound(): boolean {
        return this.statusCode === 404;
    }

    /**
     * Verifica si es un error del servidor
     */
    isServerError(): boolean {
        return this.statusCode >= 500;
    }
}

export default ResponseFetchError;

/**
 * Type guard para verificar si un error es ResponseFetchError
 */
export const isFetchError = (error: unknown): error is ResponseFetchError => {
    return error instanceof ResponseFetchError;
};