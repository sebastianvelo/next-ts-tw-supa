import ErrorCode from "@/errors/codes";

/**
 * Respuesta exitosa genérica
 */
export type ResponseAPISuccess = {
    success: boolean;
};

/**
 * Estructura de respuesta de error desde el servidor
 */
export interface ResponseAPIError {
    code: ErrorCode;
    message: string;
    details?: Record<string, any>;
}