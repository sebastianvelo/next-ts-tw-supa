const LOG_LEVEL = process.env.LOG_LEVEL ?? "info";

const LEVELS = {
    none: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
} as const;

const currentLevel = LEVELS[LOG_LEVEL as keyof typeof LEVELS] ?? LEVELS.info;

console.log(`Logging level: `, LOG_LEVEL);

const logger = {
    debug: (...args: unknown[]) => currentLevel >= LEVELS.debug && console.debug(...args),
    info: (...args: unknown[]) => currentLevel >= LEVELS.info && console.info(...args),
    warn: (...args: unknown[]) => currentLevel >= LEVELS.warn && console.warn(...args),
    error: (...args: unknown[]) => currentLevel >= LEVELS.error && console.error(...args),
};

export default logger;