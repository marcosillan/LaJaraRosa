export default function Opiniones() {
    const reviews = [
        {
            nombre: "Ana García",
            comentario: "Ha sido una estancia maravillosa. La casa es preciosa, moderna y no le falta detalle. El entorno es espectacular, perfecto para desconectar. Volveremos sin duda.",
            rating: 5,
        },
        {
            nombre: "Luis Pérez",
            comentario: "Un lugar increíble para ir con niños. La casa es muy cómoda y el jardín es perfecto para que jueguen. Hemos disfrutado de la naturaleza y la tranquilidad. Totalmente recomendable.",
            rating: 5,
        },
        {
            nombre: "Marta Sánchez",
            comentario: "La Jara Rosa es un refugio de paz. La decoración es exquisita y el confort es máximo. Ideal para una escapada romántica.",
            rating: 5,
        },
    ];

    return (
        <div className="space-y-12">
            <div className="text-center">
                <h2 className="section-title text-marron">Qué dicen nuestros huéspedes</h2>
                <p className="section-subtitle">
                    Nos enorgullece compartir las experiencias de quienes ya han disfrutado de La Jara Rosa.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {reviews.map((review, i) => (
                    <div key={i} className="bg-white/80 backdrop-blur-sm card p-8 text-center">
                        <p className="text-gris-texto italic">“{review.comentario}”</p>
                        <div className="mt-4 font-bold text-lg text-verde">- {review.nombre}</div>
                        <div className="mt-2 flex justify-center text-yellow-500">
                            {[...Array(review.rating)].map((_, j) => (
                                <svg key={j} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.35 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" /></svg>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
