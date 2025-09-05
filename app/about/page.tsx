"use client"

import TeamCard from "@/components/teamCard"
import Image from "next/image"

const team = [
    {
    name: "Dr Nitesh Rohatagi",
    image: "/drnitesh.jpg",
    alt: "dr-nitesh-rohatagi",
    role: "Medical Oncologist",
    designation: "Lead: Healthtech Innovation",
    linkedin: "https://linkedin.com/in/dr-nitesh-rohatagi",
    type: "Doctor",
  },
  {
    name: "Dr Ankur Bahal",
    image: "/drankur.jpg",
    alt: "dr-ankur-bahal",
    role: "Medical Oncologist",
    designation: "Lead: Healthtech Innovation",
    linkedin: "https://linkedin.com/in/dr-ankur-bahal",
    type: "Doctor",
  },
  {
    name: "Gaurav Kumar",
    image: "gauravdp.jpg",
    alt: "gaurav-kumar",
    role: "Software Engineer",
    designation: "BigoHealth Cofounder & CEO",
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

]

export default function About() {
  return (
   // ...existing code...
    <section className="max-w-6xl mx-auto px-2 py-8 sm:px-6 sm:py-16">
      {/* About OncoVault Section */}
     
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
    {/* Left: About Us Content */}
    <div>
      <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#204060] mb-4 tracking-tight">
        About <span className="text-[#0F359F]">OncoVault</span>
      </h1>
       <p className="text-lg sm:text-xl text-gray-700 mb-4 text-justify">
        Navigating cancer treatment can be overwhelming. Multiple reports, consultations, and updates often create confusion and stress
      At OncoVault, we believe managing cancer care should be simple, organized, and patient-centric. Our platform enables patients and caregivers to seamlessly <span className="font-semibold text-[#204060]">store, track, and understand</span> all medical reports in one secure place.
      </p>
       <p className="text-lg sm:text-xl text-gray-700 mb-4 text-justify">
        Our mission is to transform medical data into <span className="font-semibold text-[#0F359F]">actionable insights</span>, paving the way for a healthier future for generations to come.
       </p>
     
    </div>
    {/* Right: Related Image */}
    <div className="flex justify-center">
      <div className="border rounded-xl overflow-hidden shadow-md bg-white p-2">
        <Image
          src="/woman-with-cancer.jpg" // Replace with your actual image path
          alt="OncoVault About"
          width={600}
          height={480}
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
      {/* Team Section */}
<div className="mb-10 text-center">
  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#204060] tracking-tight leading-tight">
    Team Who Truly Understands Cancer Journey
   
  </h2>
  <div className="mx-auto mt-3 w-32 h-1 bg-[#0F359F] rounded-full"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
  {team.map((member) => (
    <TeamCard
      key={member.name}
      name={member.name}
      image={member.image}
      alt={member.alt}
      role={member.role}
      designation={member.designation}
      linkedin={member.linkedin}
    />
  ))}
</div>


    </section>
// ...existing code...
  )
}