const getEnvNumber = (key: string, defaultValue: number): number => {
    const value = process.env[key];
    if (!value) return defaultValue;

    const parsed = Number(value);
    return isNaN(parsed) ? defaultValue : parsed;
};

const DEFAULTS = {
    USERS: 100,
} as const;

const ENV_KEYS = {
    USERS: "MOCK_USERS",
} as const;

const QUANTITY = {
    USERS: getEnvNumber(ENV_KEYS.USERS, DEFAULTS.USERS),
} as const;

export default QUANTITY;