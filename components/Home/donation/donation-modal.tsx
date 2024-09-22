'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CreditCard, DollarSign, Wallet } from 'lucide-react';

const donationPlatforms = [
  {
    name: 'MiDinero',
    icon: <Wallet className='w-12 h-12' />,
    alias: 'donaciones@ejemplo.com',
  },
  {
    name: 'Transferencia Bancaria',
    icon: <CreditCard className='w-12 h-12' />,
    alias: 'ES12 1234 5678 9012 3456 7890',
  },
  {
    name: 'Efectivo',
    icon: <DollarSign className='w-12 h-12' />,
    alias: 'Visítanos en nuestra oficina',
  },
];

export default function DonationModal() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='text-xl'>Donar ahora</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Elige una plataforma para donar</DialogTitle>
        </DialogHeader>
        <div className='grid grid-cols-3 gap-4 py-4'>
          {donationPlatforms.map((platform) => (
            <button
              key={platform.name}
              className='flex flex-col items-center justify-center p-4 border rounded-md hover:bg-gray-100 transition-colors'
              onClick={() => setSelectedPlatform(platform.name)}
            >
              {platform.icon}
              <span className='mt-2 text-sm'>{platform.name}</span>
            </button>
          ))}
        </div>
        {selectedPlatform && (
          <div className='mt-4 p-4 bg-gray-100 rounded-md'>
            <h3 className='font-semibold'>{selectedPlatform}</h3>
            <p className='mt-2'>
              {
                donationPlatforms.find((p) => p.name === selectedPlatform)
                  ?.alias
              }
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
