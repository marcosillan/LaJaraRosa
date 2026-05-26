"use client";

import ImageCarousel from "@/components/ImageCarousel";
import LazyCarousel from "@/components/LazyCarousel";
import { useInView } from "react-intersection-observer";
import Link from "next/link"; // Mantener Link para navegación interna
import { FaWhatsapp, FaHome, FaEye } from "react-icons/fa";

const AnimatedCard = ({ i, children, className = "" }: { i: number; children: React.ReactNode; className?: string }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`bg-white/40 backdrop-blur-sm shadow-md rounded-lg p-2 sm:p-4 text-center fade-in ${inView ? "fade-in-visible" : ""} ${className}`}
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
            imagenes: [
                "/images/HABITACION_CABECERO/cabecero4.jpeg",
                "/images/HABITACION_CABECERO/cabecero1.jpg",
                "/images/HABITACION_CABECERO/cabecero3.jpg",
                "/images/HABITACION_CABECERO/cabecero.jpg",
                "/images/HABITACION_CABECERO/cabecero7.jpg",
                "/images/HABITACION_CABECERO/b_cabecero2.jpg"
            ],
            alt: "Carrusel de imágenes de la Habitación El Olivar en la casa rural La Jara Rosa, Los Navalucillos."
        },
        {
            nombre: "El Encinar",
            imagenes: [
                "/images/HABITACION_GRIS/gris5.jpeg",
                "/images/HABITACION_GRIS/gris6.jpeg",
                "/images/HABITACION_GRIS/gris1.jpg",
                "/images/HABITACION_GRIS/gris3.jpg",
                "/images/HABITACION_GRIS/b_gris2.jpg"
            ],
            alt: "Carrusel de imágenes de la Habitación El Encinar, con baño privado y decoración moderna."
        },
        {
            nombre: "El Almendro",
            imagenes: [
                "/images/HABITACION_MADERA/madera.jpg",
                "/images/HABITACION_MADERA/madera3.jpg",
                "/images/HABITACION_MADERA/madera (2).jpg",
                "/images/HABITACION_MADERA/bmadera2.jpg"
            ],
            alt: "Carrusel de imágenes de la Habitación El Almendro, con detalles en madera y ambiente acogedor."
        }
    ];

    const patios = [
        {
            nombre: "Salón y Cocina",
            imagenes: [
                "/images/SALON/salonb.jpeg",
                "/images/SALON/salona.jpeg",
                "/images/SALON/salonestufa.jpeg",
                "/images/SALON/sofa.jpeg",
                "/images/SALON/cocina.jpeg"

            ],
            descripcion: "Un espacio abierto y acogedor con cocina totalmente equipada y un cómodo sofá-cama para dos personas.",
            alt: "Salón comedor con cocina americana y sofá cama en la casa rural La Jara Rosa."
        },
        {
            nombre: "Patio y Exteriores",
            imagenes: [
                "/images/PATIO_EXTERIORES/patio.jpeg",
                "/images/PATIO_EXTERIORES/mesapatio.jpeg",
                "/images/PATIO_EXTERIORES/tumbonas2.jpeg",
                "/images/PATIO_EXTERIORES/barbacoa2.jpeg",
                "/images/PATIO_EXTERIORES/barbacoa3.jpeg",
                "/images/PATIO_EXTERIORES/fachada2.jpg",
            ],
            descripcion: "Disfruta de nuestro patio exterior, una barbacoa al aire libre y una zona chill-out para relajarte.",
            alt: "Patio exterior de La Jara Rosa con piscina, barbacoa y zona chill-out en Los Navalucillos."
        },
        {
            nombre: "Piscina",
            imagenes: [
                "/images/piscina/piscina2.jpeg", // Asumo que tienes estas imágenes o las crearás
                "/images/piscina/piscinacascada1.jpeg",
                "/images/piscina/piscinadia.jpeg",
                "/images/piscina/piscinanoche.jpeg",
                "/images/piscina/piscina.jpg",
            ],
            descripcion: "Piscina del alojamiento rural La Jara Rosa perfecta para tiempos de calor y vacaciones.",
            alt: "Piscina en el patio de la casa rural La Jara Rosa."
        }
    ];
    const rutas = [
        {
            nombre: "El Chorro",
            imagenes: ["/images/chorro/chorro2.jpg", "/images/chorro/chorro3.jpg", "/images/chorro/chorro4.jpg"],
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
            imagenes: ["/images/encina/49468.jpg", "/images/encina/ruta-encina-centenaria-1.jpg", "/images/encina/rana-de-cabaneros-en.jpg"],
            alt: "Imágenes de la Encina Milenaria, un árbol monumental en la zona de Los Navalucillos."
        }
    ];

    return (
        <section className="space-y-8">
            {/* Hero */}
            <div className="bg-marron/40 backdrop-blur-sm shadow-md rounded-lg p-4 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading text-marron-oscuro/70 mb-4">La Jara Rosa: Tu Alojamiento Rural en Los Navalucillos, en Cabañeros</h1>
                <h2 className="text-base sm:text-lg md:text-xl text-white mb-6">
                    Disfruta de un alojamiento moderno y confortable, rodeado de la naturaleza de los Montes de Toledo.
                </h2>

                {/* BOTONES UNIFICADOS */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                    <a
                        href="https://wa.me/679840695"
                        className="btn-hero bg-verde text-white hover:bg-verde-claro"
                    >
                        <FaWhatsapp className="text-xl" />
                        <span>WhatsApp</span>
                    </a>
                    <Link
                        href="/habitaciones"
                        className="btn-hero bg-white text-marron hover:bg-rosa-suave">
                        <FaEye className="text-xl" />
                        <span>Ver Alojamiento</span>
                    </Link>
                    <a // Cambiado de Link a <a> para enlace externo
                        href="https://www.escapadarural.com/casa-rural/toledo/la-jara-rosa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-hero bg-marron text-white hover:bg-marron-oscuro">
                        <FaHome className="text-xl" />
                        <span>Escapada Rural</span>
                    </a>
                </div>

                <div className="mt-4 text-xs sm:text-sm md:text-base text-white text-center">
                    <p>- Esta casa está preparada para 6-8 personas</p>
                    <p>- Pet Friendly (consultar antes de reservar)</p>
                    <p>- Ubicada en un sitio perfecto en el pueblo de Los Navalucillos.</p>
                    <p>- Perfecta para alojarse y descansar de todas las rutas del Parque de Cabañeros.</p>
                </div>
            </div>

            {/* Sección de salon y patio */}
            <div className="flex flex-wrap justify-center gap-4"> {/* Contenedor flex para la parrilla */}
                {patios.map((patio, i) => (
                    <AnimatedCard
                        key={i}
                        i={i}
                        className="w-full sm:w-[calc(50%-0.5rem)]" // Ancho para 2 columnas en sm+
                    >
                        <LazyCarousel images={patio.imagenes} alt={patio.alt} maxMobile={4} />
                        <h2 className="text-lg sm:text-xl md:text-2xl font-heading text-marron-oscuro/70 mb-2">{patio.nombre}</h2>
                        <p className="text-sm sm:text-base text-gris-texto">{patio.descripcion}</p>
                    </AnimatedCard>
                ))}
            </div>

            <div className="bg-marron/40 backdrop-blur-sm shadow-md rounded-lg p-4 sm:p-6 text-center">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-heading text-marron-oscuro/70 mb-4 text-center">Nuestras Habitaciones</h2>
                <div className="text-xs sm:text-sm md:text-base font-heading text-white text-center">
                    <p>- Dos camas individuales por habitación.</p>
                    <p>- Baño en cada habitación con columna de ducha termostática, radiador toallero y secador.</p>
                    <p>- Ropa de cama de calidad.</p>
                    <p>- Juego de toallas para cada huésped.</p>
                    <p>- Aire acondicionado con bomba de calor (frío/calor).</p>
                    <p>- Ventilador silencioso para el calor.</p>
                </div>
            </div>


            {/* Sección de habitaciones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {habitaciones.map((habitacion, i) => (
                    <AnimatedCard key={i} i={i}>
                        <LazyCarousel images={habitacion.imagenes} alt={habitacion.alt} maxMobile={4}/>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-heading text-verde mb-2">Habitación {habitacion.nombre}</h3>
                    </AnimatedCard>
                ))}
            </div>

            {/* Sección de entorno */}
            <div className="bg-marron/40 backdrop-blur-sm shadow-md rounded-lg p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl md:text-3xl font-heading text-marron-oscuro/70 mb-4 text-center">Explora el Parque de Cabañeros</h2>
                <p className="text-xs sm:text-sm md:text-base font-heading text-white text-center">
                    Nuestra casa rural es el punto de partida ideal para descubrir las rutas de senderismo, la fauna y los paisajes únicos de los Montes de Toledo.
                </p>
            </div>


            {/* Sección de rutas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
                {rutas.map((ruta, i) => (
                    <AnimatedCard key={i} i={i}>
                        <LazyCarousel images={ruta.imagenes} alt={ruta.alt}  maxMobile={3}/>
                        <h3 className="text-sm sm:text-base md:text-lg font-heading text-verde mb-2">Ruta {ruta.nombre}</h3>
                    </AnimatedCard>
                ))}
            </div>
        </section>
    );
}
