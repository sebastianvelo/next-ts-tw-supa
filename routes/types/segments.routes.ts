const ENTITIES = {
    USER: "user",
};

const ACTIONS = {
}

const SEGMENTS = {
    NOT_FOUND: "not-found",
    LOGIN: "login",
    HOME: "home",
    NEW: "new",
    ...ENTITIES,
    ...ACTIONS
} as const;

export type Segment = keyof typeof SEGMENTS;

export default SEGMENTS;