"use client"
import ROUTES from "@/routes/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useNavigationError from "./useNavigationError";

const useRedirectOnError = (error: unknown, to: string = ROUTES.NOT_FOUND): void => {
    const router = useRouter();
    const { setRedirectError } = useNavigationError();

    useEffect(() => {
        if (!error) return;

        let message = "Unknown error";

        const err = error as any;

        if (typeof err === "string") message = err;
        else if (err?.message) message = err.message;
        else if (typeof err === "object") message = JSON.stringify(err);

        setRedirectError(message);
        router.push(to);
    }, [error, router, setRedirectError]);
}

export default useRedirectOnError;