export default function Opiniones() {
    const reviews = [
        { nombre: "Ana G.", comentario: "Un lugar increíble, tranquilidad total." },
        { nombre: "Luis P.", comentario: "Perfecto para desconectar en familia." },
    ];

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Opiniones</h2>
            <div className="space-y-4 max-w-xl mx-auto">
                {reviews.map((r, i) => (
                    <div key={i} className="border p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700">"{r.comentario}"</p>
                        <p className="mt-2 font-semibold text-green-700">- {r.nombre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
