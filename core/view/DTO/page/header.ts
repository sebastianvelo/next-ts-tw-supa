import ActionDTO from "../common/action";
import BadgeDTO from "../common/badge";
import BreadcrumbDTO from "../common/breadcrumb";

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