"use client";

import { useState, FormEvent } from "react";

export default function Contacto() {
    const [nombre, setNombre] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [mensaje, setMensaje] = useState<string>("");
    const [enviado, setEnviado] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEnviado(true);
    };

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Contacto</h2>
            {!enviado ? (
                <form
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto flex flex-col space-y-4"
                >
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        className="border p-2 rounded-md"
                    />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border p-2 rounded-md"
                    />
                    <textarea
                        placeholder="Mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        required
                        className="border p-2 rounded-md"
                    />
                    <button
                        type="submit"
                        className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                    >
                        Enviar mensaje
                    </button>
                </form>
            ) : (
                <p className="text-green-700 font-semibold mt-4">
                    ¡Gracias por tu mensaje! Te responderemos pronto.
                </p>
            )}

            <div className="mt-8">
                <a
                    href="https://wa.me/34600123456?text=Hola!%20Estoy%20interesado%20en%20alojarme%20en%20La%20Jara%20Rosa"
                    target="_blank"
                    className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
                >
                    Contactar por WhatsApp
                </a>
            </div>
        </div>
    );
}
