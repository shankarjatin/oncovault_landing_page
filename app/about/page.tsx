"use client"

import ContactUs from "@/components/contactus"
import TeamCard from "@/components/teamCard"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const team = [
    {
    name: "Dr Nitesh Rohatagi",
    image: "/drniteshdp.jpg",
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
    role: "Patient advocate",
    designation: "BigoHealth Cofounder & CEO",
    linkedin: "https://www.linkedin.com/in/gaurav-rajput-b14192ba/",
    type: "Founder",
  },
  {
    name: "Shubham Shreyas",
    image: "https://bigohealth-images.s3.us-east-1.amazonaws.com/Website_Resources/about_us_page/shubham.jpeg",
    alt: "shubham-shreyas",
    role: "Patient advocate",
    designation: "Co-Founder & CTO",
    linkedin: "https://www.linkedin.com/in/shubham-shreyas-07183891/",
    type: "Founder",
  },

]

export default function About() {
  return (
   // ...existing code...
    <section className="max-w-6xl mx-2 md:mx-auto px-2 py-8 sm:px-6 sm:py-16">
      {/* About OncoVault Section */}
     
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center mb-12">
    {/* Left: About Us Content */}
    <div>
      <h1 className="text-xl md:text-3xl sm:text-4xl font-heading font-extrabold text-[#204060] mb-2 mt-2 md:mt-4 md:mb-4 tracking-tight">
        About <span className="text-brand">OncoVault</span>
      </h1>
       <p className="text-md md:text-lg sm:text-xl text-gray-700 mb-4 text-justify">
       Navigating cancer treatment is overwhelming. Multiple reports, endless consultations, and constant updates often create confusion and stress for both patients and doctors
We at <span className="font-semibold text-brand">The OncoVault</span> believe cancer care should be data-centric, organized, and truly patient-centric and created a secure platform where patients and doctors can seamlessly store, track, and understand all medical reports in one place.</p>
 <p className="text-md md:text-lg sm:text-xl text-gray-700 mb-4 text-justify">
Having your medical data <span className="font-semibold text-brand">summarised & vaulted</span> is likely to improve oncology outcomes, empower better decisions and brings clarity when it’s needed the most.</p>
 <p className="text-md md:text-lg sm:text-xl text-gray-700 mb-4 text-justify">
Our mission is to transform complex cancer data into clear <span className="font-semibold text-brand">actionable insights</span>  that guide patients and doctors toward better outcomes and a healthier tomorrow.</p>
      {/* </p>
       <p className="text-md md:text-lg sm:text-xl text-gray-700 mb-4 text-justify">
        Our mission is to transform medical data into <span className="font-semibold text-brand">actionable insights</span>, paving the way for a healthier future for generations to come.
       </p> */}
     
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
  <h2 className="text-lg md:text-2xl sm:text-3xl font-extrabold text-[#204060] tracking-tight leading-tight">
    Team Who Truly Understands Cancer Journey
   
  </h2>
  <div className="mx-auto mt-3 w-32 h-1 bg-brand rounded-full"></div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
  <div className="mt-5 w-full">
              <a
                href="#"
                className="group flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-6 py-2 md:py-5 shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <p className="text-md md:text-lg font-semibold text-brand">Download the App</p>
                  <p className="text-xs md:text-sm text-blue-700/80">
                   and organise reports in one secure app.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-brand group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
<ContactUs />
    </section>
// ...existing code...
  )
}