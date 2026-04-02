type PageTabDTO<ActionContext = any> = {
    label: string;
    href?: string;
    tabs?: PageTabDTO<ActionContext>[];
    permissionRequired?: ActionContext;
};

export default PageTabDTO;