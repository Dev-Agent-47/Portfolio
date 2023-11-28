import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'
import ServiceSection from '../components/ServiceSection'
import QualificationSection from '../components/QualificationSection'
import PortfolioSection from '../components/PortfolioSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'
import MobileNavbar from '../components/MobileNavbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <ServiceSection />
            <QualificationSection />
            <PortfolioSection />
            <ContactSection />
            <FooterSection />
            <MobileNavbar />
        </>
    )
}

export default Home