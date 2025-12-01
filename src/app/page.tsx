"use client";

import ImageCarousel from "@/components/ImageCarousel";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const AnimatedCard = ({ i, children }: { i: number; children: React.ReactNode }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`bg-white/40 backdrop-blur-sm shadow-md rounded-lg p-4 text-center fade-in ${inView ? "fade-in-visible" : ""}`}
            style={{ transitionDelay: `${i * 100}ms` }}
        >
            {children}
        </div>
    );
};

export default function Home() {
    const habitaciones = [
        {
            nombre: "El Olivar",
            imagenes: ["/images/HABITACION_CABECERO/cabecero1.jpg", "/images/HABITACION_CABECERO/cabecero3.jpg", "/images/HABITACION_CABECERO/cabecero4.jpg", "/images/HABITACION_CABECERO/cabecero5.jpg", "/images/HABITACION_CABECERO/cabecero5.jpg","/images/HABITACION_CABECERO/cabecero6.jpg","/images/HABITACION_CABECERO/cabecero7.jpg","/images/HABITACION_CABECERO/b_cabecero1.jpg","/images/HABITACION_CABECERO/b_cabecero2.jpg"],
            alt: "Carrusel de imágenes de la Habitación El Olivar en la casa rural La Jara Rosa, Los Navalucillos."
        },
        {
            nombre: "El Encinar",
            imagenes: ["/images/HABITACION_GRIS/gris1.jpg", "/images/HABITACION_GRIS/gris2.jpg", "/images/HABITACION_GRIS/gris3.jpg", "/images/HABITACION_GRIS/gris4.jpg", "/images/HABITACION_GRIS/gris5.jpg","/images/HABITACION_GRIS/b_gris1.jpg","/images/HABITACION_GRIS/b_gris2.jpg"],
            alt: "Carrusel de imágenes de la Habitación El Encinar, con baño privado y decoración moderna."
        },
        {
            nombre: "El Almendro",
            imagenes: ["/images/HABITACION_MADERA/madera3.jpg", "/images/HABITACION_MADERA/madera2.jpg", "/images/HABITACION_MADERA/madera1.jpg","/images/HABITACION_MADERA/madera6.jpg","/images/HABITACION_MADERA/bmadera1.jpg","/images/HABITACION_MADERA/bmadera2.jpg"],
            alt: "Carrusel de imágenes de la Habitación El Almendro, con detalles en madera y ambiente acogedor."
        }
    ];

    const patios = [
        {
            nombre: "Salón y Cocina",
            imagenes: ["/images/SALON/salon (2).jpg","/images/SALON/salon.jpg","/images/SALON/salon2.jpg", "/images/SALON/salon3.jpg", "/images/SALON/salon4.jpg", "/images/SALON/salon5.jpg", "/images/SALON/salon7.jpg","/images/SALON/salon8.jpg"],
            descripcion: "Un espacio abierto y acogedor con cocina totalmente equipada y un cómodo sofá-cama para dos personas.",
            alt: "Salón comedor con cocina americana y sofá cama en la casa rural La Jara Rosa."
        },
        {
            nombre: "Patio y Exteriores",
            imagenes: ["/images/PATIO_EXTERIORES/patio (4).jpg","/images/PATIO_EXTERIOROES/piscina.jpg","/images/PATIO_EXTERIORES/patio (6).jpg","/images/PATIO_EXTERIORES/patio (2).jpg","/images/PATIO_EXTERIORES/patio (3).jpg","/images/PATIO_EXTERIORES/barbacoa.jpg", "/images/PATIO_EXTERIORES/barbacoa1.jpg", "/images/PATIO_EXTERIORES/fachada (4).jpg", "/images/PATIO_EXTERIORES/fachada (2).jpg" ],
            descripcion: "Disfruta de nuestra piscina en verano, una barbacoa al aire libre y una zona chill-out para relajarte.",
            alt: "Patio exterior de La Jara Rosa con piscina, barbacoa y zona chill-out en Los Navalucillos."
        }
    ];
    const rutas = [
        {
            nombre: "El Chorro",
            imagenes: ["/images/chorro/chorro.jpg", "/images/chorro/chorro2.jpg", "/images/chorro/chorro3.jpg", "/images/chorro/chorro4.jpg"],
            alt: "Imágenes de la ruta de senderismo a la cascada de El Chorro, cerca de Los Navalucillos."
        },
        {
            nombre: "La Chorrera",
            imagenes: ["/images/ChorreraChica/la-chorrera-chica.jpg","/images/ChorreraChica/chorrera-chica.jpg", "/images/ChorreraChica/chorrerachica.jpg"],
            alt: "Imágenes de la ruta de senderismo a la cascada de La Chorrera Chica en Cabañeros."
        },
        {
            nombre: "Rocigalgo",
            imagenes: ["/images/rocigalgo/rocigalgo3.jpg", "/images/rocigalgo/rocigalgo.jpg", "/images/rocigalgo/mpgrocigr.jpg"],
            alt: "Vistas desde el pico Rocigalgo, el punto más alto del Parque Nacional de Cabañeros."
        },
        {
            nombre: "La Encina Milenaria",
            imagenes: ["/images/encina/49468.jpg", "/images/encina/encina.jpeg", "/images/encina/ruta-encina-centenaria-1.jpg", "/images/encina/rana-de-cabaneros-en.jpg"],
            alt: "Imágenes de la Encina Milenaria, un árbol monumental en la zona de Los Navalucillos."
        }
    ];

    return (
        <section className="space-y-10">
            {/* Hero */}
            <div className="bg-marron/40 backdrop-blur-sm shadow-md rounded-lg p-6 text-center">
                <h1 className="text-5xl font-heading text-marron-oscuro/70 mb-4">La Jara Rosa: Tu Alojamiento Rural en Los Navalucillos, en Cabañeros</h1>
                <h2 className="text-xl text-white mb-6">
                    Disfruta de un alojamiento moderno y confortable, rodeado de la naturaleza de los Montes de Toledo.
                </h2>
                <div className="flex justify-center gap-4">
                    <a
                        href="https://wa.me/679840695"
                        className="inline-block px-6 py-3 bg-verde text-white rounded hover:bg-verde-claro transition"
                    >
                        Contacta por WhatsApp
                    </a>
                    <Link
                        href="/habitaciones"
                        className="inline-block px-6 py-3 bg-white text-marron rounded hover:bg-verde-pistacho transition"
                    >
                        Ver el Alojamiento
                    </Link>
                </div>
                <div className="mt-4 text-l text-white text-center">
                    <p>- Esta casa está preparada para 6-8 personas</p>
                    <p>- Pet Friendly (consultar antes de reservar)</p>
                    <p>- Ubicada en un sitio perfecto en el pueblo de Los Navalucillos.</p>
                    <p>- Perfecta para alojarse y descansar de todas las rutas del Parque de Cabañeros.</p>
                </div>
            </div>

            {/* Sección de salon y patio */}
            <div className="grid md:grid-cols-2 gap-6">
                {patios.map((patio, i) => (
                    <AnimatedCard key={i} i={i}>
                        <ImageCarousel images={patio.imagenes} alt={patio.alt} />
                        <h2 className="text-2xl font-heading text-marron-oscuro/70 mb-2">{patio.nombre}</h2>
                        <p className="text-gris-texto">{patio.descripcion}</p>
                    </AnimatedCard>
                ))}
            </div>

            <div className="bg-marron/40 backdrop-blur-sm shadow-md rounded-lg p-6 text-center">
                <h2 className="text-4xl font-heading text-marron-oscuro/70 mb-6 text-center">Nuestras Habitaciones</h2>
                <div className="text-l font-heading text-white mb-6 text-center">
                    <p>- Dos camas individuales por habitación.</p>
                    <p>- Baño en cada habitación con columna de ducha termostática, radiador toallero y secador.</p>
                    <p>- Ropa de cama de calidad.</p>
                    <p>- Juego de toallas para cada huésped.</p>
                    <p>- Aire acondicionado con bomba de calor (frío/calor).</p>
                    <p>- Ventilador silencioso para el calor.</p>
                </div>
            </div>


            {/* Sección de habitaciones */}
            <div className="grid md:grid-cols-3 gap-6">
                {habitaciones.map((habitacion, i) => (
                    <AnimatedCard key={i} i={i}>
                        <ImageCarousel images={habitacion.imagenes} alt={habitacion.alt} />
                        <h3 className="text-2xl font-heading text-verde mb-2">Habitación {habitacion.nombre}</h3>
                    </AnimatedCard>
                ))}
            </div>

            {/* Sección de entorno */}
            <div className="bg-marron/40 backdrop-blur-sm shadow-md rounded-lg p-6">
                <h2 className="text-3xl font-heading text-marron-oscuro/70 mb-4 text-center">Explora el Parque de Cabañeros</h2>
                <p className="text-l font-heading text-white mb-6 text-center">
                    Nuestra casa rural es el punto de partida ideal para descubrir las rutas de senderismo, la fauna y los paisajes únicos de los Montes de Toledo.
                </p>
            </div>


            {/* Sección de rutas */}
            <div className="grid md:grid-cols-4 gap-6">
                {rutas.map((ruta, i) => (
                    <AnimatedCard key={i} i={i}>
                        <ImageCarousel images={ruta.imagenes} alt={ruta.alt} />
                        <h3 className="text-l font-heading text-verde mb-2">Ruta {ruta.nombre}</h3>
                    </AnimatedCard>
                ))}
            </div>
        </section>
    );
}
