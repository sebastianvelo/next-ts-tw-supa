import FormFieldDTO from "@/presentation/view/dto/form/form-field";

interface FormDTO<T> {
    title?: string;
    apiRoute?: string;
    fields?: FormFieldDTO<T>[];
}

export default FormDTO;