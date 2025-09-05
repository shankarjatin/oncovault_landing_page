import Image from "next/image"

interface TeamCardProps {
  name: string
  image: string
  alt: string
  role: string
  designation: string
  linkedin: string
}

export default function TeamCard({
  name,
  image,
  alt,
  role,
  designation,
  linkedin,
}: TeamCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#f6f8ff] via-white to-[#eaf0ff] rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-200 hover:shadow-2xl relative">
  <div className="w-full h-[180px] sm:h-[280px] relative">
    <Image
      src={image}
      alt={alt}
      fill
      className="object-cover w-full h-full"
      style={{ objectPosition: "top" }}
      sizes="(max-width: 768px) 100vw, 25vw"
    />
  </div>
  <div className="flex flex-col justify-center items-center px-4 py-3">
    <div className="flex items-center gap-2 mb-1">
      <span className="font-semibold text-[13px] md:text-lg text-[#0F359F] ">
        {name}
      </span>
    </div>
    <span className="text-[12px] sm:text-lg text-gray-700">{role}</span>
  </div>
</div>

  )
}