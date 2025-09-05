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
    <div className="bg-gradient-to-br from-[#f6f8ff] via-white to-[#eaf0ff] rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-200 hover:shadow-2xl relative" style={{ minHeight: 340 }}>
      <div className="w-full h-[220px] sm:h-[280px] relative">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover w-full h-full"
          style={{ objectPosition: "top" }}
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="flex flex-col justify-center items-center px-4 py-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-base sm:text-lg text-[#0F359F]">{name}</span>
          {/* <a
            href={linkedin}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="inline-flex items-center"
          >
            <svg width="16" height="16" viewBox="0 0 32 32" fill="#0A66C2">
              <circle cx="16" cy="16" r="16" fill="#0A66C2"/>
              <path d="M12.5 13.5H10V22H12.5V13.5ZM11.25 12.5C12.05 12.5 12.75 11.8 12.75 11C12.75 10.2 12.05 9.5 11.25 9.5C10.45 9.5 9.75 10.2 9.75 11C9.75 11.8 10.45 12.5 11.25 12.5ZM14.5 13.5V22H17V17.5C17 16.4 17.9 15.5 19 15.5C20.1 15.5 21 16.4 21 17.5V22H23.5V17.2C23.5 15.1 21.9 13.5 19.8 13.5C18.7 13.5 17.8 14.2 17.4 15.1H17.3V13.5H14.5Z" fill="white"/>
            </svg>
          </a> */}
        </div>
        <span className="text-sm sm:text-lg text-gray-700">{role}</span>
       
      </div>
    </div>
  )
}