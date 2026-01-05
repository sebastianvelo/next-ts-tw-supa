import variants from "../common/variants";

export type ToastVariant = keyof typeof variants;

export interface ToastMessage {
    id: number;
    variant: ToastVariant;
    text: string;
}
