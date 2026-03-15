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

// Estilos de Lightbox
import "yet-another-react-lightbox/styles.css";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

interface ImageCarouselProps {
    images: string[];
    alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const slides = images.map((src) => ({ src }));

    const handleImageClick = (i: number) => {
        setIndex(i);
        setOpen(true);
    };

    // Define los colores personalizados para Swiper
    const swiperStyles = {
        "--swiper-navigation-color": "#FAD7E8", // Rosa Suave
        "--swiper-pagination-color": "#FAD7E8", // Rosa Suave
    } as React.CSSProperties;

    return (
        <div style={swiperStyles}>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={false}
                lazyPreloadPrevNext={1}
                className="w-full rounded-xl mb-1 overflow-hidden shadow-lg"
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
                                width={800} 
                                height={450}
                                loading="lazy"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="w-full h-full object-cover img-vibrante cursor-pointer"
                                quality={65}
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
        </div>
    );
}
