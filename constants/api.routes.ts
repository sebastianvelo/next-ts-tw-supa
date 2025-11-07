const BASE_PATH = "/api";

const API_ROUTES = {
    AUTH: {
        ME: `${BASE_PATH}/auth/me`,
        LOGOUT: `${BASE_PATH}/auth/logout`,
        CALLBACK: `${BASE_PATH}/auth/callback`
    },
};

export default API_ROUTES;