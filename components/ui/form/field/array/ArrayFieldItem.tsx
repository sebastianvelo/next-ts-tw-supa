"use client"
import Button from "@/atoms/button/Button";
import FormFieldContainer from "@/form/field/FormFieldContainer";
import Card from "@/molecules/card/Card";
import FormFieldDTO from "@/presentation/view/models/form/form-field";
import { TrashIcon } from "lucide-react";
import { FieldValues, UseFieldArrayRemove } from "react-hook-form";

interface ArrayFieldItemProps<T extends FieldValues> {
    index: number;
    name: string;
    fieldSchema: FormFieldDTO<T>[];
    remove: UseFieldArrayRemove;
}

const ArrayFieldItem = <T extends FieldValues>({ index, name, fieldSchema, remove }: ArrayFieldItemProps<T>) => (
    <Card className="p-4 relative">
        <div className="absolute top-2 right-2 z-10">
            <Button variant="danger" size="sm" type="button" onClick={() => remove(index)}>
                <TrashIcon className="h-4" />
            </Button>
        </div>
        <div className="grid grid-cols-6 gap-4 w-full">
            {fieldSchema.map((fieldSchema) => (
                <FormFieldContainer
                    key={fieldSchema.name as string}
                    {...fieldSchema}
                    name={`${name}.${index}.${fieldSchema.name as string}` as any}
                />
            ))}
        </div>
    </Card>
);

export default ArrayFieldItem;
