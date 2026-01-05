import FormFieldDTO from "@/core/view/DTO/form/form-field";

interface FormSectionDTO<T> {
    title?: string;
    apiRoute?: string;
    fields?: FormFieldDTO<T>[];
}

export default FormSectionDTO;