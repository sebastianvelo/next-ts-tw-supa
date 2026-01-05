import logger from "./logger";
import { ERROR, INIT, SUCCESS } from "./messages";
import { formatParams, getType } from "./messages/formatters";

function LoggingProxy<T extends { new(...args: any[]): any }>(ServiceClass: T): InstanceType<T> {
    const serviceName = ServiceClass.name;
    const instance = new ServiceClass();
    const emoji = getType(serviceName);

    return new Proxy(instance, {
        get(target, prop) {
            const original = target[prop as keyof typeof target];
            if (typeof original !== "function") return original;

            return async (...args: any[]) => {
                const method = `${serviceName}.${String(prop)}`.padEnd(55);
                const id = `[#${Date.now().toString().slice(8)}]`;
                const start = Date.now();

                logger.debug(INIT({ emoji, method, id }));

                try {
                    const result = await original.apply(target, args);
                    const dur = Date.now() - start;
                    logger.info(SUCCESS({ emoji, method, id, dur }));
                    logger.debug(result);
                    return result;
                } catch (error) {
                    const dur = Date.now() - start;
                    const msg = error instanceof Error ? error.message : "Unknown error";
                    logger.error(ERROR({ emoji, method, id, dur }));
                    logger.error(`🔴 MESSAGE ▌ ${msg}`);
                    logger.error(`🔴 PARAMS  ▌ ${formatParams(args)}`);
                    throw error;
                }
            };
        },
    });
}

export default LoggingProxy;


