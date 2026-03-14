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
        rootMargin: "800px 0px", 
    });

    return (
        <div ref={ref}>
            <ImageCarousel images={images} alt={alt} />
        </div>
    );
}
