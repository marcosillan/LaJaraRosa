"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const googleMapsUrl = "https://maps.app.goo.gl/sf4mnT4E2jLfB7VPA";
    const telefono = "+34679840695";
    const telefonoDisplay = "679 840 695";

    return (
        <header className="w-full bg-marron backdrop-blur-sm shadow-sm border-b border-gris-medio/30 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 lg:px-8 py-3">
                {/* LOGO / NOMBRE */}
                <Link href="/" className="flex items-center gap-2 sm:gap-3">
                    <Image
                        src="/images/logo.png"
                        alt="Logo La Jara Rosa"
                        width={32}
                        height={32}
                        className="sm:w-10 sm:h-10"
                        priority
                    />
                    <span className="text-2xl sm:text-4xl font-script text-verde-pistacho">
                        La Jara Rosa
                    </span>
                </Link>

                {/* MENU DESKTOP */}
                <ul className="hidden md:flex items-center gap-6 text-gris-texto font-medium">
                    <li><Link href="/" className="hover:text-verde-claro text-white">Inicio</Link></li>
                    <li><Link href="/habitaciones" className="hover:text-verde-claro text-white">Alojamiento</Link></li>
                    <li><Link href="/entorno" className="hover:text-verde-claro text-white">Entorno</Link></li>
                    <li><Link href="/contacto" className="hover:text-verde-claro text-white">Contacto</Link></li>
                </ul>

                {/* BOTONES DE ACCIÓN RÁPIDA */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Botón Ubicación */}
                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-rosa text-white p-2 sm:px-3 sm:py-2 rounded-lg hover:bg-rosa-suave transition-colors flex items-center justify-center"
                        title="Cómo llegar"
                    >
                        <FaMapMarkerAlt className="text-lg sm:text-xl" />
                        <span className="hidden lg:inline ml-2 text-sm font-medium">Cómo llegar</span>
                    </a>

                    {/* Botón WhatsApp */}
                    <a
                        href={`https://wa.me/${telefono.replace("+", "")}`}
                        target="_blank"
                        className="bg-verde-claro text-white p-2 sm:px-3 sm:py-2 rounded-lg hover:bg-verde transition-colors flex items-center justify-center"
                        title="WhatsApp"
                    >
                        <FaWhatsapp className="text-xl sm:text-2xl" />
                    </a>

                    {/* Botón Teléfono */}
                    <a
                        href={`tel:${telefono}`}
                        className="bg-rosa-suave text-marron p-2 sm:px-3 sm:py-2 rounded-lg hover:bg-white transition-colors flex items-center justify-center"
                        title="Llamar"
                    >
                        <FaPhoneAlt className="text-lg sm:text-xl" />
                        <span className="hidden lg:inline ml-2 text-sm font-semibold">{telefonoDisplay}</span>
                    </a>

                    {/* MENÚ MÓVIL (Hamburguesa) */}
                    <button
                        className="md:hidden text-3xl text-verde-pistacho ml-1"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </nav>

            {/* MENU MOBILE DROPDOWN */}
            {open && (
                <div className="md:hidden bg-marron/95 border-t border-gris-medio/30 py-4 px-5 space-y-4">
                    <Link href="/" className="block text-white hover:text-verde-claro" onClick={() => setOpen(false)}>Inicio</Link>
                    <Link href="/habitaciones" className="block text-white hover:text-verde-claro" onClick={() => setOpen(false)}>Alojamiento</Link>
                    <Link href="/entorno" className="block text-white hover:text-verde-claro" onClick={() => setOpen(false)}>Entorno</Link>
                    <Link href="/contacto" className="block text-white hover:text-verde-claro" onClick={() => setOpen(false)}>Contacto</Link>
                </div>
            )}
        </header>
    );
}
