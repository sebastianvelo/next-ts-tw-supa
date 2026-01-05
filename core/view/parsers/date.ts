type DateFormat = "short" // 21/11/2025
    | "medium" // 21 nov 2025
    | "long" // 21 de noviembre de 2025
    | "full" // viernes, 21 de noviembre de 2025
    | "time" // 14:30
    | "datetime" // 21/11/2025 14:30
    | "relative"; // hace 2 horas

interface FormatOptions {
    locale?: string;
    format?: DateFormat;
    includeTime?: boolean;
}

/**
 * Parsea un timestamp a una fecha legible
 * @param timestamp - Timestamp en milisegundos o segundos
 * @param options - Opciones de formato
 * @returns Fecha formateada como string
 */
export const parseTimestamp = (timestamp: number | string | Date | undefined, options: FormatOptions = {}): string => {
    if (!timestamp) return "";
    const { locale = "es-AR", format = "medium", includeTime = false } = options;

    // Convertir a Date
    let date: Date;

    if (timestamp instanceof Date) {
        date = timestamp;
    } else {
        const ts = typeof timestamp === "string" ? parseInt(timestamp) : timestamp;
        // Si el timestamp es en segundos (< año 3000), convertir a milisegundos
        date = new Date(ts < 10000000000 ? ts * 1000 : ts);
    }

    // Validar fecha
    if (isNaN(date.getTime())) {
        return "Fecha inválida";
    }

    switch (format) {
        case "short":
            return date.toLocaleDateString(locale, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            });

        case "medium":
            return date.toLocaleDateString(locale, {
                day: "numeric",
                month: "short",
                year: "numeric",
            });

        case "long":
            return date.toLocaleDateString(locale, {
                day: "numeric",
                month: "long",
                year: "numeric",
            });

        case "full":
            return date.toLocaleDateString(locale, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
            });

        case "time":
            return date.toLocaleTimeString(locale, {
                hour: "2-digit",
                minute: "2-digit",
            });

        case "datetime":
            return `${date.toLocaleDateString(locale, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            })} ${date.toLocaleTimeString(locale, {
                hour: "2-digit",
                minute: "2-digit",
            })}`;

        case "relative":
            return getRelativeTime(date, locale);

        default:
            if (includeTime) {
                return `${date.toLocaleDateString(locale, {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                })} ${date.toLocaleTimeString(locale, {
                    hour: "2-digit",
                    minute: "2-digit",
                })}`;
            }
            return date.toLocaleDateString(locale, {
                day: "numeric",
                month: "short",
                year: "numeric",
            });
    }
};

/**
 * Obtiene el tiempo relativo (hace X tiempo)
 */
const getRelativeTime = (date: Date, locale: string): string => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

    if (diffSecs < 60) return "ahora";
    if (diffMins < 60) return rtf.format(-diffMins, "minute");
    if (diffHours < 24) return rtf.format(-diffHours, "hour");
    if (diffDays < 7) return rtf.format(-diffDays, "day");
    if (diffWeeks < 4) return rtf.format(-diffWeeks, "week");
    if (diffMonths < 12) return rtf.format(-diffMonths, "month");
    return rtf.format(-diffYears, "year");
};

/**
 * Formatea un rango de fechas
 */
export const formatDateRange = (startTimestamp: number | string | Date, endTimestamp: number | string | Date, locale: string = "es-AR"): string => {
    const start = parseTimestamp(startTimestamp, { locale, format: "medium" });
    const end = parseTimestamp(endTimestamp, { locale, format: "medium" });
    return `${start} - ${end}`;
};

/**
 * Verifica si una fecha es hoy
 */
export const isToday = (timestamp: number | string | Date): boolean => {
    const date = timestamp instanceof Date ? timestamp : new Date(
        typeof timestamp === "string" ? parseInt(timestamp) :
            timestamp < 10000000000 ? timestamp * 1000 : timestamp
    );
    const today = new Date();
    return date.toDateString() === today.toDateString();
};

/**
 * Verifica si una fecha es ayer
 */
export const isYesterday = (timestamp: number | string | Date): boolean => {
    const date = timestamp instanceof Date ? timestamp : new Date(
        typeof timestamp === "string" ? parseInt(timestamp) :
            timestamp < 10000000000 ? timestamp * 1000 : timestamp
    );
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return date.toDateString() === yesterday.toDateString();
};