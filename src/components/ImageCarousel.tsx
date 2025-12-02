"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Lightbox styles
import "yet-another-react-lightbox/styles.css";

// Import custom styles
import './ImageCarousel.module.css';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map(src => ({ src }));

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full rounded-lg mb-4"
        onClick={() => setOpen(true)}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} onClick={() => setIndex(i)}>
            <Image
              src={src}
              alt={`${alt} - Imagen ${i + 1}`}
              width={500}
              height={300}
              className="w-full aspect-video md:aspect-[3/4] object-cover cursor-pointer"
            />
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
