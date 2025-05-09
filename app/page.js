'use client'

import {Suspense} from "react";
import HomePage from "@/components/HomePage";

export default function Home() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <HomePage />
        </Suspense>
    )
}
