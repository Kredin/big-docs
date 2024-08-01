'use client'
import { ModeToggle } from "@/components/ui/mode-toggle"
import { SignInButton, UserButton } from "@clerk/nextjs"
import { Authenticated, Unauthenticated } from "convex/react"
import Image from "next/image"


export function Header(){
    return( 
    <div className="bg-slate-900 py-4">
        <div className="container max-auto flex justify-between items-center">
            <div className="flex items-center gap-4 text-2xl">
                <Image src="/logo.jpeg" width={50} height={50} className="rounded" alt="Docs" />
                BIG DOCS</div>
            <div>
                <Unauthenticated>
                <SignInButton />
                </Unauthenticated>
                <Authenticated>
                    <div className="flex gap-4">
                <ModeToggle />
                <UserButton />
                </div>
                </Authenticated>
            </div>
        </div>
    </div>
)}