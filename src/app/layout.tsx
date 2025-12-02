import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
    title: "La Jara Rosa-Los Navalucillos",
    description: "Apartamento/Casa Rural moderna en Los Navalucillos en el corazón del Parque Nacional de Cabañeros, rodeada de naturaleza.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body className="bg-gris-claro text-gris-texto font-sans flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow max-w-7xl mx-auto w-full px-2 sm:px-4 lg:px-8 py-6">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
