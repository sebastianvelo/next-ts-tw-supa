const SEGMENTS = {
    NOT_FOUND: "not-found",
    LOGIN: "login",
    USER: "user",
    HOME: "home",
    NEW: "new",
} as const;

export type Segment = keyof typeof SEGMENTS;

export default SEGMENTS;