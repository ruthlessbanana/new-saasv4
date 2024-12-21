import Analytics from '@/components/Analytics';
import CallToAction from '@/components/CallToAction';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Integrations from '@/components/Integrations';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Analytics />
      <Integrations />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </main>
  );
} 