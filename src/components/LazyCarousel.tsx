"use client";

import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

// Usamos dynamic import para que el código de Swiper no bloquee la carga inicial
const ImageCarousel = dynamic(() => import("./ImageCarousel"), {
  loading: () => <div className="w-full aspect-video bg-white/20 animate-pulse rounded-xl shadow-md mb-1"></div>,
  ssr: false
});

interface LazyCarouselProps {
    images: string[];
    alt: string;
    maxMobile?: number; 
}

export default function LazyCarousel({ images, alt, maxMobile = 4 }: LazyCarouselProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "600px 0px", // Precargamos 600px antes de que llegue el usuario
    });

    return (
        <div ref={ref} className="w-full min-h-[150px]">
            {inView ? <ImageCarousel images={images} alt={alt} /> : <div className="w-full aspect-video bg-white/10 rounded-xl mb-1"></div>}
        </div>
    );
}
