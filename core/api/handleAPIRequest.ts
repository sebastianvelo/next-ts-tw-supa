import APIServiceError from "@/core/errors/api/APIServiceError";
import { NextResponse } from "next/server";
import { APIResponse } from "./types";

async function handleAPIRequest<T>(handler: () => Promise<T>): APIResponse<T> {
    try {
        console.info("▆".repeat(50));
        const result = await handler();
        return NextResponse.json(result, { status: 200 });
    } catch (e) {
        if (e instanceof APIServiceError) {
            console.error("APIServiceError:", e.toJSON())
            return NextResponse.json(e.toJSON(), { status: e.statusCode });
        }
        console.error("Unknown error", e);
        const message = e instanceof Error ? e.message : "Internal server error";
        const status = (e as any)?.statusCode ?? (e as any)?.status ?? 500;
        return NextResponse.json({ message, code: (e as any).code }, { status });
    } finally {
        console.info("⮯ ".repeat(50));
    }
}

export default handleAPIRequest;