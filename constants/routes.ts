const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    WORKSPACE: (id: string) => `/workspaces/${id}`,
} as const;

export default ROUTES;