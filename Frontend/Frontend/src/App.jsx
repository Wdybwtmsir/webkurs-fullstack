import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PasswordProtected from './components/PasswordProtected/PasswordProtected';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Prices from './components/Prices/Prices';
import Changelog from './components/Changelog/Changelog';
import Testimonials from './components/Testimonials/Testimonials';
import Benefits from './components/Benefits/Benefits';
import Discount from './components/Discount/Discount';
import Blog from './components/Blog/Blog';
import Licenses from './components/Licenses/Licenses';
import AboutHero from './components/AboutHero/AboutHero';
import Values from './components/Values/Values';
import StyleReflection from './components/StyleReflection/StyleReflection';

import ServicesHero from './components/ServicesHero/ServicesHero';
import ServicesCatalog from './components/ServicesCatalog/ServicesCatalog';
import ServicesDiscount from './components/ServicesDiscount/ServicesDiscount';
import Appointment from './components/Appointment/Appointment';

import ServiceSingleHero from './components/ServiceSingleHero/ServiceSingleHero';
import ServiceAbout from './components/ServiceAbout/ServiceAbout';

import TeamHero from './components/TeamHero/TeamHero';
import Experts from './components/Experts/Experts';

import TeamSingleHero from './components/TeamSingleHero/TeamSingleHero';
import TeamSingleAbout from './components/TeamSingleAbout/TeamSingleAbout';

import ContactHero from './components/ContactHero/ContactHero';
import ContactInfo from './components/ContactInfo/ContactInfo';
import ContactAppointment from './components/ContactAppointment/ContactAppointment';

import BlogHero from './components/BlogHero/BlogHero';
import BlogCatalog from './components/BlogCatalog/BlogCatalog';

import BlogSingle from './components/BlogSingle/BlogSingle';

import LocationsHero from './components/LocationsHero/LocationsHero';
import LocationsList from './components/LocationsList/LocationsList';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Prices />
      <Testimonials />
      <Benefits />
      <Discount />
      <Blog />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <AboutHero />
      <Values />
      <About />
      <StyleReflection />
      <Testimonials />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesCatalog />
      <ServicesDiscount />
      <Appointment />
    </>
  );
}

function ServicesSinglePage() {
  return (
    <>
      <ServiceSingleHero />
      <ServiceAbout />
      <Appointment />
    </>
  );
}

function TeamPage() {
  return (
    <>
      <TeamHero />
      <Experts />
    </>
  );
}

function TeamSinglePage() {
  return (
    <>
      <TeamSingleHero />
      <TeamSingleAbout />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactAppointment />
    </>
  );
}

function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogCatalog />
    </>
  );
}

function BlogSinglePage() {
  return (
    <>
      <BlogSingle />
    </>
  );
}

function LocationsPage() {
  return (
    <>
      <LocationsHero />
      <LocationsList />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services-single" element={<ServicesSinglePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team-single" element={<TeamSinglePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-single" element={<BlogSinglePage />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/password-protected" element={<PasswordProtected />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;