import FormDTO from "./form";

interface FormViewDTO<T> extends FormDTO<T> {
    title?: string;
    success?: string;
    isWizard?: boolean;
}

export default FormViewDTO;