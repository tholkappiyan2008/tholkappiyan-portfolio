import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F5F7FA] selection:bg-[#8B9CFF] selection:text-[#0B0D10] font-sans relative">
      <Navbar />
      <main id="main-content" className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
