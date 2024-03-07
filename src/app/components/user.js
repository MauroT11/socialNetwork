'use client'

import { useUser } from "@clerk/nextjs"

export function User() {
    const user = useUser();
    
}