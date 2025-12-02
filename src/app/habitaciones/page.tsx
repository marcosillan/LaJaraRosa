"use client";

import ImageCarousel from "@/components/ImageCarousel";
import { useInView } from "react-intersection-observer";

interface Habitacion {
    nombre: string;
    imagenes: string[];
    descripcion: string;
    alt: string;
}

const AnimatedCard = ({ habitacion, i }: { habitacion: Habitacion; i: number }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`bg-white/40 backdrop-blur-sm shadow-md rounded-lg p-4 fade-in ${inView ? "fade-in-visible" : ""}`}
            style={{ transitionDelay: `${i * 100}ms` }}
        >
            <ImageCarousel images={habitacion.imagenes} alt={habitacion.alt} />
            <h2 className="text-2xl font-heading text-verde mb-2">{habitacion.nombre}</h2>
            <p className="text-gris-texto">{habitacion.descripcion}</p>
        </div>
    );
};

export default function Habitaciones() {
    const habitaciones: Habitacion[] = [
        {
            nombre: "Salón y Cocina",
            imagenes: ["/images/SALON/salon (2).jpg","/images/SALON/salon.jpg","/images/SALON/salon2.jpg", "/images/SALON/salon3.jpg", "/images/SALON/salon4.jpg", "/images/SALON/salon5.jpg", "/images/SALON/salon7.jpg","/images/SALON/salon8.jpg"],
            descripcion: "Un espacio abierto y acogedor con cocina totalmente equipada y un cómodo sofá-cama para dos personas, ideal para disfrutar en compañía.",
            alt: "Salón comedor con cocina americana y sofá cama en la casa rural La Jara Rosa."
        },
        {
            nombre: "Patio y Exteriores",
            imagenes: ["/images/PATIO_EXTERIORES/patio (4).jpg","/images/PATIO_EXTERIORES/piscina.jpg","/images/PATIO_EXTERIORES/patio (6).jpg","/images/PATIO_EXTERIORES/patio (2).jpg","/images/PATIO_EXTERIORES/patio (3).jpg","/images/PATIO_EXTERIORES/barbacoa.jpg", "/images/PATIO_EXTERIORES/barbacoa1.jpg", "/images/PATIO_EXTERIORES/fachada (4).jpg", "/images/PATIO_EXTERIORES/fachada (2).jpg" ],
            descripcion: "Disfruta de nuestra piscina en verano, una barbacoa al aire libre y una zona chill-out para relajarte bajo el sol de los Montes de Toledo.",
            alt: "Patio exterior con piscina, barbacoa y zona chill-out en La Jara Rosa."
        },
        {
            nombre: "Habitación El Olivar",
            imagenes: ["/images/HABITACION_CABECERO/cabecero1.jpg", "/images/HABITACION_CABECERO/cabecero3.jpg", "/images/HABITACION_CABECERO/cabecero4.jpg", "/images/HABITACION_CABECERO/cabecero5.jpg", "/images/HABITACION_CABECERO/cabecero5.jpg","/images/HABITACION_CABECERO/cabecero6.jpg","/images/HABITACION_CABECERO/cabecero7.jpg","/images/HABITACION_CABECERO/b_cabecero1.jpg","/images/HABITACION_CABECERO/b_cabecero2.jpg"],
            descripcion: "Una habitación elegante con un cabecero de madera natural y todas las comodidades para una estancia perfecta.",
            alt: "Habitación El Olivar con cabecero de madera natural y vistas a la naturaleza."
        },
        {
            nombre: "Habitación El Encinar",
            imagenes: ["/images/HABITACION_GRIS/gris1.jpg", "/images/HABITACION_GRIS/gris2.jpg", "/images/HABITACION_GRIS/gris3.jpg", "/images/HABITACION_GRIS/gris4.jpg", "/images/HABITACION_GRIS/gris5.jpg","/images/HABITACION_GRIS/b_gris1.jpg","/images/HABITACION_GRIS/b_gris2.jpg"],
            descripcion: "Decorada en tonos grises, esta habitación es un remanso de paz y tranquilidad.",
            alt: "Habitación El Encinar con decoración en tonos grises y baño privado."
        },
        {
            nombre: "Habitación El Almendro",
            imagenes: ["/images/HABITACION_MADERA/madera3.jpg", "/images/HABITACION_MADERA/madera2.jpg", "/images/HABITACION_MADERA/madera1.jpg","/images/HABITACION_MADERA/madera6.jpg","/images/HABITACION_MADERA/bmadera1.jpg","/images/HABITACION_MADERA/bmadera2.jpg"],
            descripcion: "Los detalles en madera y su ambiente acogedor la convierten en la opción ideal para desconectar.",
            alt: "Habitación El Almendro con detalles en madera y ambiente acogedor."
        }
    ];

    return (
        <section className="space-y-10">
            <h1 className="text-4xl md:text-5xl font-heading text-marron mb-6 text-center">Habitaciones del Alojamiento Rural</h1>
            <div className="text-lg md:text-xl text-marron-oscuro text-center space-y-2">
                <p>- Casa preparada para 6-8 personas (incluye sofá-cama en el salón).</p>
                <p>- Ubicada en el corazón de Los Navalucillos, base ideal para explorar el Parque de Cabañeros.</p>
                <p>- Cada habitación cuenta con: dos camas individuales, baño privado con ducha termostática y secador, ropa de cama y toallas de calidad, aire acondicionado (frío/calor) y ventilador de techo.</p>
                <p>- Pet Friendly (se ruega consultar antes de reservar).</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-6">
                {habitaciones.map((habitacion, i) => (
                    <AnimatedCard key={i} habitacion={habitacion} i={i} />
                ))}
            </div>
        </section>
    );
}
