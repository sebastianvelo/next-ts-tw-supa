import BreadcrumbDTO from "@/presentation/view/models/molecules/breadcrumb/dto";
import BreadcrumbItem from "./item/BreadcrumbItem";

interface BreadcrumbProps extends BreadcrumbDTO {
    className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
    if (!items) return;

    return (
        <div className={className}>
            <div className="flex flex-nowrap items-center gap-x-1 whitespace-nowrap overflow-x-auto max-w-full">
                {items.map((item, index) => (
                    <BreadcrumbItem
                        key={`b-${index}`}
                        index={index}
                        isCurrent={index === items.length - 1}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};

export default Breadcrumb;
