import QueryParam from "./params.routes";

export type PathBuilder = (id: string) => string;

export type RouteConfig = {
    apiRoute: PathBuilder;
    fallbackPath?: PathBuilder;
    requiredPermission?: any;
    allowedParams?: QueryParam[];
};

export type RouteConfigMap = {
    [pattern: string]: RouteConfig;
};