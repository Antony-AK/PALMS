import React from 'react';  // ✅ add this line
import Hero from '../Landing/Hero';
import About from '../Landing/About';
import ImpactSection from '../Landing/Impact';
import FoundationSection from '../Landing/About';
import AboutSection from '../Landing/About';
import ServicesSection from '../Landing/Services';
import PortfolioSection from '../Landing/Portfolio';
import TestimonialsSection from '../Landing/Testimonials';
import MembershipCTASection from '../Landing/MembershipCTA';
import Footer from '../Components/Footer';
import FAQSection from '../Landing/FAQ';
import PalmsLearningMoment from '../Components/PalmsLearningMoment';


function Home() {
  return (
    <div className="pt-[72px]">

      <Hero />
      <PalmsLearningMoment />
      <AboutSection />
      <ServicesSection />
      <ImpactSection />
      <TestimonialsSection />
      <MembershipCTASection />
      <FAQSection />

    </div>
  )
}

export default Home


