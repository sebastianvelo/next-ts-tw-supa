import ActionDTO from "../molecules/action/dto";
import BadgeDTO from "../atoms/badge/dto";
import BreadcrumbDTO from "../molecules/breadcrumb/dto";

interface PageHeaderDTO {
    title?: string;
    subtitle?: string;
    content?: string;
    hrefBack?: string;
    image?: string;
    badges?: BadgeDTO[];
    breadcrumb?: BreadcrumbDTO;
    actions?: ActionDTO[];
}

export default PageHeaderDTO;