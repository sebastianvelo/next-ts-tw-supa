import QueryParam from "./params.routes";

export type PathBuilder = (id: string) => string;

export type RouteConfig<P> = {
    apiRoute: PathBuilder;
    fallbackPath?: PathBuilder;
    requiredPermission?: P;
    allowedParams?: QueryParam[];
};

export type RouteConfigMap<P> = {
    [pattern: string]: RouteConfig<P>;
};