import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Navbar() {
    return (
    <nav className="flex h-[60px] bg-white justify-center items-center text-black gap-5 ">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-stretch">
            <div className="flex flex-shrink-0 items-center">
        <img src="ducati.svg" alt="logo" className="h-10 w-auto flex ml-8" />
            </div>
        </div>
        <Link href={'/'}>Home</Link>
        <Link href={'/about-us'}>About Us</Link>
        <Link href={'/product'}>Product</Link>
        <Link href={'/teams'}>Teams</Link>
    </nav>
    )
}