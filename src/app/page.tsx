import Image from "next/image";

export default function Home() {
    return (
        <div>
            <section className="relative text-center">
                <Image
                    src="/images/hero.jpg"
                    alt="Casa Rural La Jara Rosa"
                    width={1200}
                    height={600}
                    className="rounded-2xl shadow-lg mx-auto"
                />
                <h2 className="text-3xl font-bold text-green-700 mt-6">
                    Casa Rural La Jara Rosa
                </h2>
                <p className="mt-2 text-gray-700">
                    Un refugio moderno en plena naturaleza en Los Navalucillos (Toledo).
                </p>
                <a
                    href="https://wa.me/34600123456?text=Hola!%20Estoy%20interesado%20en%20La%20Jara%20Rosa"
                    target="_blank"
                    className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
                >
                    Contactar por WhatsApp
                </a>
            </section>

            <section className="mt-10 text-center">
                <h3 className="text-2xl font-semibold text-green-700">Naturaleza y confort</h3>
                <p className="mt-3 text-gray-600">
                    Disfruta de una experiencia única en los Montes de Toledo con todo el confort de un alojamiento moderno.
                </p>
            </section>
        </div>
    );
}
