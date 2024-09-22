'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { songs } from './mockDataBase';
import useFetchSongs from '@/hooks/use-get-songs-rockola';
import useAddSong from '@/hooks/use-add-songs';

type SongRequest = {
  song: string;
  name: string;
  message: string;
};

export default function RockolaComponent() {
  const [search, setSearch] = useState('');
  const [filteredSongs, setFilteredSongs] = useState(songs);
  const [selectedSong, setSelectedSong] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const {
    songs: requests,
    isLoadingFetchSongs: isLoadingRequests,
    fetchSongsError: requestsError,
  } = useFetchSongs();
  useEffect(() => {
    setFilteredSongs(
      songs.filter((song) => song.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  const { addSong } = useAddSong();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSong && name) {
      addSong({
        id: Date.now().toString(),
        created_at: new Date().toISOString(),
        song: selectedSong,
        name,
        message,
      });
      setSelectedSong('');
      setName('');
      setMessage('');
    }
  };

  if (isLoadingRequests) {
    return <p>Cargando...</p>;
  }

  return (
    <div
      className='container mx-auto p-4 max-w-4xl'
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dvh8hozns/image/upload/v1726928104/Monoambiente/mudt3rqsoafyicvrblea.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {' '}
      <div className='flex flex-row items-center justify-center text-center pb-3'>
        <img
          src='https://res.cloudinary.com/dvh8hozns/image/upload/v1726951803/Monoambiente/lg2fd41lt1vhwligrwbu.png'
          alt='Logo de la banda'
          className='lg:h-20 lg:w-30 h-16 justify-center'
        />
        <h1 className='text-3xl font-bold text-center'>La Rockola</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Card className='mb-6 md:mb-0'>
          <CardHeader>
            <CardTitle> Que te gustaría escuchar? </CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type='search'
              placeholder='Busca una canción...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='mb-4 pt-3 text-center'
            />
            <ScrollArea className='h-40 mb-4 border rounded'>
              <ul className='p-2'>
                {filteredSongs.map((song, index) => (
                  <li
                    key={index}
                    className={`p-2 cursor-pointer hover:bg-gray-100 rounded ${
                      selectedSong === song ? 'bg-blue-100' : ''
                    }`}
                    onClick={() => setSelectedSong(song)}
                  >
                    {song}
                  </li>
                ))}
              </ul>
            </ScrollArea>
            <form onSubmit={handleSubmit} className='space-y-2'>
              <Input
                type='text'
                placeholder='Tu nombre'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type='text'
                placeholder='Mensaje para los monos'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                type='submit'
                className='w-full'
                disabled={!selectedSong || !name}
              >
                Pedir Canción
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lista de Pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className='h-[calc(100vh-300px)] md:h-[500px]'>
              {requests?.length === 0 ? (
                <p className='text-center text-gray-500'>Aún no hay pedidos</p>
              ) : (
                requests?.map((request, index) => (
                  <div key={index} className='mb-4 p-4 bg-gray-100 rounded'>
                    <p className='font-bold'>{request.song}</p>
                    <p>Pedida por: {request.name}</p>
                    {request.message && <p>Mensaje: {request.message}</p>}
                  </div>
                ))
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
