import Text, { TextProps } from "@/atoms/text/Text";
import { BreadcrumbItemDTO } from "@/presentation/view/dto/molecules/breadcrumb/dto";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { baseStyles, baseAfterStyles, activeAfterStyles, inactiveAfterStyles } from "./styles";

export interface BreadcrumbItemProps extends BreadcrumbItemDTO {
    index: number;
    isCurrent: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ index, isCurrent, label, href }) => {
    const textProps: TextProps = {
        weight: isCurrent ? "bold" : "normal",
        variant: isCurrent ? "primary" : "secondary",
        size: "sm",
        className: `${baseStyles} ${baseAfterStyles} ${isCurrent ? activeAfterStyles : inactiveAfterStyles}`
    };

    return (
        <>
            {index > 0 && <Text variant="primary"><ChevronRight className="h-4 w-6 font-bold" /></Text>}
            {href ? (
                <Link href={href}>
                    <Text t={label} {...textProps} />
                </Link>
            ) : (
                <Text t={label} {...textProps} />
            )}
        </>
    );
};

export default BreadcrumbItem;
