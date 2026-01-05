export type PageTabDTO<ActionContext = any> = {
    label: string;
    href?: string;
    tabs?: PageTabDTO<ActionContext>[];
    permissionRequired?: ActionContext;
};

interface PageTabsDTO<ActionContext = any> {
    tabs: PageTabDTO<ActionContext>[];
}

export default PageTabsDTO;