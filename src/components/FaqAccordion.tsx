"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export type FaqItem = {
    q: string;
    a: React.ReactNode;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-3">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={index}
                        className="rounded-xl border transition-colors"
                        style={{ borderColor: "var(--border-default)" }}
                    >
                        <button
                            type="button"
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left transition-colors hover:bg-blue-500/10"
                            aria-expanded={isOpen}
                        >
                            <span className="font-medium" style={{ color: "var(--text-primary)" }}>
                                {item.q}
                            </span>
                            <ChevronDownIcon
                                className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                                style={{ color: "var(--text-secondary)" }}
                            />
                        </button>

                        {isOpen && (
                            <div
                                className="px-5 pb-5 text-sm rounded-b-xl"
                                style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "var(--text-secondary)" }}
                            >
                                {item.a}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}


