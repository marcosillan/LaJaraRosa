import { useInView } from "react-intersection-observer";
import ImageCarousel from "@/components/ImageCarousel";


interface LazyCarouselProps {
    images: string[];
    alt: string;
    maxMobile?: number; // opcional, por si quieres cambiarlo por sección
}

export default function LazyCarousel({ images, alt, maxMobile = 3 }: LazyCarouselProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "200px",
    });

    const filteredImages = limitImagesForMobile(images, maxMobile);

    return (
        <div ref={ref}>
            {inView ? <ImageCarousel images={filteredImages} alt={alt} /> : null}
        </div>
    );
}


export function limitImagesForMobile(images: string[], maxMobile: number) {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
        return images.slice(0, maxMobile);
    }
    return images;
}

