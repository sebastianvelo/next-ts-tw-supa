import { ResponseAPIError, ResponseAPISuccess } from "@/core/errors";
import InstitutionRole from "@/lib/institution-membership/model/enum/institution-role";
import { NextResponse } from "next/server";

export type ParamsId = {
    params: Promise<{ id: string }>;
};

export type ParamsIdWithRole = {
    params: Promise<{ id: string, role: InstitutionRole }>;
};

export type APIResponse<T = ResponseAPISuccess> = Promise<NextResponse<T | ResponseAPIError | null>>;