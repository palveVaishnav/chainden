'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

// Wallet adapter imports
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

export default function NavigationBar() {
    const wallets = [new PhantomWalletAdapter()];

    return (
        <header className="border-b bg-white sticky top-0 z-10">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                <Link href="/" className="text-xl font-semibold">
                    ChainDen
                </Link>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                </Button>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/routes" className="text-sm font-medium hover:text-primary">
                        Explore
                    </Link>
                    <Link href="/profile" className="text-sm font-medium hover:text-primary">
                        Profile
                    </Link>
                    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
                        <WalletProvider wallets={wallets} autoConnect>
                            <WalletModalProvider>
                                <div className="flex items-center gap-4">
                                    <WalletMultiButton />
                                    <WalletDisconnectButton />
                                </div>
                            </WalletModalProvider>
                        </WalletProvider>
                    </ConnectionProvider>
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://avatar.iran.liara.run/public/avatar.png" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </nav>
            </div>
        </header>
    );
}
