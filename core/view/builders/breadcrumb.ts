import BreadcrumbDTO, { BreadcrumbItemDTO } from "../DTO/common/breadcrumb";

const buildBreadcrumb = (items: (BreadcrumbItemDTO | undefined)[]): BreadcrumbDTO => ({
    items: items.filter(Boolean) as BreadcrumbItemDTO[],
});

export default buildBreadcrumb;