"use client";

import { useInView } from "react-intersection-observer";
import ImageCarousel from "@/components/ImageCarousel";

interface LazyCarouselProps {
    images: string[];
    alt: string;
    maxMobile?: number; 
}

export default function LazyCarousel({ images, alt }: LazyCarouselProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "800px 0px", // Margen mucho más amplio para que ya esté cargado al llegar
    });

    return (
        <div ref={ref} className="min-h-[250px]">
            {/* Renderizamos siempre la estructura, pero el contenido real se activa por inView o por carga nativa de Next.js */}
            <ImageCarousel images={images} alt={alt} />
        </div>
    );
}
