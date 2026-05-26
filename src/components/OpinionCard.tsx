import React from "react";
import { FaStar } from "react-icons/fa";

interface OpinionCardProps {
    nombre: string;
    comentario: string;
    rating: number;
    delay?: number; // Para animaciones escalonadas
}

export default function OpinionCard({ nombre, comentario, rating, delay = 0 }: OpinionCardProps) {
    return (
        <div 
            className="bg-white/40 backdrop-blur-sm shadow-lg rounded-xl p-6 flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style={{ animationDelay: `${delay}ms` }}
        >
            <p className="text-gris-texto italic text-base md:text-lg flex-grow">
                “{comentario}”
            </p>
            <div className="mt-4 flex items-center justify-between">
                <div className="font-bold text-verde text-base md:text-lg">
                    - {nombre || "Huésped Anónimo"}
                </div>
                <div className="flex text-yellow-500">
                    {[...Array(rating)].map((_, j) => (
                        <FaStar key={j} className="w-4 h-4 md:w-5 md:h-5" />
                    ))}
                </div>
            </div>
        </div>
    );
}
