import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { WhyChoose } from './components/WhyChoose';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyButtons } from './components/StickyButtons';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyButtons />
    </div>
  );
}