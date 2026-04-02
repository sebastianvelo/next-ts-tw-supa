const ENTITIES = {
    USERS: "users",
};

const ACTIONS = {
    CREATE: "create",
}

const SEGMENTS = {
    NOT_FOUND: "not-found",
    LOGIN: "login",
    HOME: "home",
    ...ENTITIES,
    ...ACTIONS
} as const;

export type Segment = keyof typeof SEGMENTS;

export default SEGMENTS;