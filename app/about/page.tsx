"use client"

import Image from "next/image"

const team = [
  {
    name: "Gaurav Kumar",
    image: "https://bigohealth-images.s3.us-east-1.amazonaws.com/Website_Resources/about_us_page/gaurav.jpg",
    alt: "gaurav-kumar",
    role: "Software Engineer",
    designation: "Co-Founder & CEO",
    linkedin: "https://www.linkedin.com/in/gaurav-rajput-b14192ba/",
    type: "Founder",
  },
  {
    name: "Shubham Shreyas",
    image: "https://bigohealth-images.s3.us-east-1.amazonaws.com/Website_Resources/about_us_page/shubham.jpeg",
    alt: "shubham-shreyas",
    role: "Software Engineer",
    designation: "Co-Founder & CTO",
    linkedin: "https://www.linkedin.com/in/shubham-shreyas-07183891/",
    type: "Founder",
  },
  {
    name: "Dr Nitesh Rohatagi",
    image: "/drnitesh.jpg",
    alt: "dr-nitesh-rohatagi",
    role: "Clinical Innovation",
    designation: "Lead: Healthtech Innovation",
    linkedin: "https://linkedin.com/in/dr-nitesh-rohatagi",
    type: "Doctor",
  },
  {
    name: "Dr Ankur Bahal",
    image: "/drankur.jpg",
    alt: "dr-ankur-bahal",
    role: "Digital Health",
    designation: "Lead: Healthtech Innovation",
    linkedin: "https://linkedin.com/in/dr-ankur-bahal",
    type: "Doctor",
  },
]

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-2 py-8 sm:px-4 sm:py-16">
      {/* About OncoVault Section */}
      <div className="mb-10 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-brand mb-3 sm:mb-4 text-center">About OncoVault</h1>
        <p className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4 text-center">
          OncoVault is a healthTech company founded by a passionate team of engineers and doctors, with a vision to make cancer care documentation secure, organized, and accessible for every patient and clinician.
        </p>
        <p className="text-sm sm:text-md text-gray-700 mb-3 sm:mb-4 text-center">
          Our mission is to empower patients and healthcare professionals with clarity and confidence at every step of the cancer journey. We leverage technology and innovation to simplify medical records, making them easy to access, share, and understand.
        </p>
        <p className="text-sm sm:text-md text-gray-700 mb-3 sm:mb-4 text-center">
          OncoVault is supported by leading healthcare and technology organizations, and is committed to privacy, security, and better decisions for care.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-brand mb-1 sm:mb-2">Our Vision</h2>
            <p className="text-sm sm:text-md text-gray-800">
              To become the one-stop solution for all cancer care documentation and reporting needs.
            </p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-brand mb-1 sm:mb-2">Our Mission</h2>
            <p className="text-sm sm:text-md text-gray-800">
              To deliver organized, secure, and accessible cancer care documentation for patients and clinicians everywhere.
            </p>
          </div>
        </div>
      </div>
      {/* Team Section */}
      <h2 className="text-lg sm:text-xl font-bold text-brand mb-4 sm:mb-6 text-center">Meet The Team</h2>
      <div className="grid grid-cols-2 gap-4 sm:gap-8">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-gradient-to-br from-[#f6f8ff] via-white to-[#eaf0ff] rounded-xl sm:rounded-3xl shadow-md sm:shadow-2xl flex flex-col items-center py-4 px-2 sm:py-10 sm:px-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-blue-200 hover:shadow-2xl relative"
            style={{ minHeight: 220 }}
          >
            {/* Decorative ring */}
            <div className="absolute top-2 sm:top-6 left-1/2 -translate-x-1/2 w-[60px] h-[60px] sm:w-[130px] sm:h-[130px] rounded-full bg-gradient-to-tr from-blue-100 via-white to-blue-200 blur-xl opacity-50 -z-10"></div>
            {/* Profile Image */}
            <div className="mb-2 sm:mb-4 z-10">
              <div className="w-[48px] h-[48px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden border-2 sm:border-4 border-blue-300 shadow-md sm:shadow-lg flex items-center justify-center bg-white">
                <Image
                  src={member.image}
                  alt={member.alt}
                  width={120}
                  height={120}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
            {/* Name and LinkedIn */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1">
                <span className="font-semibold text-sm sm:text-xl text-[#0F359F]">{member.name}</span>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                  className="inline-flex items-center"
                >
                  <svg width="14" height="14" viewBox="0 0 32 32" fill="#0A66C2">
                    <circle cx="16" cy="16" r="16" fill="#0A66C2"/>
                    <path d="M12.5 13.5H10V22H12.5V13.5ZM11.25 12.5C12.05 12.5 12.75 11.8 12.75 11C12.75 10.2 12.05 9.5 11.25 9.5C10.45 9.5 9.75 10.2 9.75 11C9.75 11.8 10.45 12.5 11.25 12.5ZM14.5 13.5V22H17V17.5C17 16.4 17.9 15.5 19 15.5C20.1 15.5 21 16.4 21 17.5V22H23.5V17.2C23.5 15.1 21.9 13.5 19.8 13.5C18.7 13.5 17.8 14.2 17.4 15.1H17.3V13.5H14.5Z" fill="white"/>
                  </svg>
                </a>
              </div>
              <span className="text-[10px] sm:text-base text-gray-700">{member.role}</span>
            </div>
            <hr className="w-3/4 my-1 sm:my-2 border-gray-200" />
            <div className="text-center text-gray-900 font-semibold text-xs sm:text-lg">{member.designation}</div>
            <span className={`mt-2 sm:mt-4 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-[10px] sm:text-sm font-bold shadow ${member.type === "Founder" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
              {member.type}
            </span>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl sm:rounded-3xl pointer-events-none transition-all duration-300 opacity-0 hover:opacity-100 hover:shadow-[0_0_20px_4px_rgba(15,53,159,0.10)]"></div>
          </div>
        ))}
      </div>
    </section>
  )
}