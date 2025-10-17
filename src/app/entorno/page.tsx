import Image from "next/image";

export default function Entorno() {
    const lugares = [
        { nombre: "Río Tajo", img: "/images/entorno1.jpg", desc: "Disfruta de paseos por el río y naturaleza." },
        { nombre: "Montes de Toledo", img: "/images/entorno2.jpg", desc: "Senderismo y vistas panorámicas únicas." },
    ];

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Entorno</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {lugares.map((l) => (
                    <div key={l.nombre} className="border rounded-lg p-4 shadow-sm">
                        <Image src={l.img} alt={l.nombre} width={500} height={300} className="rounded-lg" />
                        <h3 className="text-xl font-semibold text-green-700 mt-3">{l.nombre}</h3>
                        <p className="text-gray-700 mt-1">{l.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
