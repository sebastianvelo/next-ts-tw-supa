import Text, { TextProps } from "@/components/ui/atoms/text/Text";
import { BreadcrumbItemDTO } from "@/core/view/DTO/common/breadcrumb";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const baseAfterStyles = "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:transition-all after:duration-200";
const activeAfterStyles = "after:bg-primary-600 dark:after:bg-primary-400 after:scale-x-100";
const inactiveAfterStyles = "after:scale-x-0 hover:after:scale-x-100 hover:after:bg-primary-700 dark:hover:after:bg-primary-300 hover:text-primary-700 dark:hover:text-primary-300";
const baseStyles = "backdrop-shadow-md relative py-1 transition-all duration-200 ease-in-out rounded-t-lg";

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
