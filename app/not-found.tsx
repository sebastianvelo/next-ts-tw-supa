"use client"
import ROUTES from "@/routes/client";
import { redirect } from "next/navigation";

export default function NotFound() {
    redirect(ROUTES.NOT_FOUND);
    return null;
}