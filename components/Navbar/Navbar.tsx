'use client'
import { ACTIONLINKS, NAVLINKS } from "@/components/Navbar/navlinks.const";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState<string>("/");
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <div className="container mx-auto flex justify-between items-center p-4 font-semibold">
            <div className="flex">
                <button className="text-2xl block pr-4 sm:hidden"
                    onClick={() => setOpenMenu(!openMenu)}>
                    <HiMenu />
                </button>
                <Link className="flex gap-2" href={"/"}>
                    <Image src={"/logo.svg"} width={200} height={200} alt="Fitlog Logo Image" className="max-w-6"></Image>
                    <h1 className="uppercase text-2xl font-bold">Fitlog</h1>
                </Link>
            </div>


            {/* MAIN NAVIGATION LINKS */}
            <nav className={`sm:flex ${openMenu? "grid fixed top-15 left-0 bg-background w-full p-4 rounded-b-2xl border-b border-border" : "hidden"}`}>
                {NAVLINKS.map((link, index) => (
                    <Link key={index}
                        className={`p-4 py-2 capitalize text-muted ${activeLink === link.path ? "bg-primary/10 text-primary rounded-full" : ""}`}
                        href={link.path}
                        onClick={() => setActiveLink(link.path)}>
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* SIDE ACTION LINKS */}
            <nav className="flex gap-4 text-muted">
                {ACTIONLINKS.map((link, index) => (
                    <Link key={index}
                        href={link.path}
                        className="text-muted capitalize"
                    >
                        <span>{link.label}</span>
                        <span className={`inline-block px-2 ml-2 rounded-full text-center 
                            ${link.label === "plan" ? " bg-[#C2F800] text-background" : "border border-border"}`}
                        >
                            {link.value}
                        </span>
                    </Link>
                ))}
            </nav>
        </div>
    )
}