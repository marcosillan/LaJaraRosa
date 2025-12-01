"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const googleMapsUrl = "https://maps.app.goo.gl/sf4mnT4E2jLfB7VPA";

    return (
        <header className="w-full bg-marron backdrop-blur-sm shadow-sm border-b border-gris-medio/30 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
                {/* LOGO / NOMBRE */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/images/logo.png"
                        alt="Logo La Jara Rosa"
                        width={40}
                        height={40}
                    />
                    <span className="text-4xl font-script text-verde-pistacho">
                        La Jara Rosa
                    </span>
                </Link>

                {/* MENU DESKTOP */}
                <ul className="hidden md:flex items-center gap-8 text-gris-texto font-medium">
                    <li><Link href="/" className="hover:text-verde-claro text-white">Inicio</Link></li>
                    <li><Link href="/habitaciones" className="hover:text-verde-claro text-white">Alojamiento</Link></li>
                    <li><Link href="/entorno" className="hover:text-verde-claro text-white">Entorno</Link></li>
                    <li><Link href="/contacto" className="hover:text-verde-claro text-white">Contacto</Link></li>
                </ul>

                {/* BOTONES */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-rosa text-white px-4 py-2 rounded-lg hover:bg-rosa-suave"
                    >
                        Ubicación
                    </a>
                    <a
                        href="https://wa.me/34679840695"
                        target="_blank"
                        className="bg-verde-claro text-white px-4 py-2 rounded-lg hover:bg-verde"
                    >
                        Reservar
                    </a>
                </div>

                {/* MENÚ MÓVIL */}
                <button
                    className="md:hidden text-3xl text-verde-pistacho"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <HiX /> : <HiMenu />}
                </button>
            </nav>

            {/* MENU MOBILE DROPDOWN */}
            {open && (
                <div className="md:hidden bg-marron/95 border-t border-gris-medio/30 py-4 px-5 space-y-4">
                    <Link href="/" className="block text-white hover:text-verde-claro" onClick={() => setOpen(false)}>Inicio</Link>
                    <Link href="/habitaciones" className="block text-white hover:text-verde-claro" onClick={() => setOpen(false)}>Alojamiento</Link>
                    <Link href="/entorno" className="block text-white hover:text-verde-claro" onClick={() => setOpen(false)}>Entorno</Link>
                    <Link href="/contacto" className="block text-white hover:text-verde-claro" onClick={() => setOpen(false)}>Contacto</Link>
                    <div className="flex flex-col gap-4 pt-4 border-t border-gris-medio/30">
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-rosa text-marron text-center py-2 rounded-lg hover:bg-verde-pistacho"
                        >
                            Ubicación
                        </a>
                        <a
                            href="https://wa.me/34679840695"
                            target="_blank"
                            className="bg-verde-claro text-white text-center py-2 rounded-lg hover:bg-verde"
                        >
                            Reservar por WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
