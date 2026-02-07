import { ResponseAPIError, ResponseAPISuccess } from "@/core/errors";
import { NextResponse } from "next/server";

export type ParamsId = {
    params: Promise<{ id: string }>;
};

export type APIResponse<T = ResponseAPISuccess> = Promise<NextResponse<T | ResponseAPIError | null>>;