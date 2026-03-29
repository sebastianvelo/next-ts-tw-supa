import ROUTE_CONFIG_MAP from "@/routes/config";
import SEGMENTS from "@/routes/types/segments.routes";
import { RouteConfig } from "@/routes/types/types";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface UseRouteConfig extends RouteConfig {
    pathname: string;
}

const useRouteConfig = (): UseRouteConfig => {
    const pathname = usePathname();

    const config = useMemo(() => {
        const normalizedPath = pathname.replaceAll(/\/[a-zA-Z0-9_-]+(?=\/|$)/g, (match, offset) => {
            if (offset === 0 && Object.values(SEGMENTS).includes(match.slice(1) as any)) {
                return match;
            }

            if (!Object.values(SEGMENTS).includes(match.slice(1) as any)) {
                return "/[id]";
            }
            return match;
        });

        const matchedConfig = ROUTE_CONFIG_MAP[normalizedPath];

        if (!matchedConfig) {
            throw new Error(`No route config found for pathname: ${pathname} (normalized: ${normalizedPath})`);
        }

        return matchedConfig;
    }, [pathname]);

    return {
        ...config,
        pathname,
    };
};

export default useRouteConfig;