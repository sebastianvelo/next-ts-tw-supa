import I18n from "@/locales/I18nKeys";
import { Validation } from "./types";

export const minLength = (min: number): Record<"minLength", Validation> => ({
    minLength: {
        value: min,
        message: I18n.FORM.VALIDATION.MIN_LENGTH.replace("{0}", String(min)) //TODO FIX THIS!
    }
});

export const maxLength = (max: number): Record<"maxLength", Validation> => ({
    maxLength: {
        value: max,
        message: I18n.FORM.VALIDATION.MAX_LENGTH.replace("{0}", String(max))
    }
});

export const min = (minValue: number): Record<"min", Validation> => ({
    min: {
        value: minValue,
        message: I18n.FORM.VALIDATION.MIN.replace("{0}", String(minValue))
    }
});

export const max = (maxValue: number): Record<"max", Validation> => ({
    max: {
        value: maxValue,
        message: I18n.FORM.VALIDATION.MAX.replace("{0}", String(maxValue))
    }
});

export const email = (): Record<"pattern", Validation<RegExp>> => ({
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: I18n.FORM.VALIDATION.EMAIL
    }
});

export const url = (): Record<"pattern", Validation<RegExp>> => ({
    pattern: {
        value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        message: I18n.FORM.VALIDATION.URL
    }
});

export const phone = (): Record<"pattern", Validation<RegExp>> => ({
    pattern: {
        value: /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
        message: I18n.FORM.VALIDATION.PHONE
    }
});

export const numeric = (): Record<"pattern", Validation<RegExp>> => ({
    pattern: {
        value: /^[0-9]+$/,
        message: I18n.FORM.VALIDATION.NUMERIC
    }
});

export const alphabetic = (): Record<"pattern", Validation<RegExp>> => ({
    pattern: {
        value: /^[A-Za-zÀ-ÿ\s]+$/,
        message: I18n.FORM.VALIDATION.ALPHABETIC
    }
});

export const alphanumeric = (): Record<"pattern", Validation<RegExp>> => ({
    pattern: {
        value: /^[A-Za-z0-9À-ÿ\s]+$/,
        message: I18n.FORM.VALIDATION.ALPHANUMERIC
    }
});

export const strongPassword = (): Record<"pattern", Validation<RegExp>> => ({
    pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: I18n.FORM.VALIDATION.STRONG_PASSWORD
    }
});

export const dateISO = (): Record<"pattern", Validation<RegExp>> => ({
    pattern: {
        value: /^\d{4}-\d{2}-\d{2}$/,
        message: I18n.FORM.VALIDATION.DATE_ISO
    }
});

export const dniAR = (): Record<"pattern", Validation<RegExp>> => ({
    pattern: {
        value: /^\d{7,8}$/,
        message: I18n.FORM.VALIDATION.DNI_AR
    }
});

export const cuitAR = (): Record<"pattern", Validation<RegExp>> => ({
    pattern: {
        value: /^\d{2}-\d{8}-\d{1}$/,
        message: I18n.FORM.VALIDATION.CUIT_AR
    }
});

export const required = (custom?: string): Record<"required", string> => ({
    required: custom ?? I18n.FORM.VALIDATION.REQUIRED
});
