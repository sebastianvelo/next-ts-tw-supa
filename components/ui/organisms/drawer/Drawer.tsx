"use client"
import { X } from "lucide-react";
import { ReactNode } from "react";
import useDrawer from "./hooks/useDrawer";

export interface DrawerProps {
    trigger: (open: () => void) => ReactNode;
    header: ReactNode;
    content: ReactNode;
    footer?: (close: () => void) => ReactNode;
    maxHeight?: string;
}

function Drawer({ trigger, header, content, footer, maxHeight = "82dvh" }: Readonly<DrawerProps>) {
    const { rendered, visible, open, close } = useDrawer();

    return (
        <>
            {trigger(open)}

            {rendered && (
                <>
                    {/* Backdrop */}
                    <div
                        onClick={close}
                        aria-hidden="true"
                        style={{ transition: "opacity 300ms ease" }}
                        className={`
                            fixed inset-0 z-40
                            bg-black/40 backdrop-blur-sm
                            ${visible ? "opacity-100" : "opacity-0"}
                        `}
                    />

                    {/* Bottom Sheet */}
                    <div
                        role="dialog"
                        aria-modal="true"
                        style={{
                            transition: "transform 300ms ease",
                            maxHeight,
                        }}
                        className={`
                            fixed bottom-0 left-0 right-0 z-50
                            bg-white dark:bg-secondary-950
                            rounded-t-2xl shadow-2xl
                            flex flex-col
                            ${visible ? "translate-y-0" : "translate-y-full"}
                        `}
                    >
                        {/* Drag handle decorativo */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-secondary-300 dark:bg-secondary-700" />

                        {/* Header */}
                        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-secondary-200 dark:border-secondary-800 shrink-0">
                            <div className="flex items-center gap-2 font-semibold text-secondary-800 dark:text-secondary-100">
                                {header}
                            </div>
                            <button
                                onClick={close}
                                aria-label="Cerrar"
                                className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                            >
                                <X className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                            </button>
                        </div>

                        {/* Content scrollable */}
                        <div className="overflow-y-auto flex-1 px-5 py-3">
                            {content}
                        </div>

                        {/* Footer opcional */}
                        {footer && (
                            <div className="px-5 py-4 border-t border-secondary-200 dark:border-secondary-800 shrink-0">
                                {footer(close)}
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
}

export default Drawer;