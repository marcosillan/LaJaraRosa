"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

// Estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Estilos obligatorios del Lightbox
import "yet-another-react-lightbox/styles.css";

import "./ImageCarousel.module.css";

const Lightbox = dynamic(
    () => import("yet-another-react-lightbox"),
    { ssr: false }
);

interface ImageCarouselProps {
    images: string[];
    alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // Solo cargamos la calidad máxima cuando abren el Lightbox
    const slides = images.map((src) => ({ src }));

    const handleImageClick = (i: number) => {
        setIndex(i);
        setOpen(true);
    };

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={false}
                lazyPreloadPrevNext={1}
                className="w-full rounded-xl mb-4 overflow-hidden shadow-lg"
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <div 
                            onClick={() => handleImageClick(i)}
                            className="img-container aspect-video"
                        >
                            <Image
                                src={src}
                                alt={`${alt} - Imagen ${index + 1}`}
                                width={1000} // Aumentamos a 1000 para mayor nitidez en pantallas HD
                                height={562}
                                priority={i === 0} 
                                loading={i === 0 ? "eager" : "lazy"}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="w-full h-full object-cover img-vibrante cursor-pointer"
                                quality={75} // Subimos al 75% para un equilibrio óptimo calidad/peso
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides}
                    index={index}
                    styles={{ container: { backgroundColor: "rgba(0, 0, 0, .95)" } }}
                />
            )}
        </>
    );
}
