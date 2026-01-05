export interface BreadcrumbItemDTO {
    label: string;
    href?: string;
}

interface BreadcrumbDTO {
    items?: BreadcrumbItemDTO[];
}

export default BreadcrumbDTO;