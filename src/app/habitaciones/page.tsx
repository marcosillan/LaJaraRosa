import Image from "next/image";

export default function Habitaciones() {
    const habitaciones = [
        { nombre: "Habitación Doble", img: "/images/habitacion1.jpg", desc: "Cómoda habitación para 2 personas." },
        { nombre: "Suite Familiar", img: "/images/habitacion2.jpg", desc: "Amplia suite para familias con todas las comodidades." },
    ];

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Habitaciones</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {habitaciones.map((hab) => (
                    <div key={hab.nombre} className="border rounded-lg p-4 shadow-sm">
                        <Image src={hab.img} alt={hab.nombre} width={500} height={300} className="rounded-lg" />
                        <h3 className="text-xl font-semibold text-green-700 mt-3">{hab.nombre}</h3>
                        <p className="text-gray-700 mt-1">{hab.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
