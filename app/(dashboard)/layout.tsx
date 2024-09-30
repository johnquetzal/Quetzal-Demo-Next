"use client";

import { useI18n } from "@quetzallabs/i18n";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CircleIcon, Home, LogOut } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/lib/auth";
import { signOut } from "@/app/(login)/actions";
import { useRouter } from "next/navigation";
import Image from "next/image";
import quetzalLogo from "../../images/quetzal.png";

import { NextIntlClientProvider, useMessages, useLocale } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

function Header() {
    const t = useTranslations();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, setUser } = useUser();
    const router = useRouter();
    async function handleSignOut() {
        setUser(null);
        await signOut();
        router.push("/");
    }
    return (
        <header className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        alt={t("Quetzal Logo")}
                        src={quetzalLogo}
                        width={50}
                        height={50}
                    />
                    <span className="ml-2 text-xl font-semibold text-gray-900">
                        {t("Quetzal")}
                    </span>
                </Link>
                <div className="flex items-center space-x-4">
                    <Link
                        href="https://quetzal.mintlify.app"
                        className="text-sm font-medium text-gray-700 hover:text-gray-900"
                    >
                        {t("Docs")}
                    </Link>
                    {user ? (
                        <DropdownMenu
                            open={isMenuOpen}
                            onOpenChange={setIsMenuOpen}
                        >
                            <DropdownMenuTrigger asChild>
                                <Avatar className="cursor-pointer size-9">
                                    <AvatarImage alt={user.name || ""} />
                                    <AvatarFallback>
                                        {user.email
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="p-0">
                                <DropdownMenuItem className="w-full cursor-pointer m-1">
                                    <Link
                                        href="/dashboard"
                                        className="flex w-full items-center"
                                    >
                                        <Home className="mr-2 h-4 w-4" />
                                        <span>{t("Dashboard")}</span>
                                    </Link>
                                </DropdownMenuItem>
                                <form action={handleSignOut} className="p-1">
                                    <button
                                        type="submit"
                                        className="flex w-full"
                                    >
                                        <DropdownMenuItem className="w-full cursor-pointer">
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>{t("Sign out")}</span>
                                        </DropdownMenuItem>
                                    </button>
                                </form>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button
                            asChild
                            className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-full"
                        >
                            <Link href="https://getquetzal.com/signup">
                                {t("Sign Up")}
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
}
export default function Layout({ children }: { children: React.ReactNode }) {
    const messages = useMessages();
    console.log(`BUMFUCK `);
    console.log(messages);
    const locale = useLocale();
    console.log(locale);

    return (
        <section className="flex flex-col min-h-screen">
            <Header />
            {children}
        </section>
    );
}
