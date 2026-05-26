"use client";

import OpinionCard from "@/components/OpinionCard";
import { useInView } from "react-intersection-observer";

// Componente para animar la entrada de cada tarjeta de opinión
const AnimatedOpinionCard = ({ review, i }: { review: any; i: number }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`fade-in ${inView ? "fade-in-visible" : ""}`}
            style={{ transitionDelay: `${i * 100}ms` }}
        >
            <OpinionCard nombre={review.nombre} comentario={review.comentario} rating={review.rating} />
        </div>
    );
};

export default function Opiniones() {
    const reviews = [
        {
            nombre: "",
            comentario: "Una maravilla de casa, todo nuevo y súper limpio. Está en muy buen sitio en el pueblo, tiene todo lo necesario y la anfitriona es muy amable y atenta. Para repetir sin duda.",
            rating: 5,
        },
        {
            nombre: "",
            comentario: "La casa es espectacular y preciosa, esta todo nuevo, se nota. Es un sitio tranquilo y precioso. Los dueños encantadores también. Fuimos 8 personas, fue una experiencia 10/10 que queremos volveremos a repetir sin duda.",
            rating: 5,
        },
        {
            nombre: "",
            comentario: "La casa es una pasada! Yo llevo alojandome muchos años en casas rurales por toda España y esta es sin duda una de las mejores. No le falta de nada, muy limpia, confortable, con mucha luz, las camas muy cómodas, con todo el menaje de cocina, hasta te dejan cosas para desayunar, y en los baños amenities y secador en cada baño, que por cierto , hay un baño completo en cada habitación y eso se agradece muchísimo; yo valoro mucho la privacidad aunque compartas casa con la familia.",
            rating: 5,
        },

    ];

    return (
        <div className="space-y-8 md:space-y-12">
            <h1 className="text-3xl md:text-5xl font-heading text-marron mb-4 text-center">Qué dicen nuestros huéspedes</h1>
            <p className="text-base md:text-xl text-gris-texto text-center">
                Nos enorgullece compartir las experiencias de quienes ya han disfrutado de La Jara Rosa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, i) => (
                    <AnimatedOpinionCard key={i} review={review} i={i} />
                ))}
            </div>
        </div>
    );
}
