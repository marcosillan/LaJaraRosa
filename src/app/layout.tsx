import "./globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

interface RootLayoutProps {
    children: React.ReactNode;
}
// Añade metadata con icono
export const metadata = {
    title: "Casa Rural La Jara Rosa",
    description: "Casa Rural moderna en Los Navalucillos (Toledo), rodeada de naturaleza y confort.",
    icons: {
        icon: "/favicon/favicon.ico", // ruta a tu favicon dentro de /public
    },
};
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="es">
        <body className="bg-white text-gray-800">
        <DefaultSeo {...SEO} />
        <header className="p-4 shadow-md bg-white flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-700">La Jara Rosa</h1>
            <nav className="space-x-4 text-gray-700">
                <a href="/" className="hover:text-green-600">Inicio</a>
                <a href="/habitaciones" className="hover:text-green-600">Habitaciones</a>
                <a href="/entorno" className="hover:text-green-600">Entorno</a>
                <a href="/opiniones" className="hover:text-green-600">Opiniones</a>
                <a href="/contacto" className="hover:text-green-600">Contacto</a>
            </nav>
        </header>
        <main className="max-w-5xl mx-auto p-4">{children}</main>
        <footer className="bg-gray-100 text-center py-4 mt-10">
            <p>© 2025 Casa Rural La Jara Rosa - Los Navalucillos (Toledo)</p>
        </footer>
        </body>
        </html>
    );
}
