import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Timeline } from '../components/sections/Experience/Timeline';
import { Specialties } from '../components/sections/Specialties';
import { Stack } from '../components/sections/Stack';
import { Principles } from '../components/sections/Principles';
import { Lab } from '../components/sections/Lab/Lab';
import { Contact } from '../components/sections/Contact';

function Home() {
  return (
    <div className="min-h-screen bg-base text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Specialties />
        <Stack />
        <Principles />
        <Lab />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
