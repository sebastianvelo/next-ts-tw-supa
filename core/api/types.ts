import { ResponseAPIError, ResponseAPISuccess } from "@/core/errors";
import { NextResponse } from "next/server";

export type ParamsId = {
    params: Promise<{ id: string }>;
};

export type ParamsIdWithUserId = {
    params: Promise<{ id: string, userId: string }>;
};

export type APIResponse<T = ResponseAPISuccess> = Promise<NextResponse<T | ResponseAPIError | null>>;