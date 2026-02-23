export type PageTabDTO<ActionContext = any> = {
    label: string;
    href?: string;
    tabs?: PageTabDTO<ActionContext>[];
    permissionRequired?: ActionContext;
};

interface PageNavigatorDTO<ActionContext = any> {
    tabs?: PageTabDTO<ActionContext>[];
}

export default PageNavigatorDTO;