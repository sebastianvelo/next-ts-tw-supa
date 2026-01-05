import FormSectionDTO from "./form-section";

interface FormViewDTO<T> extends FormSectionDTO<T> {
    success: string;
}

export default FormViewDTO;