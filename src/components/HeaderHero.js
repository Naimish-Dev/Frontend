import React from 'react';
import Button from './ui/filterbtn';
import Container from './ui/container';

export default function HeaderHero() {
  return (
    <header className="w-full py-6">
      <Container>
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              F
            </div>
            <span className="font-bold text-xl">flowel</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#integrations" className="text-gray-600 hover:text-primary transition-colors">
              Integrations
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="">Get started</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
