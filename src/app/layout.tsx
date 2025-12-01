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
                <main className="flex-grow max-w-10xl mx-10 p-7">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
