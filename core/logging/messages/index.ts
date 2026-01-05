import { formatDuration, formatTimestamp } from "./formatters";

type MessageInfo = {
    emoji: string;
    method: string;
    id: string;
};

type MessageInfoEnd = {
    dur: number;
} & MessageInfo;

export function INIT({ emoji, method, id }: MessageInfo): any {
    return `🔵 INIT    ▌ ${emoji} ${method} ▌ ${id} ▌ ${formatTimestamp()}`;
}

export function SUCCESS({ emoji, method, id, dur }: MessageInfoEnd): any {
    return `🟢 SUCCESS ▌ ${emoji} ${method} ▌ ${id} ▌ ${formatTimestamp()} ▌ ${formatDuration(dur)}`;
}

export function ERROR({ emoji, method, id, dur }: MessageInfoEnd): any {
    return `🔴 ERROR   ▌ ${emoji} ${method} ▌ ${id} ▌ ${formatTimestamp()} ▌ ${formatDuration(dur)}`;
}