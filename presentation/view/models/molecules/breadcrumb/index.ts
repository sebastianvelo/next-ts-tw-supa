import BreadcrumbDTO, { BreadcrumbItemDTO } from "./dto";

const buildBreadcrumb = (items: (BreadcrumbItemDTO | undefined)[]): BreadcrumbDTO => ({
    items: items.filter(Boolean) as BreadcrumbItemDTO[],
});

export default buildBreadcrumb;