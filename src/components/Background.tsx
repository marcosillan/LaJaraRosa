import Image from "next/image";

export default function Background() {
  return (
    /* 
       Usamos h-[100dvh] para navegadores modernos que soportan "dynamic viewport height"
       y fallback a h-screen. La clave es fixed y pointer-events-none.
    */
    <div className="fixed inset-0 -z-10 w-full h-screen h-[100dvh] overflow-hidden pointer-events-none touch-none">
      <Image
        src="/images/fondo.webp"
        alt="Fondo de la casa rural La Jara Rosa"
        fill
        priority
        className="object-cover object-center brightness-[0.8] contrast-[1.1] saturate-[1.1] will-change-transform"
        sizes="100vw"
      />
      {/* Capa de superposición blanca para aclarar el fondo */}
      <div className="absolute inset-0 bg-white opacity-40"></div>
    </div>
  );
}
