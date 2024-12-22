'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

// Wallet adapter imports
import { ConnectionProvider, WalletProvider, useWallet } from "@solana/wallet-adapter-react";
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import React from "react";

// Define the POST request function
const loginUser = async (publicKey: string) => {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ publicKey }),
        });
        const data = await response.json();
        if (response.ok) {
            console.log('Public key saved:', data);
        } else {
            console.error('Error saving public key:', data);
        }
    } catch (error) {
        console.error('Error in POST request:', error);
    }
};

export default function NavigationBar() {
    const wallets = [new PhantomWalletAdapter()];
    // Using the public key for further interaction 
    const { publicKey, connected } = useWallet();

    // Trigger POST request when wallet is connected
    React.useEffect(() => {
        if (connected && publicKey) {
            loginUser(publicKey.toBase58());
        }
    }, [connected, publicKey]);

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
                    <Link href="/routes/add" className="text-sm font-medium hover:text-primary">
                        Add yours
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
