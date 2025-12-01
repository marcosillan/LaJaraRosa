"use client";

import ImageCarousel from "@/components/ImageCarousel";
import { useInView } from "react-intersection-observer";

interface Ruta {
    nombre: string;
    imagenes: string[];
    descripcion: string;
    alt: string;
}

const AnimatedCard = ({ ruta, i }: { ruta: Ruta; i: number }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`bg-white/10 backdrop-blur-sm shadow-md rounded-lg p-4 fade-in ${inView ? "fade-in-visible" : ""}`}
            style={{ transitionDelay: `${i * 100}ms` }}
        >
            <ImageCarousel images={ruta.imagenes} alt={ruta.alt} />
            <h3 className="text-2xl font-heading text-verde mb-2 text-center">{ruta.nombre}</h3>
            <p className="text-gris-texto text-center">{ruta.descripcion}</p>
        </div>
    );
};

export default function Entorno() {
    const rutas: Ruta[] = [
        {
            nombre: "El Chorro",
            imagenes: ["/images/chorro/chorro.jpg", "/images/chorro/chorro2.jpg", "/images/chorro/chorro3.jpg", "/images/chorro/chorro4.jpg"],
            descripcion: "Una ruta de dificultad media-baja con vistas espectaculares, conectada con La Chorrera y el Rocigalgo. Perfecta para todos los públicos.",
            alt: "Cascada de El Chorro en el Parque Nacional de Cabañeros."
        },
        {
            nombre: "La Chorrera",
            imagenes: ["/images/ChorreraChica/la-chorrera-chica.jpg","/images/ChorreraChica/chorrera-chica.jpg", "/images/ChorreraChica/chorrerachica.jpg"],
            descripcion: "Un sendero de mayor distancia y dificultad que merece la pena por la belleza de su paisaje y su cascada.",
            alt: "Ruta de senderismo de La Chorrera Chica."
        },
        {
            nombre: "Rocigalgo",
            imagenes: ["/images/rocigalgo/rocigalgo3.jpg", "/images/rocigalgo/rocigalgo.jpg", "/images/rocigalgo/mpgrocigr.jpg"],
            descripcion: "La etapa de mayor dificultad para coronar el pico más alto de los Montes de Toledo y disfrutar de unas vistas inigualables.",
            alt: "Vistas desde el pico Rocigalgo, el más alto de los Montes de Toledo."
        },
        {
            nombre: "La Encina Milenaria",
            imagenes: ["/images/encina/49468.jpg", "/images/encina/encina.jpeg", "/images/encina/ruta-encina-centenaria-1.jpg", "/images/encina/rana-de-cabaneros-en.jpg"],
            descripcion: "Una ruta sencilla y accesible para contemplar un árbol monumental con casi mil años de historia y dimensiones espectaculares.",
            alt: "La Encina Milenaria de Los Navalucillos."
        },
        {
            nombre: "Risco Ñaña",
            imagenes: ["/images/riscoñaña/nanaprin.jpg", "/images/riscoñaña/nana.jpg", "/images/riscoñaña/nana3.jpg"],
            descripcion: "Una subida imprescindible para disfrutar de un contraste paisajístico único y unas vistas panorámicas de la comarca.",
            alt: "Vistas desde el mirador del Risco Ñaña."
        },
        {
            nombre: "Los Lucillos",
            imagenes: ["/images/lucillos/lucillos.jpg", "/images/lucillos/lucillos2.jpg", "/images/lucillos/lucillos3.jpg"],
            descripcion: "Una ruta con un encanto especial para descubrir los antiguos monumentos que dan nombre al pueblo de Los Navalucillos.",
            alt: "Antiguos molinos en la ruta de Los Lucillos."
        },
        {
            nombre: "El Pueblo",
            imagenes: ["/images/navalucillos/navalu3.jpeg", "/images/navalucillos/navalu.jpeg", "/images/navalucillos/navalu2.jpeg","/images/navalucillos/navalu4.jpeg"],
            descripcion: "Piérdete por las calles de Los Navalucillos, un pueblo con un encanto especial, galardonado en numerosas ocasiones.",
            alt: "Calles y plazas del pueblo de Los Navalucillos."
        },
        {
            nombre: "Miradores de Cabañeros",
            imagenes: ["/images/miradores/miradores.jpg", "/images/miradores/miradores-4.jpg", "/images/miradores/mirador.jpeg","/images/miradores/miradorcaba.jpg"],
            descripcion: "Contempla la inmensidad del Parque Nacional de Cabañeros desde sus numerosos miradores estratégicamente situados.",
            alt: "Vistas panorámicas desde un mirador del Parque Nacional de Cabañeros."
        }
    ];

    return (
        <section className="space-y-10">
            <h1 className="text-5xl font-heading text-marron mb-6 text-center">Rutas de Senderismo y Entorno de Cabañeros y Los Navalucillos</h1>
            <div className="bg-white/10 backdrop-blur-sm shadow-md rounded-lg p-4 text-center">
                <h2 className="text-2xl font-heading text-verde mb-2">Turismo Rural en los Montes de Toledo</h2>
                <p className="text-gris-texto">
                    Disfruta de rutas de senderismo por el Parque Nacional de Cabañeros, con paisajes espectaculares y una fauna única. Además, descubre los increíbles parajes y lugares con encanto de Los Navalucillos.
                </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
                {rutas.map((ruta, i) => (
                    <AnimatedCard key={i} ruta={ruta} i={i} />
                ))}
            </div>
        </section>
    );
}
