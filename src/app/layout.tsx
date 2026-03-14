import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Background from "../components/Background";
import { Inter, Poppins, Dancing_Script } from "next/font/google";

// Configuración de fuentes optimizadas
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata = {
    title: "La Jara Rosa-Los Navalucillos",
    description: "Apartamento/Casa Rural moderna en Los Navalucillos en el corazón del Parque Nacional de Cabañeros, rodeada de naturaleza.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" className={`${inter.variable} ${poppins.variable} ${dancingScript.variable}`}>
            <body className="bg-gris-claro text-gris-texto font-sans flex flex-col min-h-screen relative">
                <Background />
                <Navbar />
                <main className="flex-grow max-w-7xl mx-auto w-full px-2 sm:px-4 lg:px-8 py-6">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
