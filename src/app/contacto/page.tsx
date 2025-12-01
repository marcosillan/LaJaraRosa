import Map from "@/components/Map";

export const metadata = {
    title: "Contacto y Ubicación de La Jara Rosa | Los Navalucillos",
    description: "Contacta con nosotros para reservar tu estancia o resolver cualquier duda. Encuentra nuestra ubicación en Los Navalucillos (Toledo) y cómo llegar a nuestra casa rural.",
};

export default function Contacto() {
    const googleMapsUrl = "https://maps.app.goo.gl/sf4mnT4E2jLfB7VPA";
    const email = "lajararosa9@gmail.com";
    const telefono = "+34 679 840 695";

    return (
        <section className="max-w-xl mx-auto bg-white/40 backdrop-blur-sm shadow-md rounded-lg p-6 space-y-6">
            <h1 className="text-3xl font-heading text-verde mb-4 text-center">Contacto y Ubicación</h1>

            <div className="text-center">
                <h2 className="text-2xl font-heading text-verde mb-4">¿Hablamos?</h2>
                <p className="text-xl font-heading text-marron mb-4">
                    Llama o escribe un WhatsApp al <a href={`tel:${telefono}`} className="hover:underline">{telefono}</a><br />
                    O si lo prefieres, envíanos un correo a <a href={`mailto:${email}`} className="hover:underline">{email}</a>
                </p>
            </div>

            <div className="text-center">
                <h2 className="text-2xl font-heading text-verde mt-8 mb-4">¿Dónde Estamos?</h2>
                <address className="mt-4 text-xl text-marron not-italic">
                    Plaza del Encinar, 9<br />
                    Los Navalucillos, 45130, Toledo<br />
                </address>
                <div className="flex justify-center gap-4 mt-4">
                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-verde text-white rounded-lg hover:bg-verde-claro transition"
                    >
                        Abrir en Google Maps
                    </a>
                    <a
                        href={`mailto:${email}`}
                        className="inline-block px-6 py-3 bg-rosa text-white rounded-lg hover:bg-rosa-suave transition"
                    >
                        Enviar Correo
                    </a>
                </div>
            </div>

            <div className="border-t border-gris-medio/30 pt-6 mt-6">
                <h2 className="text-2xl font-heading text-verde mb-4 text-center">Envíanos un Mensaje Directo</h2>
                <form
                    className="flex flex-col space-y-4"
                    action={`https://wa.me/34679840695`}
                    method="get"
                    target="_blank"
                >
                    <input
                        type="text"
                        name="text"
                        placeholder="Escribe aquí tu consulta..."
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-verde"
                        required
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-verde text-white rounded hover:bg-verde-claro"
                    >
                        Enviar por WhatsApp
                    </button>
                </form>
            </div>
        </section>
    );
}
