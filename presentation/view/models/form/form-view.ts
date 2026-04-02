import FormDTO from "./form";

interface FormViewDTO<T> extends FormDTO<T> {
    success?: string;
    isWizard?: boolean;
}

export default FormViewDTO;