import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <Image
        src="/images/fondo.webp"
        alt="Fondo de la casa rural La Jara Rosa"
        fill
        priority
        className="object-cover object-center brightness-[0.8] contrast-[1.1] saturate-[1.1]"
        sizes="100vw"
      />
      {/* Capa de superposición blanca para aclarar el fondo */}
      <div className="absolute inset-0 bg-white opacity-40"></div>
    </div>
  );
}
