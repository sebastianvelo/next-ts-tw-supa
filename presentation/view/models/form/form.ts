import HttpMethod from "@/core/types/HttpMethod";
import FormFieldDTO from "@/presentation/view/models/form/form-field";

interface FormDTO<T> {
    endpoint?: string;
    method?: HttpMethod;
    fields: FormFieldDTO<T>[];
}

export default FormDTO;