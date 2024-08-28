import Header from './components/header/Header'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Hero from './components/hero/Hero';
import Facts from './components/facts/Facts';
import About from './components/about/About';
import Services from './components/services/Services';
import Gallery from './components/gallery/Gallery';
import Facilities from './components/facilities/Facilities';
import Team from './components/team/Team';
import ClientReviews from './components/clientReviews/ClientReviews';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <Header />
      <main >
        <Hero />
        <Facts />
        <About />
        <Services />
        <Gallery />
        <Facilities />
        <Team />
        <ClientReviews />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>


  );
}
