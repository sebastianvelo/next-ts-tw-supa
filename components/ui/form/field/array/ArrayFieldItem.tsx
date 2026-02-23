"use client";
import Button from "@/components/ui/atoms/button/Button";
import FormFieldContainer from "@/components/ui/form/field/FormFieldContainer";
import Card from "@/components/ui/molecules/card/Card";
import FormFieldDTO from "@/core/view/DTO/form/form-field";
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
        <div className="space-y-4">
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
