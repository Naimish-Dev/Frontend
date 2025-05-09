import Container from '@/components/ui/container';
import HeaderHero from '../components/HeaderHero';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <HeaderHero />
      <div>
        <Hero></Hero>
      </div>
    </div>
  );
}
