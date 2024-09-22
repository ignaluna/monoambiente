import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import DonationModal from './donation-modal';

export function DonationSection() {
  return (
    <section
      id='donate'
      className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16'
    >
      <Card
        className='overflow-hidden shadow-lg'
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dvh8hozns/image/upload/v1726928106/Monoambiente/ok8psumgp2sicuit7fsi.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CardHeader className='bg-primary text-primary-foreground p-6 sm:p-8'>
          <CardTitle className='text-2xl sm:text-3xl font-bold mb-2'>
            Apoya nuestra música
          </CardTitle>
        </CardHeader>
        <CardContent className='p-6 sm:p-8'>
          <div className='flex items-center justify-center'>
            <DonationModal />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
