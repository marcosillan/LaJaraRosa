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

// 🔥 ESTILOS OBLIGATORIOS DEL LIGHTBOX (Esto evitaba que se viera bien)
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
                className="w-full rounded-lg mb-4"
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <div 
                            onClick={() => handleImageClick(i)}
                            className="relative w-full aspect-video cursor-pointer overflow-hidden rounded-lg"
                        >
                            <Image
                                src={src}
                                alt={`${alt} - Imagen ${index + 1}`}
                                width={1200}
                                height={675}
                                priority={i === 0}
                                loading={i === 0 ? "eager" : "lazy"}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                quality={70}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
            />
        </>
    );
}
