'use client';

import { BandMembers } from './band-members';
import { DonationSection } from './donation/donation-section';
import { IntroVideo } from './intro-video';

export function Home() {
  return (
    <div className='bg-gradient-to-b from-gray-100 to-gray-200'>
      <main className='container mx-auto px-4 py-8'>
        <IntroVideo />
        {/* <FullScreenCarousel /> */}
        <BandMembers />
        <DonationSection />
      </main>
      <footer className='bg-primary text-primary-foreground py-4'>
        <div className='container mx-auto px-4 text-center'>
          <p>&copy; 2024 Nombre de la Banda. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
