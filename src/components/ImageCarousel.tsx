"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
                    <SwiperSlide key={i} onClick={() => { setIndex(i); setOpen(true); }}>
                        <Image
                            src={src}
                            alt={`${alt} - Imagen ${i + 1}`}
                            width={1600}
                            height={900}
                            priority={i === 0}                 // 🔥 SOLO LA PRIMERA
                            loading={i === 0 ? "eager" : "lazy"}
                            fetchPriority={i === 0 ? "high" : "auto"}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="w-full aspect-video object-cover cursor-pointer"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides}
                    index={index}
                />
            )}
        </>
    );
}
