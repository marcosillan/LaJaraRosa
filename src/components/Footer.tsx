import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
    const googleMapsUrl = "https://maps.app.goo.gl/sf4mnT4E2jLfB7VPA";
    const email = "lajararosa9@gmail.com";
    const telefono = "+34 679 840 695";
    const escapadaRuralUrl = "https://www.escapadarural.com/casa-rural/toledo/la-jara-rosa"; // Reemplaza "#" con tu enlace real de Escapada Rural

    return (
        <footer className="bg-marron backdrop-blur-sm text-white mt-10 shadow-inner">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Columna 1: Logo y Redes Sociales */}
                    <div className="flex flex-col items-center md:items-start">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/images/logo.png"
                                alt="Logo La Jara Rosa"
                                width={40}
                                height={40}
                            />
                            <span className="text-2xl font-script text-verde-pistacho">
                                La Jara Rosa
                            </span>
                        </Link>
                        <div className="flex gap-4 mt-4">
                            <a href="https://www.instagram.com/lajararosa9?igsh=ODRoYXJnMHByajBz" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-verde-pistacho">
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com/share/17Sevczysz/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-verde-pistacho">
                                <FaFacebook />
                            </a>
                            <a href="https://www.tiktok.com/@lajararosa9?_r=1&_t=ZN-91s3ai0PTYR" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-verde-pistacho">
                                <FaTiktok />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Enlaces de Navegación */}
                    <div className="text-center md:text-left">
                        <h3 className="font-bold text-lg text-verde-claro mb-4">Navegación</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-verde-pistacho">Inicio</Link></li>
                            <li><Link href="/habitaciones" className="hover:text-verde-pistacho">Alojamiento</Link></li>
                            <li><Link href="/entorno" className="hover:text-verde-pistacho">Entorno</Link></li>
                            <li><Link href="/contacto" className="hover:text-verde-pistacho">Contacto</Link></li>
                            <li><a href={escapadaRuralUrl} target="_blank" rel="noopener noreferrer" className="hover:text-verde-pistacho font-bold">Reservar en Escapada Rural</a></li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div className="text-center md:text-left">
                        <h3 className="font-bold text-lg text-verde-claro mb-4">Contacto</h3>
                        <address className="not-italic space-y-2">
                            <p>
                                <a href={`mailto:${email}`} className="hover:text-verde-pistacho">{email}</a>
                            </p>
                            <p>
                                <a href={`tel:${telefono}`} className="hover:text-verde-pistacho">{telefono}</a>
                            </p>
                            <p>
                                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-verde-pistacho">
                                    Plaza del Encinar, 9<br />
                                    Los Navalucillos, 45130, Toledo
                                </a>
                            </p>
                        </address>
                    </div>
                </div>
                <div className="border-t border-gris-medio/30 mt-8 pt-6 text-center text-sm">
                    <p>© {new Date().getFullYear()} Alojamiento Rural La Jara Rosa. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
