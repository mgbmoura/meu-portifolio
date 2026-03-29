import Link from "next/link";
import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';


// A wrapper to make Header a client component to use usePathname
'use client'

export function Header() {
    const pathname = usePathname();
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
            <div className="container flex h-16 items-center">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg mr-6">
                    <Lightbulb className="h-6 w-6 text-primary" />
                    <span className="font-headline">IdeaSpark</span>
                </Link>
                <nav className="flex items-center gap-2">
                    <Button variant="ghost" asChild className={cn(pathname === '/' && 'bg-muted')}>
                        <Link href="/">Generator</Link>
                    </Button>
                    <Button variant="ghost" asChild className={cn(pathname === '/saved' && 'bg-muted')}>
                        <Link href="/saved">Saved Prompts</Link>
                    </Button>
                </nav>
            </div>
        </header>
    );
}
