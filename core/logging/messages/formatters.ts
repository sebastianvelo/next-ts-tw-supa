export const formatTimestamp = () => new Date().toTimeString().slice(0, 8);

export const formatDuration = (ms: number) => `[in ${ms}ms]`;

export const formatParams = (args: any[]) => args.length > 0 ? JSON.stringify(args, null, 0) : "";

export const getType = (name: string): string => {
    const n = name.toLowerCase();
    if (n.includes("auths")) return "🛡️";
    if (n.includes("auth") || n.includes("permission")) return "👤";
    if (n.includes("viewservice")) return "💻";
    if (n.includes("repository")) return "📦";
    if (n.includes("service")) return "⚙️ ";
    return "";
};
