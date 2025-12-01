import Link from "next/link";

export default function Header() {
    return (
        <header className="p-4 shadow-md bg-white flex justify-between items-center sticky top-0 z-50">
            <h1 className="text-2xl font-heading text-verde">
                <Link href="/">La Jara Rosa</Link>
            </h1>
            <nav className="space-x-4 text-gris-texto">
                <Link href="/" className="hover:text-verde transition">Inicio</Link>
                <Link href="/habitaciones" className="hover:text-verde transition">Habitaciones</Link>
                <Link href="/entorno" className="hover:text-verde transition">Entorno</Link>
                <Link href="/opiniones" className="hover:text-verde transition">Opiniones</Link>
                <Link href="/contacto" className="hover:text-verde transition">Contacto</Link>
            </nav>
        </header>
    );
}
