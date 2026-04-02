import FormFieldDTO from "@/presentation/view/dto/form/form-field";

interface FormDTO<T> {
    title?: string;
    subtitle?: string;
    apiRoute?: string;
    fields?: FormFieldDTO<T>[];
}

export default FormDTO;