"use client"
import Button from "@/atoms/button/Button";
import Text from "@/atoms/text/Text";
import { FormFieldType } from "@/presentation/forms/types";
import FormFieldDTO from "@/presentation/view/models/form/form-field";
import useI18N from "@/hooks/lang/useI18N";
import { PlusIcon } from "lucide-react";
import { FieldValues, useFieldArray, useFormContext } from "react-hook-form";
import ArrayFieldItem from "./ArrayFieldItem";

interface ArrayFieldProps<T extends FieldValues> {
    name: string;
    label?: string;
    fields: FormFieldDTO<T>[];
    addButtonLabel?: string;
}

const ArrayField = <T extends FieldValues>({ name, label, fields: schema, addButtonLabel }: ArrayFieldProps<T>) => {
    const { t } = useI18N();
    const { control } = useFormContext<T>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: name as any
    });

    const handleAdd = () => {
        const defaultValues = schema.reduce((acc, field) => {
            acc[field.name as string] = field.defaultValue ?? (field.type === FormFieldType.OBJECT_LIST ? [] : "");
            return acc;
        }, {} as Record<string, any>);
        append(defaultValues as any);
    };

    return (
        <div className="space-y-4">
            <Text t={label} size="sm" weight="medium" />
            <div className="space-y-4">
                {fields.map((field, index) => (
                    <ArrayFieldItem
                        key={field.id}
                        index={index}
                        name={name}
                        fieldSchema={schema}
                        remove={remove}
                    />
                ))}
            </div>

            <Button variant="primary" type="button" size="sm" className="flex items-center" onClick={handleAdd}>
                <PlusIcon className="w-4 h-4 mr-2" />
                {addButtonLabel && t(addButtonLabel)}
            </Button>
        </div>
    );
};

export default ArrayField;
